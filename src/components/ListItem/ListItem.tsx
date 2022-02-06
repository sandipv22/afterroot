/*
 * Copyright (C) 2020-2022 Sandip Vaghela
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from "react"
import { myRemoteConfig } from "../../scripts/firebase"
import { fetchAndActivate, getValue } from "firebase/remote-config"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import CircularProgress from "@mui/material/CircularProgress"
import { NextLinkComposed } from "../Link/Link"
import { ListItemButton } from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

interface IProps {
  dbRef: string
}

interface IState {
  apps: App[]
  isLoaded: boolean
}

interface App {
  title: any
  description: any
  path: string
  graphic: string
  external: string
}

class FireListItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      apps: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    myRemoteConfig.settings = {
      fetchTimeoutMillis: 60000,
      minimumFetchIntervalMillis: 0,
    }
    fetchAndActivate(myRemoteConfig).then(() => {
      let apps: App[] = JSON.parse(getValue(myRemoteConfig, "apps").asString())
      let newState = []
      for (let app in apps) {
        if (apps.hasOwnProperty(app)) {
          newState.push({
            title: apps[app].title,
            description: apps[app].description,
            path: `/apps/${apps[app].path}`,
            graphic: `/logos/${apps[app].path}.png`,
            external: apps[app].external,
          })
        }
      }
      this.setState({
        apps: newState,
        isLoaded: true,
      })
    })
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <List>
            {this.state.apps.map((app) => {
              return (
                <ListItem disablePadding key={app.path}>
                  <ListItemButton
                    component={NextLinkComposed}
                    to={app.external ? app.external : { pathname: app.path }}
                  >
                    <ListItemIcon>
                      <img src={app.graphic} alt={app.title} />
                    </ListItemIcon>
                    <ListItemText
                      primary={app.title}
                      secondary={app.description}
                    />
                    {app.external ? <OpenInNewIcon /> : null}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </>
      )
    } else {
      return (
        <div
          style={{
            width: "100%",
            paddingBottom: "5%",
            paddingTop: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )
    }
  }
}

export default FireListItem
