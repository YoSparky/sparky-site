var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5GSGPABM.css";

// app/assets/fonts.css
var fonts_default = "/build/_assets/fonts-CAEBSELN.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: fonts_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// app/components/Header.tsx
var import_react4 = require("@remix-run/react");

// app/components/Modal.tsx
var import_react3 = require("react"), import_react_transition_group = require("react-transition-group"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Modal = ({ children, modalState, closeModal }) => {
  let onKeyDown = (0, import_react3.useCallback)((event) => {
    event.key === "Escape" && closeModal();
  }, []);
  return (0, import_react3.useEffect)(() => {
    if (modalState) {
      document.addEventListener("keydown", onKeyDown), document.body.classList.add("h-screen", "overflow-hidden");
      return;
    }
    document.removeEventListener("keydown", onKeyDown), document.body.classList.remove("h-screen", "overflow-hidden");
  }, [onKeyDown, modalState]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react_transition_group.Transition,
    {
      in: modalState,
      timeout: modalState ? 0 : 500,
      appear: !0,
      unmountOnExit: !0,
      children: (state) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            "aria-hidden": !0,
            onClick: () => closeModal(),
            className: `
              transition-${state}
              transition-all
              duration-500
              fixed
              top-0
              left-0
              h-full
              w-full
              bg-black
              opacity-0
              [&.transition-entered]:opacity-60
            `
          },
          void 0,
          !1,
          {
            fileName: "app/components/Modal.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "div",
          {
            className: `
              transition-${state}
              [&.transition-entered]:translate-x-0
              [&.transition-exited]:translate-x-full
              translate-x-full
              bg-halfColonialWhite
              container
              transition-all
              duration-500
              fixed
              h-full
              max-w-4xl
              p-7
              right-0
              top-0
              w-full
              z-100
            `,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "transform rotate-90 translate-x-1/2 origin-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "button", onClick: () => closeModal(), children: "x | Close" }, void 0, !1, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 75,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/Modal.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this),
              children
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Modal.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Modal.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Modal.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
};

// app/assets/sparkyLogo.png
var sparkyLogo_default = "/build/_assets/sparkyLogo-5HOJMYLR.png";

// app/components/Header.tsx
var import_react5 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Header() {
  let [modalState, setModalState] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-4 fixed top-0 left-0 w-screen z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container grid grid-cols-3 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { title: "home", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "w-24 md:w-32", src: sparkyLogo_default }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center text-sm", children: "Ecomm Wizards" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => {
        setModalState(!modalState);
      }, children: "CONTACT" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal, { modalState, closeModal: () => setModalState(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: "SLIDE INTO OUR CRMs" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/Hero.tsx
var import_react7 = require("@remix-run/react");

// app/components/LiquidDropHover.tsx
var import_react6 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), LiquidDropHover = ({ children }) => {
  let [hasHovered, hover] = (0, import_react6.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { onMouseEnter: () => hover(!0), className: `button button--liquid-drop w-max ${hasHovered ? "" : "default-hover-animation-state"}`, children }, void 0, !1, {
    fileName: "app/components/LiquidDropHover.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// app/components/Hero.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container py-36 flex flex-col justify-center relative gap-28 z-[1]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "font-bold text-5xl md:text-8xl text-shadow", children: "We design, build, & optimize magical ecommerce sites that glow with personality." }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiquidDropHover, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: "/portfolio", children: "See the sites." }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute left-0 top-0 min-h-max max-w-[100vw] w-full overflow-hidden z-[0]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "-z-[1] relative bottom-0 left-0 transform translate-x-1/2 -translate-y-1/4 aspect-square w-full bg-energyYellow mix-blend-multiply rounded-[20vw]", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/FeaturedPortfolio.tsx
var import_react8 = require("@remix-run/react");

// app/assets/HeyDude-Portfolio.png
var HeyDude_Portfolio_default = "/build/_assets/HeyDude-Portfolio-SZS5T4EB.png";

// app/assets/Legends-Portfolio.png
var Legends_Portfolio_default = "/build/_assets/Legends-Portfolio-LLF3SX6K.png";

// app/components/FeaturedPortfolio.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function FeaturedPortfolio() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative w-full max-md:overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "right-edge-container flex flex-col justify-center relative gap-4 md:gap-7 z-[1]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Latest Work" }, void 0, !1, {
        fileName: "app/components/FeaturedPortfolio.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid gap-16 md:grid-cols-2 md:gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col max-md:pr-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "flex flex-col", to: "/portfolio/heydude", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "block bg-mix-blend-multiply", src: HeyDude_Portfolio_default }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 13,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { className: "block font-bold text-5xl text-shadow h1 transform -translate-y-[65%] -ml-1 leading-none", children: "Hey Dude" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 14,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 12,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "flex flex-wrap md:border border-current md:w-max max-md:text-center max-md:gap-1 [&_li]:max-md:border [&_li:not(:last-of-type)]:md:border-r [&_li]:border-current [&_li]:p-4 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shopify Plus Migration" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 17,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Design" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 18,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Development" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 19,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 16,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pt-96 mt-auto hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "button w-max", to: "/portfolio", children: "View More Work" }, void 0, !1, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FeaturedPortfolio.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "flex flex-col", to: "/portfolio/heydude", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "block md:mt-[70%]", src: Legends_Portfolio_default }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 27,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { className: "block font-bold text-5xl text-shadow h1 -ml-1 transform -translate-y-[65%] leading-none", children: "Legends" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { className: "flex flex-wrap md:border border-current md:w-max max-md:text-center max-md:gap-1 [&_li]:max-md:border [&_li:not(:last-of-type)]:md:border-r [&_li]:border-current [&_li]:p-4 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shopify Plus Migration" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 31,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Design" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 32,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Development" }, void 0, !1, {
              fileName: "app/components/FeaturedPortfolio.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FeaturedPortfolio.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FeaturedPortfolio.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Link, { className: "md:hidden button w-max", to: "/portfolio", children: "View More Work" }, void 0, !1, {
          fileName: "app/components/FeaturedPortfolio.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FeaturedPortfolio.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FeaturedPortfolio.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute left-0 top-0 bottom-0 aspect-[2/1] max-w-[100vw] w-full z-[0]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-z-[1] relative bottom-0 left-0 transform -translate-x-[70%] rotate-[65deg] h-[100vh] w-full bg-energyYellow mix-blend-multiply", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/FeaturedPortfolio.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/FeaturedPortfolio.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FeaturedPortfolio.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/FeaturedPartners.tsx
var import_react9 = require("@remix-run/react");

// app/components/icons/ElevarLogo.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SvgElevarLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 215,
    height: 100,
    fill: "none",
    viewBox: "0 0 215 100",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("g", { fill: "#30302C", clipPath: "url(#a)", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M42.666 38v.01a12.66 12.66 0 0 0-7.965 2.803 12.144 12.144 0 0 0-4.301 7.125 15.335 15.335 0 0 0-.215 2.92v10.619c0 .89.01 1.779-.126 2.663-.284 1.837-1.087 3.717-2.594 4.915-.632.51-1.39.852-2.198.991-.044.007-.232 0-.258.036-.025.035 0 .061 0 .074a3.78 3.78 0 0 0-.01.405V72a12.632 12.632 0 0 0 6.108-1.598c1.855-1.034 3.432-2.562 4.37-4.446a9.212 9.212 0 0 0 .937-3.562 12.78 12.78 0 0 1-3.63-.523 12.524 12.524 0 0 0 7.496-4.606 11.692 11.692 0 0 0 2.386-7.094v-8.717h17.428l1.6-3.454H42.666Zm-6.242 18.597c-.27 0-.534-.078-.758-.224a1.34 1.34 0 0 1-.503-.597 1.304 1.304 0 0 1 .294-1.453 1.394 1.394 0 0 1 1.486-.291c.248.1.462.271.612.49a1.31 1.31 0 0 1-.167 1.683 1.365 1.365 0 0 1-.964.392ZM132.358 41.574h-4.093l8.006 17.264H141.307l8.007-17.264h-4.112l-6.422 13.848-6.422-13.848ZM92.134 55.386v3.452h14.446v-3.452H95.667V41.574h-3.533v13.812ZM86.833 55.386H75.832v-3.453h11V48.48h-11v-3.454h11v-3.452H72.298V58.838h14.536v-3.452ZM158.968 44.99l3.212 6.944h-6.433l3.221-6.944Zm2.409-3.416h-4.825l-8.006 17.262h3.998l1.606-3.444h9.636l1.606 3.453h3.999l-8.014-17.271ZM110.196 41.574v17.264h14.536v-3.452h-11.003v-3.453h11.003V48.48h-11.003v-3.454h11.003v-3.452h-14.536ZM184.699 45.028h-8.164v3.452h8.164c.469 0 .918-.182 1.249-.506.332-.324.518-.763.518-1.22 0-.459-.186-.898-.518-1.222a1.786 1.786 0 0 0-1.249-.506m0-3.453c1.235 0 2.431.42 3.382 1.19a5.155 5.155 0 0 1 1.826 3.027 5.07 5.07 0 0 1-.572 3.468 5.261 5.261 0 0 1-2.705 2.313l3.37 7.266h-3.998L182.8 51.93h-6.264v6.906h-3.534V41.575h11.697" }, void 0, !1, {
          fileName: "app/components/icons/ElevarLogo.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M43.49 58.718a11.824 11.824 0 0 1-5.956 3.448h9.078c1.157 0 2.29-.325 3.264-.937a5.926 5.926 0 0 0 2.223-2.517l-8.608.006ZM46.162 51.812a11.222 11.222 0 0 1-.82 3.45h8.34l1.606-3.454-9.126.004ZM46.197 44.906v3.454H56.89l1.602-3.454H46.197Z" }, void 0, !1, {
          fileName: "app/components/icons/ElevarLogo.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/icons/ElevarLogo.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("clipPath", { id: "a", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { fill: "#fff", d: "M25 38h165v34H25z" }, void 0, !1, {
        fileName: "app/components/icons/ElevarLogo.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/ElevarLogo.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/icons/ElevarLogo.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/icons/ElevarLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), ElevarLogo_default = SvgElevarLogo;

// app/components/icons/KlaviyoLogo.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), SvgKlaviyoLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 215,
    height: 109,
    fill: "none",
    viewBox: "0 0 215 109",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "path",
        {
          fill: "#30302C",
          d: "M114.774 48.931a2.268 2.268 0 0 0 1.595-.647 2.3 2.3 0 0 0 .688-1.585 2.33 2.33 0 0 0-.676-1.616 2.304 2.304 0 0 0-1.607-.68 2.266 2.266 0 0 0-1.576.692 2.294 2.294 0 0 0-.643 1.604c.005.591.24 1.157.656 1.573.416.418.976.654 1.563.659Zm15.516 2.146h5.506v.44c-.305.053-.6.156-.873.303-.504.237-1.511 1.386-2.284 3.31-1.309 3.344-2.685 7.294-4.128 11.821l-.537 1.717c-.236.776-.438 1.283-.538 1.588-.1.306-.236.776-.469 1.35-.134.43-.305.849-.512 1.25-.27.506-.773 1.544-1.176 1.857-.639.54-1.579 1.148-2.753 1.047-2.283 0-3.995-1.717-4.029-3.748 0-1.385.874-2.297 2.183-2.297.94 0 1.778.515 1.778 1.587 0 .777-.771 1.588-.771 1.993 0 1.047.603 1.545 1.78 1.545.938 0 1.706-.608 2.281-1.824.773-1.385.84-2.904.202-4.593l-4.834-12.867c-1.109-2.972-1.948-3.949-2.988-4.053v-.44h7.62v.44c-.906.1-1.375.642-1.375 1.62 0 .709.267 1.79.771 3.176l.906 2.498c1.042 2.702 1.877 5.066 2.318 6.553.972-3.073 1.876-5.775 2.752-8.14.638-1.756.941-3.005.941-3.749 0-1.316-.705-1.924-1.781-1.924l.01-.46ZM77.278 67.525c-.973-.172-1.813-1.047-1.813-2.905V42.23l-5.539 1.215v.474c.94-.101 1.877.742 1.877 2.532v18.17c0 1.756-.94 2.77-1.877 2.905a2.928 2.928 0 0 1-1.666-.216c-.744-.327-1.365-.909-1.89-1.777l-2.56-4.12a4.72 4.72 0 0 0-2.288-1.909 4.687 4.687 0 0 0-2.969-.151l2.888-3.209c2.18-2.43 4.196-3.984 6.11-4.626v-.44h-6.352v.44c1.645.641 1.544 2.06-.342 4.291l-4.061 4.76v-18.34l-5.54 1.216v.474c.94 0 1.877.944 1.877 2.6V64.62c0 1.993-.906 2.77-1.877 2.905v.44h7.359v-.44c-1.208-.172-1.812-1.114-1.812-2.905v-3.343l1.576-1.755 3.82 6.314c.906 1.52 1.745 2.128 3.088 2.128H78.07v-.343s-.365-.026-.791-.096Zm15.25-2.136v-7.553c-.074-4.94-2.132-7.188-6.845-7.188a6.673 6.673 0 0 0-4.162 1.418c-1.243.946-1.847 2.027-1.847 3.277 0 1.215.67 2.127 1.778 2.127 1.176 0 2.016-.675 2.016-1.62 0-.71-.471-1.69-.471-2.364 0-1.218.907-2.265 2.484-2.265 2.015 0 3.458 1.521 3.458 4.898v2.026l-1.678.405c-.874.171-1.61.343-2.183.515-.572.171-1.309.405-2.182.741-1.746.677-2.685 1.319-3.492 2.534a3.561 3.561 0 0 0-.604 1.993c0 2.802 1.947 4.086 4.668 4.086 2.147 0 4.436-1.148 5.47-3.31.015.682.177 1.352.477 1.964 1.138 2.318 4.907.948 4.907.948v-.44c-1.65.26-1.786-1.715-1.794-2.192Zm-3.584-2.338c0 1.114-.403 2.026-1.208 2.668-.772.642-1.577.98-2.417.98-1.645 0-2.72-1.081-2.72-3.075 0-.944.511-1.823.94-2.33.34-.349.737-.635 1.175-.844.57-.304.854-.46 1.243-.642l1.536-.573c.772-.304 1.24-.472 1.442-.574l.009 4.39Zm74.169-11.974h-13.057v-8.848h13.057l-2.741 4.424 2.741 4.424Zm-26.54 14.738a8.851 8.851 0 0 1-1.864-2.895 8.927 8.927 0 0 1-.626-3.397 8.765 8.765 0 0 1 2.49-6.26c1.646-1.757 3.664-2.638 6.019-2.638 2.319 0 4.337.881 5.985 2.639a8.65 8.65 0 0 1 2.522 6.26 8.796 8.796 0 0 1-2.522 6.29c-1.648 1.718-3.666 2.605-5.985 2.605-2.355 0-4.373-.879-6.019-2.604Zm9.044-12.27c-.663-1.306-1.536-2.072-2.56-2.278-2.076-.42-3.912 1.727-4.597 5.142a16.335 16.335 0 0 0-.21 4.65c.15 1.554.579 3.067 1.267 4.464.665 1.308 1.536 2.072 2.56 2.278 2.076.42 3.965-1.818 4.655-5.267.572-2.882.281-6.393-1.123-8.99l.008.002Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/KlaviyoLogo.tsx",
          lineNumber: 12,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "path",
        {
          fill: "#30302C",
          d: "M116.721 64.62V51.077h-11.818v.407c1.578.237 2.329 1.435 1.613 3.378-3.693 10.098-3.458 9.645-3.693 10.455-.236-.778-.774-2.688-1.645-5.085-.873-2.396-1.444-3.986-1.68-4.695-.906-2.803-.604-3.85.874-4.019v-.44h-7.655v.44c1.142.237 2.149 1.554 2.988 3.918l1.176 3.073c1.291 3.32 2.81 7.897 3.316 9.457h2.544c.819-2.403 4.106-11.995 4.546-12.97.475-1.11 1.012-1.952 1.612-2.534a2.978 2.978 0 0 1 2.277-.958s1.845 0 1.845 1.791V64.62c0 1.889-.906 2.77-1.847 2.905v.44h7.32v-.44c-.968-.136-1.773-1.013-1.773-2.905Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/KlaviyoLogo.tsx",
          lineNumber: 16,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/icons/KlaviyoLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), KlaviyoLogo_default = SvgKlaviyoLogo;

// app/components/icons/ShopifyPlusLogo.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), SvgShopifyPlusLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 215,
    height: 100,
    fill: "none",
    viewBox: "0 0 215 100",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "path",
      {
        fill: "#30302C",
        d: "M154.726 45.812c-2.13 0-3.877.741-5.12 2.156l.24-1.248c.076-.394-.194-.728-.589-.728-.395 0-.795.334-.87.728l-3.68 19.079c-.076.394.194.728.588.728.396 0 .796-.334.871-.728l1.366-7.086c.504.906 1.67 2.149 4.293 2.149 2.048 0 3.767-.629 5.111-1.872 1.384-1.281 2.328-3.187 2.808-5.669.478-2.478.268-4.381-.625-5.653-.861-1.231-2.342-1.855-4.393-1.855Zm-2.645 13.713c-3.116 0-4.35-2.144-3.567-6.203.79-4.096 2.764-6.173 5.865-6.173 3.39 0 4.647 2.019 3.845 6.173-.817 4.232-2.768 6.203-6.143 6.203Zm34.406-7.009c-1.849-.685-3.596-1.331-3.264-3.052.168-.864.87-2.316 3.702-2.316 1.59 0 2.596.44 3.467 1.517.163.2.349.2.428.2a.86.86 0 0 0 .798-.668.6.6 0 0 0-.086-.467l-.01-.018c-.884-1.262-2.345-1.901-4.339-1.901-2.907 0-4.984 1.399-5.419 3.653-.521 2.695 1.872 3.599 3.983 4.394 1.823.689 3.546 1.34 3.226 2.988-.451 2.33-2.895 2.678-4.316 2.678-1.956 0-3.163-.531-4.038-1.777l-.009-.012a.53.53 0 0 0-.429-.2.864.864 0 0 0-.798.668.6.6 0 0 0 .086.467c.584 1.09 2.334 2.19 4.933 2.19 3.29 0 5.545-1.5 6.032-4.014.517-2.678-1.856-3.557-3.948-4.33h.001Zm-4.413-10.47h-1.538l.297-1.539c.075-.394-.194-.728-.591-.728-.394 0-.793.334-.869.728l-.297 1.538h-1.54c-.396 0-.794.334-.87.728-.077.395.194.728.589.728h1.54l-.296 1.538c-.076.395.192.728.589.728.395 0 .794-.333.87-.728l.296-1.537h1.539c.395 0 .794-.334.871-.727a.593.593 0 0 0-.114-.51.586.586 0 0 0-.476-.22ZM59.814 56.85c.749.388 2.096.927 3.382.896 1.166 0 1.796-.629 1.796-1.403 0-.748-.45-1.255-1.706-1.972-1.555-.896-2.723-2.15-2.723-3.795 0-2.898 2.484-4.96 6.104-4.96 1.587 0 2.813.3 3.471.689l-.957 2.928a6.195 6.195 0 0 0-2.573-.57c-1.166 0-1.915.54-1.915 1.376 0 .656.538 1.136 1.585 1.703 1.618.927 2.964 2.18 2.964 3.945 0 3.285-2.664 5.137-6.375 5.107-1.705-.03-3.292-.479-4.07-1.016l1.018-2.928Zm10.266 3.862 4.01-20.917h4.13l-1.587 8.108.059-.053c1.106-1.315 2.544-2.223 4.368-2.223 2.157 0 3.381 1.383 3.381 3.714 0 .718-.119 1.876-.298 2.773l-1.617 8.598h-4.128l1.556-8.34c.119-.569.18-1.302.18-1.869 0-.896-.358-1.548-1.287-1.548-1.317 0-2.724 1.756-3.263 4.476l-1.377 7.283H70.08v-.002Zm29.297-9.359c0 5.11-3.293 9.47-8.17 9.47-3.713 0-5.685-2.569-5.685-5.765 0-4.99 3.292-9.472 8.259-9.472 3.86.002 5.596 2.81 5.596 5.767ZM89.74 54.97c0 1.494.6 2.688 2.007 2.688 2.184 0 3.41-3.883 3.41-6.422 0-1.226-.478-2.479-1.944-2.479-2.246 0-3.473 3.852-3.473 6.213Zm8.65 11.555 2.873-15.076a81.06 81.06 0 0 0 .837-5.455h3.652l-.24 2.325h.06c1.107-1.55 2.723-2.59 4.368-2.59 3.022 0 4.25 2.408 4.25 5.188 0 5.02-3.171 9.963-8.02 9.963-1.017 0-1.946-.166-2.424-.552h-.09l-1.138 6.198H98.39v-.001Zm5.895-9.404c.45.357.958.597 1.707.597 2.304 0 3.892-3.794 3.892-6.453 0-1.105-.39-2.27-1.648-2.27-1.435 0-2.783 1.704-3.261 4.273l-.69 3.853Zm10.025 3.593 2.784-14.718h4.16l-2.814 14.718h-4.13Zm5.358-16.268c-1.167 0-1.944-.997-1.944-2.222 0-1.344 1.046-2.47 2.363-2.47 1.257 0 2.064.987 2.064 2.182-.028 1.523-1.136 2.51-2.422 2.51h-.061Zm2.363 16.268 2.185-11.62h-1.914l.597-3.098h1.916l.119-.741c.33-1.734.987-3.495 2.394-4.689 1.106-.955 2.573-1.388 4.04-1.388 1.017 0 1.767.144 2.244.352l-.807 3.223a4.06 4.06 0 0 0-1.317-.21c-1.376 0-2.214 1.307-2.453 2.713l-.151.738h2.873l-.57 3.1h-2.841l-2.185 11.622h-4.13v-.002Zm14.844-14.718.658 6.588c.145 1.158.264 2.319.359 3.482h.06c.33-.774.628-1.929 1.228-3.512l2.513-6.558h4.309l-5.058 10.777c-1.795 3.703-3.53 6.403-5.416 8.166-1.467 1.374-3.202 2.052-4.04 2.23l-1.138-3.5c.69-.239 1.556-.6 2.334-1.166.958-.658 1.766-1.556 2.244-2.48.119-.21.15-.352.091-.65l-2.485-13.377 4.341-.003v.003Zm41.822 1.383c-.396 0-.795.334-.871.728l-1.394 7.232c-.755 3.684-3.023 4.187-5.146 4.187-3.828 0-3.924-2.176-3.515-4.305l1.642-8.498c.076-.395-.194-.729-.59-.729-.396 0-.795.334-.87.728l-1.64 8.498c-.33 1.714-.212 2.992.362 3.909.718 1.15 2.183 1.732 4.351 1.732s3.857-.583 5.021-1.732c.929-.916 1.539-2.195 1.87-3.908l1.371-7.113c.074-.395-.195-.728-.591-.728v-.001Zm-13.183-7.558c-.396 0-.796.334-.871.728l-3.744 19.404c-.075.395.194.728.591.728.395 0 .794-.333.87-.728l3.742-19.404c.077-.396-.194-.728-.588-.728ZM44.667 36.752l-1.008.311a7.018 7.018 0 0 0-.482-1.183c-.715-1.358-1.761-2.08-3.023-2.082h-.006c-.087 0-.175.008-.262.016a2.26 2.26 0 0 0-.116-.133c-.55-.586-1.256-.873-2.101-.848-1.633.046-3.259 1.223-4.577 3.314-.928 1.47-1.632 3.318-1.832 4.748l-3.214.994c-.945.296-.976.326-1.1 1.216-.093.674-2.569 19.784-2.569 19.784l20.538 3.546V36.71c-.084.005-.167.02-.248.042Zm-4.743 1.467-3.464 1.07c.335-1.28.97-2.554 1.75-3.388.289-.312.695-.658 1.175-.856.453.94.55 2.272.54 3.174ZM37.7 33.917c.345-.018.688.072.98.257a4.737 4.737 0 0 0-1.266.986c-1.036 1.11-1.832 2.834-2.147 4.497l-2.846.88c.561-2.619 2.758-6.547 5.279-6.619v-.001ZM34.523 48.83c.11 1.744 4.707 2.125 4.965 6.21.203 3.216-1.707 5.414-4.461 5.586-3.304.21-5.123-1.736-5.123-1.736l.7-2.974s1.83 1.379 3.296 1.286c.957-.06 1.3-.838 1.265-1.388-.143-2.276-3.885-2.142-4.124-5.88-.198-3.146 1.871-6.335 6.439-6.623 1.76-.11 2.66.337 2.66.337l-1.044 3.9s-1.165-.53-2.546-.442c-2.027.13-2.05 1.405-2.027 1.723v.001Zm6.485-10.949c-.013-.824-.111-1.972-.496-2.965 1.238.235 1.848 1.634 2.105 2.468l-1.61.498Zm4.586 28.473 8.52-2.115s-3.669-24.76-3.691-24.93a.327.327 0 0 0-.296-.275c-.122-.01-2.522-.046-2.522-.046s-1.462-1.418-2.01-1.955v29.32Z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/ShopifyPlusLogo.tsx",
        lineNumber: 12,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/ShopifyPlusLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), ShopifyPlusLogo_default = SvgShopifyPlusLogo;

// app/components/icons/YotpoLogo.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), SvgYotpoLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 215,
    height: 100,
    fill: "none",
    viewBox: "0 0 215 100",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "path",
      {
        fill: "#30302C",
        fillRule: "evenodd",
        d: "m51.508 38.49 4.632 12.786 4.854-12.786h6.891L56.102 68.098h-6.815l3.485-9.175-8.376-20.433h7.112Zm72.78-.453c6.221 0 10.759 4.833 10.759 11.448s-4.538 11.449-10.759 11.449c-2.296 0-4.23-.609-5.705-1.782l-.096-.078-.082-.067v9.084h-6.64V38.49h5.871v2.213l.034-.038c1.447-1.652 3.635-2.565 6.339-2.625l.143-.002.136-.001Zm-44.309 0c6.852 0 11.708 4.738 11.708 11.448 0 6.681-4.872 11.449-11.708 11.449-6.873 0-11.753-4.761-11.753-11.45 0-6.716 4.863-11.447 11.753-11.447Zm22.77-4.418v4.871h5.462v5.74h-5.462v7.925c0 1.773.86 2.749 2.427 2.808l.076.002h.078c1.062 0 1.867-.278 2.587-.971l.067-.067.179-.183h.05v6.333l-.204.097c-1.093.523-1.767.76-3.63.76-5.264 0-8.155-2.869-8.267-8.226l-.003-.163V44.23h-2.404V38.49h2.584v-4.871h6.46Zm46.807 4.418c6.851 0 11.708 4.738 11.708 11.448 0 6.681-4.872 11.449-11.708 11.449-6.874 0-11.754-4.761-11.754-11.45 0-6.716 4.865-11.447 11.754-11.447Zm17.12 15.612a3.64 3.64 0 0 1 3.638 3.642 3.64 3.64 0 0 1-3.638 3.643 3.64 3.64 0 0 1-3.638-3.643 3.64 3.64 0 0 1 3.638-3.642Zm-43.383-9.644c-2.992 0-5.024 2.216-5.024 5.48 0 3.264 2.032 5.48 5.024 5.48 3.03 0 5.069-2.209 5.069-5.48 0-3.27-2.039-5.48-5.069-5.48Zm-43.315 0c-3 0-5.067 2.227-5.067 5.48 0 3.253 2.066 5.48 5.068 5.48 2.963 0 5.024-2.234 5.024-5.48 0-3.246-2.062-5.48-5.025-5.48Zm69.578 0c-3.001 0-5.069 2.227-5.069 5.48 0 3.253 2.068 5.48 5.069 5.48 2.963 0 5.024-2.234 5.024-5.48 0-3.246-2.061-5.48-5.024-5.48Z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/YotpoLogo.tsx",
        lineNumber: 12,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/YotpoLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), YotpoLogo_default = SvgYotpoLogo;

// app/components/FeaturedPartners.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), partners = [
  {
    title: "Shopify Plus",
    logo: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ShopifyPlusLogo_default, {}, void 0, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    link: "/partners/shopify-plus"
  },
  {
    title: "Klaviyo",
    logo: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(KlaviyoLogo_default, {}, void 0, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    link: "/partners/klaviyo"
  },
  {
    title: "Yotpo",
    logo: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(YotpoLogo_default, {}, void 0, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    link: "/partners/yotpo"
  },
  {
    title: "Elevar",
    logo: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ElevarLogo_default, {}, void 0, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    link: "/partners/elevar"
  }
];
function FeaturedPartners() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "max-md:container md:right-edge-container my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { className: "grid grid-cols-2 gap-5 md:pr-32 [&_li:first-of-type]:rounded-tl-none [&_li:nth-of-type(2)]:rounded-tr-none [&_li:nth-of-type(3)]:rounded-bl-none [&_li:nth-of-type(4)]:rounded-br-none", children: partners.map(({ title, logo, link }, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { className: "aspect-[337/460] bg-halfColonialWhite rounded-3xl group hover:bg-energyYellow transition duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "w-full h-full flex items-center justify-center relative", title, to: link, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "transition duration-500 transform w-2/3 group-hover:scale-110 [&_svg]:w-full", children: logo }, void 0, !1, {
        fileName: "app/components/FeaturedPartners.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "bottom-3 transition duration-500 right-3 opacity-0 group-hover:opacity-100 group-hover:mirror absolute flex items-center justify-center w-9 h-9 rounded-full bg bg-tuatara text-ivory", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "mirror", children: "i" }, void 0, !1, {
        fileName: "app/components/FeaturedPartners.tsx",
        lineNumber: 41,
        columnNumber: 217
      }, this) }, void 0, !1, {
        fileName: "app/components/FeaturedPartners.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, `${title}-${i}`, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { className: "block font-bold text-5xl text-shadow h1 transform", children: "Howdy, partners." }, void 0, !1, {
        fileName: "app/components/FeaturedPartners.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "max-w-sm mt-11 leading-loose", children: "We work closely with the best ecommerce partners and platforms to help support the growth of our clients." }, void 0, !1, {
        fileName: "app/components/FeaturedPartners.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FeaturedPartners.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FeaturedPartners.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/FeaturedPartners.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Sparky | Home" },
  { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-ivory", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FeaturedPortfolio, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(FeaturedPartners, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index2
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "bg-ivory", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container text-center flex items-center justify-center min-h-screen text-5xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "404 - Page not found" }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WAY75OCK.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-UB6LSHQ7.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LARFAIKH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RN5B34QW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-7GWQLLSR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GGMEBVX5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "0ffbb4c0", hmr: { runtime: "/build/_shared/chunk-LARFAIKH.js", timestamp: 1695077113330 }, url: "/build/manifest-0FFBB4C0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
