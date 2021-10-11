"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/index.js



const Home = ({
  videos
}) => {
  console.log(videos);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Hello"
  });
};

const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const client = new external_graphql_request_namespaceObject.GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN
    }
  });
  const query = external_graphql_request_namespaceObject.gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
  const data = await client.request(query);
  const videos = data.videos;
  return {
    props: {
      videos
    }
  };
};
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(871));
module.exports = __webpack_exports__;

})();