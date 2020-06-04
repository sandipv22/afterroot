/*
 * Copyright (C) 2020 Sandip Vaghela
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

import React from "react"
import Layout from "src/components/Layout"
import Container from "src/components/Container/container"

export default () => (
  <>
    <Layout title="Pointer Replacer" navIcon="arrow_back">
      <Container
        styles={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/eWcV0PUwlzs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Container>
    </Layout>
  </>
)
