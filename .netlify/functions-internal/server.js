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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
  ModalContext: () => ModalContext,
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-6K4JBWFF.css";

// app/assets/fonts.css
var fonts_default = "/build/_assets/fonts-SJCIDDRQ.css";

// app/components/Header.tsx
var import_react2 = require("@remix-run/react");

// app/assets/sparkyLogo.png
var sparkyLogo_default = "/build/_assets/sparkyLogo-5HOJMYLR.png";

// app/components/Header.tsx
var import_react3 = require("react");
var import_react_transition_group = require("react-transition-group");

// app/components/icons/Arrow.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), SvgArrow = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 9 9",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "m4.06.866-.7.896 3.388 2.492-1.806-.098H0V5.29h4.942l1.764-.098L3.36 7.74l.7.826 4.27-3.402v-.882L4.06.866Z"
      }
    )
  }
), Arrow_default = SvgArrow;

// app/components/Header.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header() {
  let toggleModal = (0, import_react3.useContext)(ModalContext), headerRef = (0, import_react3.useRef)(null), [prevOffset, setPrevOffset] = (0, import_react3.useState)(0), [currentOffset, setCurrentOffset] = (0, import_react3.useState)(0), [headerVisible, setHeaderVisibility] = (0, import_react3.useState)(!0);
  (0, import_react3.useEffect)(() => {
    var _a;
    let onScroll2 = () => {
      setPrevOffset(currentOffset), setCurrentOffset(window.scrollY);
    };
    return window.removeEventListener("scroll", onScroll2), window.addEventListener("scroll", onScroll2, { passive: !0 }), currentOffset < prevOffset || currentOffset <= ((_a = headerRef == null ? void 0 : headerRef.current) == null ? void 0 : _a.offsetHeight) / 2 ? setHeaderVisibility(!0) : setHeaderVisibility(!1), () => window.removeEventListener("scroll", onScroll2);
  }, [currentOffset, prevOffset, headerRef]);
  let transitionStyles = {
    entering: {},
    entered: { transform: "translateY(0)" },
    exiting: {},
    exited: { transform: "translateY(-100%)" },
    unmounted: {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_transition_group.Transition, { nodeRef: headerRef, in: headerVisible, timeout: headerVisible ? 500 : 0, children: (state) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "header",
      {
        style: {
          transform: "translateY(0)",
          ...transitionStyles[state]
        },
        ref: headerRef,
        className: `${headerVisible && ((_a = headerRef == null ? void 0 : headerRef.current) == null ? void 0 : _a.scrollHeight) / 2 < currentOffset && "shadow"} bg-white py-4 fixed left-0 w-screen z-10 transition duration-500 top-0 flex flex-col`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "container items-center text-center font-NeueHaasGroteskDisplay pb-4 announcement", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              className: "max-md:text-xs inline-flex justify-center items-center gap-3",
              onClick: () => toggleModal ? toggleModal() : null,
              children: [
                "Let our team of eCommerce experts help your store grow ",
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow_default, { className: "w-3" })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("hr", { className: "pt-0.5 mb-4 md:mb-5 border-t-0 border-b" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container grid grid-cols-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Link, { title: "home", to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "w-24 md:w-32", src: sparkyLogo_default }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-center text-sm" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: "menu flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                className: "whitespace-nowrap font-NeueHaasGroteskDisplay border border-black text-black bg-transparent py-4 px-8 rounded-[3px] text-sm hover:bg-black hover:text-white transition duration-200",
                onClick: () => toggleModal ? toggleModal() : null,
                children: "Let's Talk"
              }
            ) })
          ] })
        ]
      }
    );
  } });
}

// app/root.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/components/Modal.tsx
var import_react4 = require("react"), import_react_transition_group2 = require("react-transition-group"), import_jsx_runtime4 = require("react/jsx-runtime"), Modal = ({ children, modalState, closeModal }) => {
  let onKeyDown = (0, import_react4.useCallback)((event2) => {
    event2.key === "Escape" && closeModal();
  }, []);
  return (0, import_react4.useEffect)(() => {
    if (modalState) {
      document.addEventListener("keydown", onKeyDown), document.body.classList.add("h-screen", "overflow-hidden");
      return;
    }
    document.removeEventListener("keydown", onKeyDown), document.body.classList.remove("h-screen", "overflow-hidden");
  }, [onKeyDown, modalState]), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react_transition_group2.Transition,
    {
      in: modalState,
      timeout: modalState ? 0 : 500,
      appear: !0,
      unmountOnExit: !0,
      children: (state) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
              z-[99]
            `
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            className: `
              transition-${state}
              [&.transition-entered]:translate-x-0
              [&.transition-exited]:translate-x-full
              translate-x-full
              bg-white
              container
              transition-all
              duration-500
              fixed
              max-w-[100vw]
              md:max-w-4xl
              overflow-y-scroll
              p-7
              pb-16
              right-0
              top-0
              bottom-0
              w-full
              z-[100]
            `,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center justify-end sticky top-0 z-10", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "md:transform md:rotate-90 md:translate-x-1/2 md:origin-left bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  className: "button pl-8 relative before:absolute before:content-['x'] before:left-4 before:top-1/2 before:leading-none before:-translate-y-1/2",
                  onClick: () => closeModal(),
                  children: "Close"
                }
              ) }) }),
              children
            ]
          }
        )
      ] })
    }
  );
};

// app/components/icons/ArrowSquare.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), SvgArrowSquare = (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M3.176 4.804V.268h20.448V20.68h-4.536V7.864a181.357 181.357 0 0 1-4.788 4.968L3.464 23.704.188 20.428 11.024 9.556c1.98-1.98 3.276-3.204 4.932-4.752H3.176Z",
        opacity: 0.97,
        style: {
          mixBlendMode: "multiply"
        }
      }
    )
  }
), ArrowSquare_default = SvgArrowSquare;

// app/components/icons/Quote.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), SvgQuote = (props) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 67 55",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M29.454 54.398H.744V24.47C.744 11.594 10.488.98 29.454.98v15.486c-3.132 0-5.568 0-7.656.348-4.176.696-6.09 3.654-6.09 8.7v3.654h13.746v25.23Zm8.352 0V24.47c0-12.876 9.744-23.49 28.71-23.49v15.486c-3.132 0-5.568 0-7.656.348-4.176.696-6.09 3.654-6.09 8.7v3.654h13.746v25.23h-28.71Z",
        opacity: 0.97,
        style: {
          mixBlendMode: "multiply"
        }
      }
    )
  }
), Quote_default = SvgQuote;

// app/components/icons/Star.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), SvgStar = (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 21",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "path",
      {
        fill: "#F9DF5E",
        fillRule: "evenodd",
        d: "M.427 9.973a.512.512 0 0 0-.427.5c0 .247.183.456.427.5a11.08 11.08 0 0 1 9.05 9.667c.023.203.192.36.396.36a.401.401 0 0 0 .395-.36c.591-5.338 4.978-9.532 10.4-9.824a.347.347 0 0 0 .332-.343.347.347 0 0 0-.331-.344c-5.403-.29-9.777-4.454-10.394-9.765A.408.408 0 0 0 9.873 0a.408.408 0 0 0-.402.364 11.08 11.08 0 0 1-9.044 9.61Z",
        clipRule: "evenodd"
      }
    )
  }
), Star_default = SvgStar;

// app/components/ContactForm.tsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/data/contact.ts
var contact_default = [
  {
    name: "what-do-you-need",
    label: "What do you need?",
    type: "radio",
    required: !0,
    options: [
      {
        id: "redesign-build",
        value: "Shopify Plus Website Redesign & Build",
        label: "Shopify Plus Website Redesign & Build"
      },
      {
        id: "replatform",
        value: "Platform Migration to Shopify",
        label: "Platform Migration to Shopify"
      },
      {
        id: "optimization",
        value: "Optimization and/or Enhancements",
        label: "Optimization and/or Enhancements"
      },
      {
        id: "retainer",
        value: "Day-to-day development services",
        label: "Day-to-day development services"
      },
      {
        id: "other",
        value: "Other/Not sure",
        label: "Other/Not sure"
      }
    ]
  },
  {
    name: "project-timeline",
    label: "Project Timeline",
    condition: "what-do-you-need.redesign-build&replatform",
    type: "radio",
    required: !0,
    options: [
      {
        id: "0-3",
        value: "0-3 months",
        label: "0-3 months"
      },
      {
        id: "3-6",
        value: "3-6 months",
        label: "3-6 months"
      },
      {
        id: "6-12",
        value: "6-12 months",
        label: "6-12 months"
      },
      {
        id: "other",
        value: "Other/Not sure",
        label: "Other/Not sure"
      }
    ]
  },
  {
    name: "decision-timeline",
    label: "Decision Timeline",
    condition: "what-do-you-need.optimization&retainer",
    type: "radio",
    required: !0,
    options: [
      {
        id: "less-1",
        value: "Less than 1 month",
        label: "Less than 1 month"
      },
      {
        id: "1-3",
        value: "1-3 months",
        label: "1-3 months"
      },
      {
        id: "6-12",
        value: "6-12 months",
        label: "6-12 months"
      },
      {
        id: "other",
        value: "Other/Not sure",
        label: "Other/Not sure"
      }
    ]
  },
  {
    name: "project-budget",
    label: "Project Budget",
    condition: "what-do-you-need.redesign-build&replatform",
    type: "radio",
    required: !0,
    options: [
      {
        id: "20-50",
        value: "$20,000 - $50,000",
        label: "$20,000 - $50,000"
      },
      {
        id: "50-100",
        value: "$50,000 - $100,000",
        label: "$50,000 - $100,000"
      },
      {
        id: "100-200",
        value: "$100,000 - $200,000",
        label: "$100,000 - $200,000"
      },
      {
        id: "200-300",
        value: "$200,000 - $300,000",
        label: "$200,000 - $300,000"
      },
      {
        id: "300+",
        value: "$300,000 +",
        label: "$300,000 +"
      },
      {
        id: "other",
        value: "Other/Not sure",
        label: "Other/Not sure"
      }
    ]
  },
  {
    name: "monthly-budget",
    label: "Monthly Budget",
    condition: "what-do-you-need.optimization&retainer",
    type: "radio",
    required: !0,
    options: [
      {
        id: "under-5",
        value: "Less than $5,000",
        label: "Less than $5,000"
      },
      {
        id: "5-10",
        value: "$5,000 - $10,000",
        label: "$5,000 - $10,000"
      },
      {
        id: "10-20",
        value: "$10,000 - $20,000",
        label: "$10,000 - $20,000"
      },
      {
        id: "20-50",
        value: "$20,000 - $50,000",
        label: "$20,000 - $50,000"
      },
      {
        id: "50+",
        value: "$50,000 +",
        label: "$50,000 +"
      },
      {
        id: "other",
        value: "Other/Not sure",
        label: "Other/Not sure"
      }
    ]
  },
  {
    name: "project-details",
    label: "Project Details",
    condition: "what-do-you-need.redesign-build&replatform",
    type: "textarea",
    required: !1,
    rows: 5
  },
  {
    name: "additional-details",
    label: "Additional Details",
    condition: "what-do-you-need.optimization&retainer",
    type: "textarea",
    required: !1,
    rows: 5
  }
];

// app/components/ContactForm.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ContactForm() {
  let [currently_active, setCurrentlyActive] = (0, import_react5.useState)("brand"), [form_state, setFormState] = (0, import_react5.useState)({}), [submitting, setSubmitting] = (0, import_react5.useState)(!1), [submitted, setSubmitted] = (0, import_react5.useState)(!1), first_name_ref = (0, import_react5.useRef)(null), handleSubmit = (0, import_react5.useCallback)(async (event2) => {
    event2.preventDefault(), setSubmitting(!0);
    let form_data = new FormData(event2.currentTarget);
    await fetch("https://usebasin.com/f/840caf1493b3", {
      method: "post",
      body: form_data
    }), setSubmitting(!1), setSubmitted(!0);
  }, []), resetForm = (0, import_react5.useCallback)(() => {
    setCurrentlyActive(""), setFormState({}), setSubmitted(!1);
  }, []), makeSelection = (0, import_react5.useCallback)((section, field_value) => {
    setFormState({
      ...form_state,
      [section]: field_value
    });
  }, [form_state]), checkCondition = (0, import_react5.useCallback)((condition) => {
    if (condition) {
      let [section, valid_values] = condition.split(".");
      return !valid_values.includes(form_state[section]);
    }
    return !1;
  }, [form_state]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "md:pl-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "title pb-11", children: "SLIDE INTO OUR CRMs" }),
    submitted ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "h2", children: "Thank you for your submission!" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: "button--secondary my-5", onClick: resetForm, children: "Send Another" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react6.Form, { onSubmit: handleSubmit, children: [
      contact_default.map((section) => {
        var _a;
        let is_hidden = checkCondition(section.condition);
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "div",
          {
            hidden: is_hidden,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-3xl md:text-3xl font-black relative py-2 font-NeueHaasGroteskDisplay", children: section.label }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                section.type === "radio" && ((_a = section.options) == null ? void 0 : _a.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                  "label",
                  {
                    className: "radio-wrap",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                        "input",
                        {
                          type: "radio",
                          value: option.value,
                          name: is_hidden ? "" : section.name,
                          onClick: () => makeSelection(section.name, option.id),
                          required: section.required && !is_hidden
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "tracking-wide", children: option.label })
                    ]
                  },
                  `radio-${index}`
                ))),
                section.type === "textarea" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "textarea",
                  {
                    name: is_hidden ? "" : section.name,
                    rows: section.rows,
                    className: "w-full border border-current px-6 py-5",
                    required: section.required
                  }
                )
              ] })
            ]
          },
          section.name
        );
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid md:grid-cols-12 my-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            ref: first_name_ref,
            className: "border border-current md:col-span-4 -mb-[1px] md:-mr-[1px]",
            type: "text",
            id: "fname",
            name: "fname",
            placeholder: "First Name",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            className: "border border-current md:col-span-4 -mb-[1px] md:-mr-[1px]",
            type: "text",
            id: "lname",
            name: "lname",
            placeholder: "Last Name",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            className: "border border-current md:col-span-4 -mb-[1px]",
            type: "text",
            id: "company",
            name: "company",
            placeholder: "Company",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            className: "border border-current md:col-span-6 md:-mr-[1px]",
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Email Address",
            required: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            className: "border border-current md:col-span-6",
            type: "tel",
            id: "phone",
            name: "phone",
            placeholder: "Phone"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "button",
        {
          disabled: submitting,
          type: "submit",
          name: "submit",
          className: "button--secondary bg-black flex tracking-wide items-center gap-5 uppercase",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Submit" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Arrow_default, { className: "w-3" })
          ]
        }
      ) })
    ] })
  ] });
}

// app/root.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: fonts_default }
], ModalContext = (0, import_react8.createContext)(null);
function App() {
  let [modalState, setModalState] = (0, import_react8.useState)(!1), toggleModal = () => {
    setModalState(!modalState);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("body", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(ModalContext.Provider, { value: toggleModal, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react7.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Modal, { modalState, closeModal: () => setModalState(!1), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ContactForm, {}) })
    ] }) })
  ] });
}

// app/routes/portfolio.$client.tsx
var portfolio_client_exports = {};
__export(portfolio_client_exports, {
  default: () => Index
});

// app/assets/fortyseven-portfolio-slide-1.jpeg
var fortyseven_portfolio_slide_1_default = "/build/_assets/fortyseven-portfolio-slide-1-Q3C3AYFB.jpeg";

// app/assets/fortyseven-portfolio-slide-2.jpeg
var fortyseven_portfolio_slide_2_default = "/build/_assets/fortyseven-portfolio-slide-2-GFACQTIP.jpeg";

// app/assets/fortyseven-portfolio-slide-3.jpeg
var fortyseven_portfolio_slide_3_default = "/build/_assets/fortyseven-portfolio-slide-3-E3O2AA2C.jpeg";

// app/assets/fortyseven-portfolio-banner.jpeg
var fortyseven_portfolio_banner_default = "/build/_assets/fortyseven-portfolio-banner-7FRL5PW7.jpeg";

// app/assets/heydude-portfolio-slide-1.jpeg
var heydude_portfolio_slide_1_default = "/build/_assets/heydude-portfolio-slide-1-Z7AY2UHK.jpeg";

// app/assets/heydude-portfolio-slide-2.jpeg
var heydude_portfolio_slide_2_default = "/build/_assets/heydude-portfolio-slide-2-CL67ABYY.jpeg";

// app/assets/heydude-portfolio-slide-3.jpeg
var heydude_portfolio_slide_3_default = "/build/_assets/heydude-portfolio-slide-3-VIXURQOC.jpeg";

// app/assets/heydude-portfolio-slide-4.jpeg
var heydude_portfolio_slide_4_default = "/build/_assets/heydude-portfolio-slide-4-SUZ466SS.jpeg";

// app/assets/heydude-portfolio-slide-5.jpeg
var heydude_portfolio_slide_5_default = "/build/_assets/heydude-portfolio-slide-5-EBJJSZHL.jpeg";

// app/assets/heydude-portfolio-banner.jpeg
var heydude_portfolio_banner_default = "/build/_assets/heydude-portfolio-banner-TTV7BKXA.jpeg";

// app/assets/legends-portfolio-slide-1.jpeg
var legends_portfolio_slide_1_default = "/build/_assets/legends-portfolio-slide-1-HQJT3K3B.jpeg";

// app/assets/legends-portfolio-slide-2.jpeg
var legends_portfolio_slide_2_default = "/build/_assets/legends-portfolio-slide-2-HRFOT57C.jpeg";

// app/assets/legends-portfolio-slide-3.jpeg
var legends_portfolio_slide_3_default = "/build/_assets/legends-portfolio-slide-3-4MTCA675.jpeg";

// app/assets/legends-portfolio-slide-4.jpeg
var legends_portfolio_slide_4_default = "/build/_assets/legends-portfolio-slide-4-QS4PDB4B.jpeg";

// app/assets/legends-portfolio-slide-5.jpeg
var legends_portfolio_slide_5_default = "/build/_assets/legends-portfolio-slide-5-WWPAV3HM.jpeg";

// app/assets/legends-portfolio-slide-6.jpeg
var legends_portfolio_slide_6_default = "/build/_assets/legends-portfolio-slide-6-BZSJVCB7.jpeg";

// app/assets/legends-portfolio-banner.jpeg
var legends_portfolio_banner_default = "/build/_assets/legends-portfolio-banner-6KY3FIYI.jpeg";

// app/assets/ghost-portfolio-slide-1.jpeg
var ghost_portfolio_slide_1_default = "/build/_assets/ghost-portfolio-slide-1-QHBBMN2X.jpeg";

// app/assets/ghost-portfolio-slide-2.jpeg
var ghost_portfolio_slide_2_default = "/build/_assets/ghost-portfolio-slide-2-VXJODEOH.jpeg";

// app/assets/ghost-portfolio-slide-3.jpeg
var ghost_portfolio_slide_3_default = "/build/_assets/ghost-portfolio-slide-3-K7PHEA5U.jpeg";

// app/data/case-studies.js
var data = [
  {
    handle: "wink",
    title: "Wink",
    description: "Wink is a well-established leader in the scrubs space. Their apparel is designed to work as hard as their customer and they obsess over crafting features and benefits in each of their scrubs to try and make the day a little bit easier for medical professionals.",
    vimeoLinkPrimary: null,
    overview: ["Wink, formerly known as WonderWink, had been a widely-distributed wholesale brand but approached us to build their very first DTC site on Shopify Plus. Launching in 2023, the site has sparked an immediately successful new channel for the brand."],
    carousel: null,
    sparkyMagic: [
      "Partnered with internal IT team to integrate real-time ATP inventory experience from a shared distribution center."
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: null,
    siteLink: "https://winkscrubs.com/",
    testimonial: null,
    stack: null,
    results: null
  },
  {
    handle: "forty-seven",
    title: "'47",
    description: "You may not own a '47 hat. Just kidding. You definitely do. '47 is one of the largest and most prominent headwear brands in the world. With licenses for all major American sports leagues, their gear is worn and loved by fans of all kinds on game day and every day.",
    vimeoLinkPrimary: "https://player.vimeo.com/video/854322590",
    overview: ["We designed and built a fully custom Shopify theme which led to an immediate 300% improvement in site speed."],
    carousel: [
      {
        image: fortyseven_portfolio_slide_1_default,
        caption: ""
      },
      {
        image: fortyseven_portfolio_slide_2_default,
        caption: ""
      },
      {
        image: fortyseven_portfolio_slide_3_default,
        caption: ""
      }
    ],
    sparkyMagic: [
      "We introduced a concept called \u201Cfavorite teams\u201D which personalizes the users' shopping experience and collection sorts based on their fandom.",
      "We accomplished this by combining the powers of Shopify customer metafields, Algolia Search and Discovery, and some Sparky secret sauce."
    ],
    portfolioBanner: {
      image: fortyseven_portfolio_banner_default,
      caption: ""
    },
    vimeoLinkSecondary: "https://player.vimeo.com/video/854984692",
    siteLink: "https://www.47brand.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Attentive",
        link: ""
      },
      {
        title: "Elevar",
        link: ""
      },
      {
        title: "Algolia",
        link: ""
      },
      {
        title: "Yotpo",
        link: ""
      },
      {
        title: "Blue Cherry ERP",
        link: ""
      }
    ],
    results: null
  },
  {
    handle: "heydude",
    title: "Hey Dude",
    description: "<u>HEYDUDE</u> makes lightweight, comfortable, casual shoes for adventurers of all varieties. When Crocs purchased HEYDUDE (one of the largest and fastest-growing Shopify Plus brands) for $2.5b in early 2022, they immediately called Sparky to level-up the site.",
    vimeoLinkPrimary: "https://player.vimeo.com/video/854315577",
    overview: [
      "After a few months of conversion rate optimization, it became apparent that the brand had grown so fast on a technical foundation that was not engineered for scale.",
      "With the clock ticking ahead of Holiday, we designed, built, and launched a fully-custom Shopify theme.",
      "The new site realized upticks in conversion and huge productivity gains for site merch and ops teams who were hamstrung by the old site."
    ],
    carousel: [
      {
        image: heydude_portfolio_slide_1_default,
        caption: ""
      },
      {
        image: heydude_portfolio_slide_2_default,
        caption: ""
      },
      {
        image: heydude_portfolio_slide_3_default,
        caption: ""
      },
      {
        image: heydude_portfolio_slide_4_default,
        caption: ""
      },
      {
        image: heydude_portfolio_slide_5_default,
        caption: ""
      }
    ],
    sparkyMagic: [
      "We did the entire project <strong>in three months</strong>, and there was <strong>zero margin for error.</strong>"
    ],
    portfolioBanner: {
      image: heydude_portfolio_banner_default,
      caption: "Staring at stars"
    },
    vimeoLinkSecondary: "https://player.vimeo.com/video/854631946",
    siteLink: "https://heydude.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Attentive",
        link: ""
      },
      {
        title: "Fast Simon",
        link: ""
      },
      {
        title: "Elevar",
        link: ""
      },
      {
        title: "Yotpo",
        link: ""
      },
      {
        title: "Narvar",
        link: ""
      },
      {
        title: "Custom Employee Discount App",
        link: ""
      }
    ],
    results: null
  },
  {
    handle: "legends",
    title: "Legends",
    description: "Legends is a fast-growing direct-to-consumer athletic apparel brand whose cap table includes the likes of Quavo, Baker Mayfield, and Barstool\u2019s Big Cat. One of our earliest Shopify clients, we first partnered with Legends in late 2019 to build a custom site as they outgrew their store-bought theme. We\u2019ve continued to collaborate ever since.",
    vimeoLinkPrimary: "https://player.vimeo.com/video/854324103",
    overview: [
      "We launched their first custom site just ahead of Holiday in 2019 which resulted in immediate and huge conversion gains over their prior non-custom theme.",
      "We've continuously optimized and maintained the site as their business has scaled 30x, and launched a subsequent revamped theme in 2023.      "
    ],
    carousel: [
      {
        image: legends_portfolio_slide_1_default,
        caption: ""
      },
      {
        image: legends_portfolio_slide_2_default,
        caption: ""
      },
      {
        image: legends_portfolio_slide_3_default,
        caption: ""
      },
      {
        image: legends_portfolio_slide_4_default,
        caption: ""
      },
      {
        image: legends_portfolio_slide_5_default,
        caption: ""
      },
      {
        image: legends_portfolio_slide_6_default,
        caption: ""
      }
    ],
    sparkyMagic: [
      "We developed some technical wizardry to overcome Shopify Product limitations. When purchasing Legends' signature shorts, the customer must select a color, an inseam length, and a liner option; an add-to-cart flow which exceeds both Shopify's total variant limitation as well as their \u201Cproduct option\u201D limitation.",
      "The solution that we engineered to solve this problem gave the merchandising team more flexibility than Shopify's standard product form and streamlined the UX. This functionality has become a secret weapon for us, and we've implemented versions of it for many apparel brands since."
    ],
    portfolioBanner: {
      image: legends_portfolio_banner_default,
      caption: ""
    },
    vimeoLinkSecondary: "https://player.vimeo.com/video/854985452",
    siteLink: "https://www.legends.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Elevar",
        link: ""
      },
      {
        title: "Stamped",
        link: ""
      },
      {
        title: "Loop",
        link: ""
      }
    ],
    results: ""
  },
  {
    handle: "york-athletics",
    title: "YORK Athletics",
    description: "YORK Athletics Mfg. is a fast-growing direct-to-consumer footwear start-up with roots in a multi-generational family sports business. Their performance-focused unisex sneakers feature a minimal aesthetic and have earned the brand credentials such as the 'Best New Performance Gear' award from Men's Health Magazine and praise in Esquire, ESPN, Hypebeast, and Gear Patrol Magazine.",
    vimeoLinkPrimary: null,
    overview: [
      "We designed and built a fully custom Shopify theme which, in the 12 months following site launch, led to a 40% lift in conversion YOY. This lift was sustained in spite of the business becoming much less promotional during the same timeframe."
    ],
    carousel: null,
    sparkyMagic: [
      "This brand makes unisex footwear but wanted to create the illusion of selling separate men's and women's SKUs for SEO and UX purposes. We came up with some technical witchcraft that allowed a single SKU in their ERP to display as two totally separate products on the front end (one for each gender), without the headache of maintaining two sets of products in Shopify. ",
      "This created a shopping experience that was more in line with their media strategy of segmenting audiences and introduced a new mechanism for gathering data about their shoppers that was previously unavailable to them.",
      "This was all achieved with zero impact on their fulfillment or site ops processes."
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: null,
    siteLink: "https://yorkathleticsmfg.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Attentive",
        link: ""
      },
      {
        title: "Yotpo",
        link: ""
      },
      {
        title: "Dear Systems ERP",
        link: ""
      }
    ],
    results: null
  },
  {
    handle: "ghost",
    title: "Ghost",
    description: 'Ghost is a wildly popular lifestyle sports nutrition brand. With high-quality ingredients and iconic flavors, Ghost has amassed a rabid fanbase of gym-goers everywhere who aim to "be seen".',
    vimeoLinkPrimary: "https://player.vimeo.com/video/854320973",
    overview: [
      "Ghost had a vastly outdated Shopify theme and enlisted Sparky to usher their site into a new era of eCommerce performance. We designed and built a fully custom Shopify theme that reimagined their online presence across three different markets.",
      "We built a new site that introduced subscriptions, integrated with their existing mobile app, and freshened up their fully custom loyalty program."
    ],
    carousel: [
      {
        image: ghost_portfolio_slide_1_default,
        caption: ""
      },
      {
        image: ghost_portfolio_slide_2_default,
        caption: ""
      },
      {
        image: ghost_portfolio_slide_3_default,
        caption: ""
      }
    ],
    sparkyMagic: [
      "We built custom GWP and bundle and capabilities built into the theme, as well as engineered a product structure that allowed their site team to maximize merchandising capabilities across their licensed and owned flavors."
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: "https://player.vimeo.com/video/854986194",
    siteLink: "https://ghostlifestyle.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Skio",
        link: ""
      },
      {
        title: "Postscript",
        link: ""
      },
      {
        title: "Custom Ghost Loyalty",
        link: ""
      }
    ],
    results: null
  },
  {
    handle: "rocketsofawesome",
    title: "Rockets of Awesome",
    description: "Rockets of Awesome is a curated quarterly apparel subscription box for kids and babies. Parents fill out a \u201Cstyle quiz\u201D when signing up, and the Rockets of Awesome robots and unicorns fill their kids' boxes with apparel that they know they're going to love. ",
    vimeoLinkPrimary: null,
    overview: [
      "Rockets of Awesome wanted to move to Shopify Plus but were handcuffed by their homegrown, complex web platform that was built over a ten-year span.",
      "We migrated the brand to Shopify Plus and partnered with Awtomic to create an easily editable subscription bundle feature. "
    ],
    carousel: null,
    sparkyMagic: [
      "We reimagined their curation algorithm and legacy box sorting system, eliminating development dependencies and putting total control into the hands of the merchandising team.",
      "We built a custom quiz builder and box curator app that integrates with Shopify, Awtomic, and their 3PL Pitney Bowes."
    ],
    portfolioBanner: null,
    vimeoLinkSecondary: null,
    siteLink: "https://rocketsofawesome.com/",
    testimonial: null,
    stack: [
      {
        title: "Shopify Plus",
        link: ""
      },
      {
        title: "Klaviyo",
        link: ""
      },
      {
        title: "Awtomic",
        link: ""
      },
      {
        title: "Loop",
        link: ""
      },
      {
        title: "Custom Box Curator App",
        link: ""
      }
    ],
    results: null
  }
], case_studies_default = data;

// app/routes/portfolio.$client.tsx
var import_react16 = require("@remix-run/react");

// app/components/Portfolio/Carousel.tsx
var import_react9 = require("react");

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj == "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  target === void 0 && (target = {}), src === void 0 && (src = {}), Object.keys(src).forEach((key) => {
    typeof target[key] > "u" ? target[key] = src[key] : isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0 && extend(target[key], src[key]);
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  let doc = typeof document < "u" ? document : {};
  return extend(doc, ssrDocument), doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    return typeof setTimeout > "u" ? (callback(), null) : setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    typeof setTimeout > "u" || clearTimeout(id);
  }
};
function getWindow() {
  let win = typeof window < "u" ? window : {};
  return extend(win, ssrWindow), win;
}

// node_modules/swiper/shared/utils.mjs
function deleteProps(obj) {
  let object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch {
    }
    try {
      delete object[key];
    } catch {
    }
  });
}
function nextTick(callback, delay) {
  return delay === void 0 && (delay = 0), setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  let window2 = getWindow(), style;
  return window2.getComputedStyle && (style = window2.getComputedStyle(el, null)), !style && el.currentStyle && (style = el.currentStyle), style || (style = el.style), style;
}
function getTranslate(el, axis) {
  axis === void 0 && (axis = "x");
  let window2 = getWindow(), matrix, curTransform, transformMatrix, curStyle = getComputedStyle2(el);
  return window2.WebKitCSSMatrix ? (curTransform = curStyle.transform || curStyle.webkitTransform, curTransform.split(",").length > 6 && (curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ")), transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform)) : (transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), matrix = transformMatrix.toString().split(",")), axis === "x" && (window2.WebKitCSSMatrix ? curTransform = transformMatrix.m41 : matrix.length === 16 ? curTransform = parseFloat(matrix[12]) : curTransform = parseFloat(matrix[4])), axis === "y" && (window2.WebKitCSSMatrix ? curTransform = transformMatrix.m42 : matrix.length === 16 ? curTransform = parseFloat(matrix[13]) : curTransform = parseFloat(matrix[5])), curTransform || 0;
}
function isObject2(o) {
  return typeof o == "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? node instanceof HTMLElement : node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  let to = Object(arguments.length <= 0 ? void 0 : arguments[0]), noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    let nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource != null && !isNode(nextSource)) {
      let keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        let nextKey = keysArray[nextIndex], desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        desc !== void 0 && desc.enumerable && (isObject2(to[nextKey]) && isObject2(nextSource[nextKey]) ? nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : extend2(to[nextKey], nextSource[nextKey]) : !isObject2(to[nextKey]) && isObject2(nextSource[nextKey]) ? (to[nextKey] = {}, nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : extend2(to[nextKey], nextSource[nextKey])) : to[nextKey] = nextSource[nextKey]);
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref, window2 = getWindow(), startPosition = -swiper.translate, startTime = null, time, duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none", window2.cancelAnimationFrame(swiper.cssModeFrameID);
  let dir = targetPosition > startPosition ? "next" : "prev", isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target, animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime(), startTime === null && (startTime = time);
    let progress = Math.max(Math.min((time - startTime) / duration, 1), 0), easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2, currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition) && (currentPosition = targetPosition), swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    }), isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden", swiper.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        swiper.wrapperEl.style.overflow = "", swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      }), window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  return selector === void 0 && (selector = ""), [...element.children].filter((el) => el.matches(selector));
}
function createElement(tag, classes2) {
  classes2 === void 0 && (classes2 = []);
  let el = document.createElement(tag);
  return el.classList.add(...Array.isArray(classes2) ? classes2 : [classes2]), el;
}
function elementOffset(el) {
  let window2 = getWindow(), document2 = getDocument(), box = el.getBoundingClientRect(), body = document2.body, clientTop = el.clientTop || body.clientTop || 0, clientLeft = el.clientLeft || body.clientLeft || 0, scrollTop = el === window2 ? window2.scrollY : el.scrollTop, scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  let prevEls = [];
  for (; el.previousElementSibling; ) {
    let prev = el.previousElementSibling;
    selector ? prev.matches(selector) && prevEls.push(prev) : prevEls.push(prev), el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  let nextEls = [];
  for (; el.nextElementSibling; ) {
    let next = el.nextElementSibling;
    selector ? next.matches(selector) && nextEls.push(next) : nextEls.push(next), el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  return getWindow().getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el, i;
  if (child) {
    for (i = 0; (child = child.previousSibling) !== null; )
      child.nodeType === 1 && (i += 1);
    return i;
  }
}
function elementParents(el, selector) {
  let parents = [], parent = el.parentElement;
  for (; parent; )
    selector ? parent.matches(selector) && parents.push(parent) : parents.push(parent), parent = parent.parentElement;
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    e.target === el && (callback.call(el, e), el.removeEventListener("transitionend", fireCallBack));
  }
  callback && el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
  let window2 = getWindow();
  return includeMargins ? el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom")) : el.offsetWidth;
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  let window2 = getWindow(), document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  return support || (support = calcSupport()), support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp, support2 = getSupport(), window2 = getWindow(), platform = window2.navigator.platform, ua = userAgent || window2.navigator.userAgent, device = {
    ios: !1,
    android: !1
  }, screenWidth = window2.screen.width, screenHeight = window2.screen.height, android = ua.match(/(Android);?[\s\/]+([\d.]+)?/), ipad = ua.match(/(iPad).*OS\s([\d_]+)/), ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/), iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/), windows = platform === "Win32", macos = platform === "MacIntel", iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0 && (ipad = ua.match(/(Version)\/([\d.]+)/), ipad || (ipad = [0, 1, "13_0_0"]), macos = !1), android && !windows && (device.os = "android", device.android = !0), (ipad || iphone || ipod) && (device.os = "ios", device.ios = !0), device;
}
function getDevice(overrides) {
  return overrides === void 0 && (overrides = {}), deviceCached || (deviceCached = calcDevice(overrides)), deviceCached;
}
var browser;
function calcBrowser() {
  let window2 = getWindow(), needPerspectiveFix = !1;
  function isSafari() {
    let ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    let ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      let [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  return browser || (browser = calcBrowser()), browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref, window2 = getWindow(), observer = null, animationFrame = null, resizeHandler = () => {
    !swiper || swiper.destroyed || !swiper.initialized || (emit("beforeResize"), emit("resize"));
  }, createObserver = () => {
    !swiper || swiper.destroyed || !swiper.initialized || (observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        let {
          width,
          height
        } = swiper, newWidth = width, newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          target && target !== swiper.el || (newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize, newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize);
        }), (newWidth !== width || newHeight !== height) && resizeHandler();
      });
    }), observer.observe(swiper.el));
  }, removeObserver = () => {
    animationFrame && window2.cancelAnimationFrame(animationFrame), observer && observer.unobserve && swiper.el && (observer.unobserve(swiper.el), observer = null);
  }, orientationChangeHandler = () => {
    !swiper || swiper.destroyed || !swiper.initialized || emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver < "u") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler), window2.addEventListener("orientationchange", orientationChangeHandler);
  }), on("destroy", () => {
    removeObserver(), window2.removeEventListener("resize", resizeHandler), window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, observers = [], window2 = getWindow(), attach = function(target, options) {
    options === void 0 && (options = {});
    let ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver, observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__)
        return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      let observerUpdate = function() {
        emit("observerUpdate", mutations[0]);
      };
      window2.requestAnimationFrame ? window2.requestAnimationFrame(observerUpdate) : window2.setTimeout(observerUpdate, 0);
    });
    observer.observe(target, {
      attributes: typeof options.attributes > "u" ? !0 : options.attributes,
      childList: typeof options.childList > "u" ? !0 : options.childList,
      characterData: typeof options.characterData > "u" ? !0 : options.characterData
    }), observers.push(observer);
  }, init = () => {
    if (swiper.params.observer) {
      if (swiper.params.observeParents) {
        let containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1)
          attach(containerParents[i]);
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      }), attach(swiper.wrapperEl, {
        attributes: !1
      });
    }
  }, destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    }), observers.splice(0, observers.length);
  };
  extendParams({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), on("init", init), on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    let method = priority ? "unshift" : "push";
    return events2.split(" ").forEach((event2) => {
      self.eventsListeners[event2] || (self.eventsListeners[event2] = []), self.eventsListeners[event2][method](handler);
    }), self;
  },
  once(events2, handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    function onceHandler() {
      self.off(events2, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
        args[_key] = arguments[_key];
      handler.apply(self, args);
    }
    return onceHandler.__emitterProxy = handler, self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || typeof handler != "function")
      return self;
    let method = priority ? "unshift" : "push";
    return self.eventsAnyListeners.indexOf(handler) < 0 && self.eventsAnyListeners[method](handler), self;
  },
  offAny(handler) {
    let self = this;
    if (!self.eventsListeners || self.destroyed || !self.eventsAnyListeners)
      return self;
    let index = self.eventsAnyListeners.indexOf(handler);
    return index >= 0 && self.eventsAnyListeners.splice(index, 1), self;
  },
  off(events2, handler) {
    let self = this;
    return !self.eventsListeners || self.destroyed || !self.eventsListeners || events2.split(" ").forEach((event2) => {
      typeof handler > "u" ? self.eventsListeners[event2] = [] : self.eventsListeners[event2] && self.eventsListeners[event2].forEach((eventHandler, index) => {
        (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) && self.eventsListeners[event2].splice(index, 1);
      });
    }), self;
  },
  emit() {
    let self = this;
    if (!self.eventsListeners || self.destroyed || !self.eventsListeners)
      return self;
    let events2, data2, context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    return typeof args[0] == "string" || Array.isArray(args[0]) ? (events2 = args[0], data2 = args.slice(1, args.length), context = self) : (events2 = args[0].events, data2 = args[0].data, context = args[0].context || self), data2.unshift(context), (Array.isArray(events2) ? events2 : events2.split(" ")).forEach((event2) => {
      self.eventsAnyListeners && self.eventsAnyListeners.length && self.eventsAnyListeners.forEach((eventHandler) => {
        eventHandler.apply(context, [event2, ...data2]);
      }), self.eventsListeners && self.eventsListeners[event2] && self.eventsListeners[event2].forEach((eventHandler) => {
        eventHandler.apply(context, data2);
      });
    }), self;
  }
};
function updateSize() {
  let swiper = this, width, height, el = swiper.el;
  typeof swiper.params.width < "u" && swiper.params.width !== null ? width = swiper.params.width : width = el.clientWidth, typeof swiper.params.height < "u" && swiper.params.height !== null ? height = swiper.params.height : height = el.clientHeight, !(width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) && (width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10), height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10), Number.isNaN(width) && (width = 0), Number.isNaN(height) && (height = 0), Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  }));
}
function updateSlides() {
  let swiper = this;
  function getDirectionLabel(property) {
    return swiper.isHorizontal() ? property : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  let params = swiper.params, {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper, isVirtual = swiper.virtual && params.virtual.enabled, previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length, slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`), slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length, snapGrid = [], slidesGrid = [], slidesSizesGrid = [], offsetBefore = params.slidesOffsetBefore;
  typeof offsetBefore == "function" && (offsetBefore = params.slidesOffsetBefore.call(swiper));
  let offsetAfter = params.slidesOffsetAfter;
  typeof offsetAfter == "function" && (offsetAfter = params.slidesOffsetAfter.call(swiper));
  let previousSnapGridLength = swiper.snapGrid.length, previousSlidesGridLength = swiper.slidesGrid.length, spaceBetween = params.spaceBetween, slidePosition = -offsetBefore, prevSlideSize = 0, index = 0;
  if (typeof swiperSize > "u")
    return;
  typeof spaceBetween == "string" && spaceBetween.indexOf("%") >= 0 ? spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize : typeof spaceBetween == "string" && (spaceBetween = parseFloat(spaceBetween)), swiper.virtualSize = -spaceBetween, slides.forEach((slideEl) => {
    rtl ? slideEl.style.marginLeft = "" : slideEl.style.marginRight = "", slideEl.style.marginBottom = "", slideEl.style.marginTop = "";
  }), params.centeredSlides && params.cssMode && (setCSSProperty(wrapperEl, "--swiper-centered-offset-before", ""), setCSSProperty(wrapperEl, "--swiper-centered-offset-after", ""));
  let gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  gridEnabled && swiper.grid.initSlides(slidesLength);
  let slideSize, shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => typeof params.breakpoints[key].slidesPerView < "u").length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i] && (slide2 = slides[i]), gridEnabled && swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel), !(slides[i] && elementStyle(slide2, "display") === "none")) {
      if (params.slidesPerView === "auto") {
        shouldResetSlideSize && (slides[i].style[getDirectionLabel("width")] = "");
        let slideStyles = getComputedStyle(slide2), currentTransform = slide2.style.transform, currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform && (slide2.style.transform = "none"), currentWebKitTransform && (slide2.style.webkitTransform = "none"), params.roundLengths)
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", !0) : elementOuterSize(slide2, "height", !0);
        else {
          let width = getDirectionPropertyValue(slideStyles, "width"), paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left"), paddingRight = getDirectionPropertyValue(slideStyles, "padding-right"), marginLeft = getDirectionPropertyValue(slideStyles, "margin-left"), marginRight = getDirectionPropertyValue(slideStyles, "margin-right"), boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box")
            slideSize = width + marginLeft + marginRight;
          else {
            let {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        currentTransform && (slide2.style.transform = currentTransform), currentWebKitTransform && (slide2.style.webkitTransform = currentWebKitTransform), params.roundLengths && (slideSize = Math.floor(slideSize));
      } else
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView, params.roundLengths && (slideSize = Math.floor(slideSize)), slides[i] && (slides[i].style[getDirectionLabel("width")] = `${slideSize}px`);
      slides[i] && (slides[i].swiperSlideSize = slideSize), slidesSizesGrid.push(slideSize), params.centeredSlides ? (slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween, prevSlideSize === 0 && i !== 0 && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween), i === 0 && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween), Math.abs(slidePosition) < 1 / 1e3 && (slidePosition = 0), params.roundLengths && (slidePosition = Math.floor(slidePosition)), index % params.slidesPerGroup === 0 && snapGrid.push(slidePosition), slidesGrid.push(slidePosition)) : (params.roundLengths && (slidePosition = Math.floor(slidePosition)), (index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0 && snapGrid.push(slidePosition), slidesGrid.push(slidePosition), slidePosition = slidePosition + slideSize + spaceBetween), swiper.virtualSize += slideSize + spaceBetween, prevSlideSize = slideSize, index += 1;
    }
  }
  if (swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter, rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow") && (wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`), params.setWrapperSize && (wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`), gridEnabled && swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel), !params.centeredSlides) {
    let newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)), snapGrid[i] <= swiper.virtualSize - swiperSize && newSlidesGrid.push(slidesGridItem);
    }
    snapGrid = newSlidesGrid, Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1 && snapGrid.push(swiper.virtualSize - swiperSize);
  }
  if (isVirtual && params.loop) {
    let size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      let groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup), groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1)
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1)
      params.slidesPerGroup === 1 && snapGrid.push(snapGrid[snapGrid.length - 1] + size), slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size), swiper.virtualSize += size;
  }
  if (snapGrid.length === 0 && (snapGrid = [0]), spaceBetween !== 0) {
    let key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => !params.cssMode || params.loop ? !0 : slideIndex !== slides.length - 1).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    }), allSlidesSize -= spaceBetween;
    let maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => snap <= 0 ? -offsetBefore : snap > maxSnap ? maxSnap + offsetAfter : snap);
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    if (slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    }), allSlidesSize -= spaceBetween, allSlidesSize < swiperSize) {
      let allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      }), slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  if (Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  }), params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`), setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    let addToSnapGrid = -swiper.snapGrid[0], addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid), swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength && swiper.emit("slidesLengthChange"), snapGrid.length !== previousSnapGridLength && (swiper.params.watchOverflow && swiper.checkOverflow(), swiper.emit("snapGridLengthChange")), slidesGrid.length !== previousSlidesGridLength && swiper.emit("slidesGridLengthChange"), params.watchSlidesProgress && swiper.updateSlidesOffset(), !isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    let backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`, hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    slidesLength <= params.maxBackfaceHiddenSlides ? hasClassBackfaceClassAdded || swiper.el.classList.add(backFaceHiddenClass) : hasClassBackfaceClassAdded && swiper.el.classList.remove(backFaceHiddenClass);
  }
}
function updateAutoHeight(speed) {
  let swiper = this, activeSlides = [], isVirtual = swiper.virtual && swiper.params.virtual.enabled, newHeight = 0, i;
  typeof speed == "number" ? swiper.setTransition(speed) : speed === !0 && swiper.setTransition(swiper.params.speed);
  let getSlideByIndex = (index) => isVirtual ? swiper.slides[swiper.getSlideIndexByData(index)] : swiper.slides[index];
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1)
    if (swiper.params.centeredSlides)
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    else
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        let index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index));
      }
  else
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  for (i = 0; i < activeSlides.length; i += 1)
    if (typeof activeSlides[i] < "u") {
      let height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  (newHeight || newHeight === 0) && (swiper.wrapperEl.style.height = `${newHeight}px`);
}
function updateSlidesOffset() {
  let swiper = this, slides = swiper.slides, minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1)
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
function updateSlidesProgress(translate2) {
  translate2 === void 0 && (translate2 = this && this.translate || 0);
  let swiper = this, params = swiper.params, {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  typeof slides[0].swiperSlideOffset > "u" && swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  rtl && (offsetCenter = translate2), slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideVisibleClass);
  }), swiper.visibleSlidesIndexes = [], swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  typeof spaceBetween == "string" && spaceBetween.indexOf("%") >= 0 ? spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size : typeof spaceBetween == "string" && (spaceBetween = parseFloat(spaceBetween));
  for (let i = 0; i < slides.length; i += 1) {
    let slide2 = slides[i], slideOffset = slide2.swiperSlideOffset;
    params.cssMode && params.centeredSlides && (slideOffset -= slides[0].swiperSlideOffset);
    let slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween), originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween), slideBefore = -(offsetCenter - slideOffset), slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    (slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size) && (swiper.visibleSlides.push(slide2), swiper.visibleSlidesIndexes.push(i), slides[i].classList.add(params.slideVisibleClass)), slide2.progress = rtl ? -slideProgress : slideProgress, slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  let swiper = this;
  if (typeof translate2 > "u") {
    let multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  let params = swiper.params, translatesDiff = swiper.maxTranslate() - swiper.minTranslate(), {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper, wasBeginning = isBeginning, wasEnd = isEnd;
  if (translatesDiff === 0)
    progress = 0, isBeginning = !0, isEnd = !0;
  else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    let isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1, isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0, isEnd = isEndRounded || progress >= 1, isBeginningRounded && (progress = 0), isEndRounded && (progress = 1);
  }
  if (params.loop) {
    let firstSlideIndex = swiper.getSlideIndexByData(0), lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1), firstSlideTranslate = swiper.slidesGrid[firstSlideIndex], lastSlideTranslate = swiper.slidesGrid[lastSlideIndex], translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1], translateAbs = Math.abs(translate2);
    translateAbs >= firstSlideTranslate ? progressLoop = (translateAbs - firstSlideTranslate) / translateMax : progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax, progressLoop > 1 && (progressLoop -= 1);
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  }), (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) && swiper.updateSlidesProgress(translate2), isBeginning && !wasBeginning && swiper.emit("reachBeginning toEdge"), isEnd && !wasEnd && swiper.emit("reachEnd toEdge"), (wasBeginning && !isBeginning || wasEnd && !isEnd) && swiper.emit("fromEdge"), swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  let swiper = this, {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper, isVirtual = swiper.virtual && params.virtual.enabled, getFilteredSlide = (selector) => elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual)
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      slideIndex < 0 && (slideIndex = swiper.virtual.slides.length + slideIndex), slideIndex >= swiper.virtual.slides.length && (slideIndex -= swiper.virtual.slides.length), activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
  else
    activeSlide = slides[activeIndex];
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    params.loop && !nextSlide && (nextSlide = slides[0]), nextSlide && nextSlide.classList.add(params.slideNextClass);
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    params.loop && !prevSlide === 0 && (prevSlide = slides[slides.length - 1]), prevSlide && prevSlide.classList.add(params.slidePrevClass);
  }
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  let slideSelector = () => swiper.isElement ? "swiper-slide" : `.${swiper.params.slideClass}`, slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    !lazyEl && swiper.isElement && (slideEl.shadowRoot ? lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      slideEl.shadowRoot && (lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`), lazyEl && lazyEl.remove());
    })), lazyEl && lazyEl.remove();
  }
}, unlazy = (swiper, index) => {
  if (!swiper.slides[index])
    return;
  let imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  imageEl && imageEl.removeAttribute("loading");
}, preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  let amount = swiper.params.lazyPreloadPrevNext, len = swiper.slides.length;
  if (!len || !amount || amount < 0)
    return;
  amount = Math.min(amount, len);
  let slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView), activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    let activeColumn = activeIndex, preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => activeColumn + slidesPerView + i)), swiper.slides.forEach((slideEl, i) => {
      preloadColumns.includes(slideEl.column) && unlazy(swiper, i);
    });
    return;
  }
  let slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop)
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      let realIndex = (i % len + len) % len;
      (realIndex < activeIndex || realIndex > slideIndexLastInView) && unlazy(swiper, realIndex);
    }
  else
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)
      i !== activeIndex && (i > slideIndexLastInView || i < activeIndex) && unlazy(swiper, i);
};
function getActiveIndexByTranslate(swiper) {
  let {
    slidesGrid,
    params
  } = swiper, translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate, activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1)
    typeof slidesGrid[i + 1] < "u" ? translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2 ? activeIndex = i : translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] && (activeIndex = i + 1) : translate2 >= slidesGrid[i] && (activeIndex = i);
  return params.normalizeSlideIndex && (activeIndex < 0 || typeof activeIndex > "u") && (activeIndex = 0), activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  let swiper = this, translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate, {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper, activeIndex = newActiveIndex, snapIndex, getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    return realIndex2 < 0 && (realIndex2 = swiper.virtual.slides.length + realIndex2), realIndex2 >= swiper.virtual.slides.length && (realIndex2 -= swiper.virtual.slides.length), realIndex2;
  };
  if (typeof activeIndex > "u" && (activeIndex = getActiveIndexByTranslate(swiper)), snapGrid.indexOf(translate2) >= 0)
    snapIndex = snapGrid.indexOf(translate2);
  else {
    let skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1), activeIndex === previousIndex) {
    snapIndex !== previousSnapIndex && (swiper.snapIndex = snapIndex, swiper.emit("snapIndexChange")), swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled && (swiper.realIndex = getVirtualRealIndex(activeIndex));
    return;
  }
  let realIndex;
  swiper.virtual && params.virtual.enabled && params.loop ? realIndex = getVirtualRealIndex(activeIndex) : swiper.slides[activeIndex] ? realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10) : realIndex = activeIndex, Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  }), swiper.initialized && preload(swiper), swiper.emit("activeIndexChange"), swiper.emit("snapIndexChange"), (swiper.initialized || swiper.params.runCallbacksOnInit) && (previousRealIndex !== realIndex && swiper.emit("realIndexChange"), swiper.emit("slideChange"));
}
function updateClickedSlide(el, path) {
  let swiper = this, params = swiper.params, slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  !slide2 && swiper.isElement && path && path.length > 1 && path.includes(el) && [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
    !slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`) && (slide2 = pathEl);
  });
  let slideFound = !1, slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1)
      if (swiper.slides[i] === slide2) {
        slideFound = !0, slideIndex = i;
        break;
      }
  }
  if (slide2 && slideFound)
    swiper.clickedSlide = slide2, swiper.virtual && swiper.params.virtual.enabled ? swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10) : swiper.clickedIndex = slideIndex;
  else {
    swiper.clickedSlide = void 0, swiper.clickedIndex = void 0;
    return;
  }
  params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex && swiper.slideToClickedSlide();
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  axis === void 0 && (axis = this.isHorizontal() ? "x" : "y");
  let swiper = this, {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate)
    return rtl ? -translate2 : translate2;
  if (params.cssMode)
    return translate2;
  let currentTranslate = getTranslate(wrapperEl, axis);
  return currentTranslate += swiper.cssOverflowAdjustment(), rtl && (currentTranslate = -currentTranslate), currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  let swiper = this, {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper, x = 0, y = 0, z = 0;
  swiper.isHorizontal() ? x = rtl ? -translate2 : translate2 : y = translate2, params.roundLengths && (x = Math.floor(x), y = Math.floor(y)), swiper.previousTranslate = swiper.translate, swiper.translate = swiper.isHorizontal() ? x : y, params.cssMode ? wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y : params.virtualTranslate || (swiper.isHorizontal() ? x -= swiper.cssOverflowAdjustment() : y -= swiper.cssOverflowAdjustment(), wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`);
  let newProgress, translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  translatesDiff === 0 ? newProgress = 0 : newProgress = (translate2 - swiper.minTranslate()) / translatesDiff, newProgress !== progress && swiper.updateProgress(translate2), swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  translate2 === void 0 && (translate2 = 0), speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0), translateBounds === void 0 && (translateBounds = !0);
  let swiper = this, {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition)
    return !1;
  let minTranslate2 = swiper.minTranslate(), maxTranslate2 = swiper.maxTranslate(), newTranslate;
  if (translateBounds && translate2 > minTranslate2 ? newTranslate = minTranslate2 : translateBounds && translate2 < maxTranslate2 ? newTranslate = maxTranslate2 : newTranslate = translate2, swiper.updateProgress(newTranslate), params.cssMode) {
    let isH = swiper.isHorizontal();
    if (speed === 0)
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    else {
      if (!swiper.support.smoothScroll)
        return animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        }), !0;
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return speed === 0 ? (swiper.setTransition(0), swiper.setTranslate(newTranslate), runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionEnd"))) : (swiper.setTransition(speed), swiper.setTranslate(newTranslate), runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionStart")), swiper.animating || (swiper.animating = !0, swiper.onTranslateToWrapperTransitionEnd || (swiper.onTranslateToWrapperTransitionEnd = function(e) {
    !swiper || swiper.destroyed || e.target === this && (swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd), swiper.onTranslateToWrapperTransitionEnd = null, delete swiper.onTranslateToWrapperTransitionEnd, runCallbacks && swiper.emit("transitionEnd"));
  }), swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd))), !0;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  let swiper = this;
  swiper.params.cssMode || (swiper.wrapperEl.style.transitionDuration = `${duration}ms`, swiper.wrapperEl.style.transitionDelay = duration === 0 ? "0ms" : ""), swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref, {
    activeIndex,
    previousIndex
  } = swiper, dir = direction;
  if (dir || (activeIndex > previousIndex ? dir = "next" : activeIndex < previousIndex ? dir = "prev" : dir = "reset"), swiper.emit(`transition${step}`), runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`), dir === "next" ? swiper.emit(`slideNextTransition${step}`) : swiper.emit(`slidePrevTransition${step}`);
  }
}
function transitionStart(runCallbacks, direction) {
  runCallbacks === void 0 && (runCallbacks = !0);
  let swiper = this, {
    params
  } = swiper;
  params.cssMode || (params.autoHeight && swiper.updateAutoHeight(), transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  }));
}
function transitionEnd(runCallbacks, direction) {
  runCallbacks === void 0 && (runCallbacks = !0);
  let swiper = this, {
    params
  } = swiper;
  swiper.animating = !1, !params.cssMode && (swiper.setTransition(0), transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  }));
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  index === void 0 && (index = 0), speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0), typeof index == "string" && (index = parseInt(index, 10));
  let swiper = this, slideIndex = index;
  slideIndex < 0 && (slideIndex = 0);
  let {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial)
    return !1;
  let skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex), snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1);
  let translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex)
    for (let i = 0; i < slidesGrid.length; i += 1) {
      let normalizedTranslate = -Math.floor(translate2 * 100), normalizedGrid = Math.floor(slidesGrid[i] * 100), normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      typeof slidesGrid[i + 1] < "u" ? normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2 ? slideIndex = i : normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext && (slideIndex = i + 1) : normalizedTranslate >= normalizedGrid && (slideIndex = i);
    }
  if (swiper.initialized && slideIndex !== activeIndex && (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate()) || !swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate() && (activeIndex || 0) !== slideIndex))
    return !1;
  slideIndex !== (previousIndex || 0) && runCallbacks && swiper.emit("beforeSlideChangeStart"), swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex ? direction = "next" : slideIndex < activeIndex ? direction = "prev" : direction = "reset", rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)
    return swiper.updateActiveIndex(slideIndex), params.autoHeight && swiper.updateAutoHeight(), swiper.updateSlidesClasses(), params.effect !== "slide" && swiper.setTranslate(translate2), direction !== "reset" && (swiper.transitionStart(runCallbacks, direction), swiper.transitionEnd(runCallbacks, direction)), !1;
  if (params.cssMode) {
    let isH = swiper.isHorizontal(), t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      let isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      isVirtual && (swiper.wrapperEl.style.scrollSnapType = "none", swiper._immediateVirtual = !0), isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0 ? (swiper._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      })) : wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t, isVirtual && requestAnimationFrame(() => {
        swiper.wrapperEl.style.scrollSnapType = "", swiper._immediateVirtual = !1;
      });
    } else {
      if (!swiper.support.smoothScroll)
        return animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        }), !0;
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return swiper.setTransition(speed), swiper.setTranslate(translate2), swiper.updateActiveIndex(slideIndex), swiper.updateSlidesClasses(), swiper.emit("beforeTransitionStart", speed, internal), swiper.transitionStart(runCallbacks, direction), speed === 0 ? swiper.transitionEnd(runCallbacks, direction) : swiper.animating || (swiper.animating = !0, swiper.onSlideToWrapperTransitionEnd || (swiper.onSlideToWrapperTransitionEnd = function(e) {
    !swiper || swiper.destroyed || e.target === this && (swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd), swiper.onSlideToWrapperTransitionEnd = null, delete swiper.onSlideToWrapperTransitionEnd, swiper.transitionEnd(runCallbacks, direction));
  }), swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd)), !0;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  index === void 0 && (index = 0), speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0), typeof index == "string" && (index = parseInt(index, 10));
  let swiper = this, newIndex = index;
  return swiper.params.loop && (swiper.virtual && swiper.params.virtual.enabled ? newIndex = newIndex + swiper.virtual.slidesBefore : newIndex = swiper.getSlideIndexByData(newIndex)), swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed, runCallbacks, internal) {
  speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0);
  let swiper = this, {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto && (perGroup = Math.max(swiper.slidesPerViewDynamic("current", !0), 1));
  let increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup, isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return !1;
    if (swiper.loopFix({
      direction: "next"
    }), swiper._clientLeft = swiper.wrapperEl.clientLeft, swiper.activeIndex === swiper.slides.length - 1 && params.cssMode)
      return requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment);
      }), !0;
  }
  return params.rewind && swiper.isEnd ? swiper.slideTo(0, speed, runCallbacks, internal) : swiper.slideTo(swiper.activeIndex + increment);
}
function slidePrev(speed, runCallbacks, internal) {
  speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0);
  let swiper = this, {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  let isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return !1;
    swiper.loopFix({
      direction: "prev"
    }), swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  let translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val);
  }
  let normalizedTranslate = normalize(translate2), normalizedSnapGrid = snapGrid.map((val) => normalize(val)), prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap > "u" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      normalizedTranslate >= snap && (prevSnapIndex = snapIndex);
    }), typeof prevSnapIndex < "u" && (prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]);
  }
  let prevIndex = 0;
  if (typeof prevSnap < "u" && (prevIndex = slidesGrid.indexOf(prevSnap), prevIndex < 0 && (prevIndex = swiper.activeIndex - 1), params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto && (prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", !0) + 1, prevIndex = Math.max(prevIndex, 0))), params.rewind && swiper.isBeginning) {
    let lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode)
    return requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }), !0;
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0);
  let swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  speed === void 0 && (speed = this.params.speed), runCallbacks === void 0 && (runCallbacks = !0), threshold === void 0 && (threshold = 0.5);
  let swiper = this, index = swiper.activeIndex, skip = Math.min(swiper.params.slidesPerGroupSkip, index), snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup), translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    let currentSnap = swiper.snapGrid[snapIndex], nextSnap = swiper.snapGrid[snapIndex + 1];
    translate2 - currentSnap > (nextSnap - currentSnap) * threshold && (index += swiper.params.slidesPerGroup);
  } else {
    let prevSnap = swiper.snapGrid[snapIndex - 1], currentSnap = swiper.snapGrid[snapIndex];
    translate2 - prevSnap <= (currentSnap - prevSnap) * threshold && (index -= swiper.params.slidesPerGroup);
  }
  return index = Math.max(index, 0), index = Math.min(index, swiper.slidesGrid.length - 1), swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  let swiper = this, {
    params,
    slidesEl
  } = swiper, slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView, slideToIndex = swiper.clickedIndex, realIndex, slideSelector = swiper.isElement ? "swiper-slide" : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10), params.centeredSlides ? slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2 ? (swiper.loopFix(), slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]), nextTick(() => {
      swiper.slideTo(slideToIndex);
    })) : swiper.slideTo(slideToIndex) : slideToIndex > swiper.slides.length - slidesPerView ? (swiper.loopFix(), slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]), nextTick(() => {
      swiper.slideTo(slideToIndex);
    })) : swiper.slideTo(slideToIndex);
  } else
    swiper.slideTo(slideToIndex);
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  let swiper = this, {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`).forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  }), swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = !0,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp, swiper = this;
  if (!swiper.params.loop)
    return;
  swiper.emit("beforeLoopFix");
  let {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  if (swiper.allowSlidePrev = !0, swiper.allowSlideNext = !0, swiper.virtual && params.virtual.enabled) {
    slideTo2 && (!params.centeredSlides && swiper.snapIndex === 0 ? swiper.slideTo(swiper.virtual.slides.length, 0, !1, !0) : params.centeredSlides && swiper.snapIndex < params.slidesPerView ? swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, !1, !0) : swiper.snapIndex === swiper.snapGrid.length - 1 && swiper.slideTo(swiper.virtual.slidesBefore, 0, !1, !0)), swiper.allowSlidePrev = allowSlidePrev, swiper.allowSlideNext = allowSlideNext, swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)), loopedSlides = params.loopedSlides || slidesPerView;
  loopedSlides % params.slidesPerGroup !== 0 && (loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup), swiper.loopedSlides = loopedSlides;
  let prependSlidesIndexes = [], appendSlidesIndexes = [], activeIndex = swiper.activeIndex;
  typeof activeSlideIndex > "u" ? activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]) : activeIndex = activeSlideIndex;
  let isNext = direction === "next" || !direction, isPrev = direction === "prev" || !direction, slidesPrepended = 0, slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      let index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      let index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev && prependSlidesIndexes.forEach((index) => {
    swiper.slides[index].swiperLoopMoveDOM = !0, slidesEl.prepend(swiper.slides[index]), swiper.slides[index].swiperLoopMoveDOM = !1;
  }), isNext && appendSlidesIndexes.forEach((index) => {
    swiper.slides[index].swiperLoopMoveDOM = !0, slidesEl.append(swiper.slides[index]), swiper.slides[index].swiperLoopMoveDOM = !1;
  }), swiper.recalcSlides(), params.slidesPerView === "auto" && swiper.updateSlides(), params.watchSlidesProgress && swiper.updateSlidesOffset(), slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev)
      if (typeof slideRealIndex > "u") {
        let currentSlideTranslate = swiper.slidesGrid[activeIndex], diff = swiper.slidesGrid[activeIndex + slidesPrepended] - currentSlideTranslate;
        byMousewheel ? swiper.setTranslate(swiper.translate - diff) : (swiper.slideTo(activeIndex + slidesPrepended, 0, !1, !0), setTranslate2 && (swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff, swiper.touchEventsData.currentTranslate = swiper.translate));
      } else
        setTranslate2 && (swiper.slideToLoop(slideRealIndex, 0, !1, !0), swiper.touchEventsData.currentTranslate = swiper.translate);
    else if (appendSlidesIndexes.length > 0 && isNext)
      if (typeof slideRealIndex > "u") {
        let currentSlideTranslate = swiper.slidesGrid[activeIndex], diff = swiper.slidesGrid[activeIndex - slidesAppended] - currentSlideTranslate;
        byMousewheel ? swiper.setTranslate(swiper.translate - diff) : (swiper.slideTo(activeIndex - slidesAppended, 0, !1, !0), setTranslate2 && (swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff, swiper.touchEventsData.currentTranslate = swiper.translate));
      } else
        swiper.slideToLoop(slideRealIndex, 0, !1, !0);
  }
  if (swiper.allowSlidePrev = allowSlidePrev, swiper.allowSlideNext = allowSlideNext, swiper.controller && swiper.controller.control && !byController) {
    let loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: !0
    };
    Array.isArray(swiper.controller.control) ? swiper.controller.control.forEach((c) => {
      !c.destroyed && c.params.loop && c.loopFix({
        ...loopParams,
        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : !1
      });
    }) : swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop && swiper.controller.control.loopFix({
      ...loopParams,
      slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : !1
    });
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  let swiper = this, {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  swiper.recalcSlides();
  let newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    let index = typeof slideEl.swiperSlideIndex > "u" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  }), swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  }), newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  }), swiper.recalcSlides(), swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  let swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  let el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  swiper.isElement && (swiper.__preventObserver__ = !0), el.style.cursor = "move", el.style.cursor = moving ? "grabbing" : "grab", swiper.isElement && requestAnimationFrame(() => {
    swiper.__preventObserver__ = !1;
  });
}
function unsetGrabCursor() {
  let swiper = this;
  swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode || (swiper.isElement && (swiper.__preventObserver__ = !0), swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", swiper.isElement && requestAnimationFrame(() => {
    swiper.__preventObserver__ = !1;
  }));
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  base === void 0 && (base = this);
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    el.assignedSlot && (el = el.assignedSlot);
    let found = el.closest(selector);
    return !found && !el.getRootNode ? null : found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event2) {
  let swiper = this, document2 = getDocument(), window2 = getWindow(), data2 = swiper.touchEventsData;
  data2.evCache.push(event2);
  let {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled || !params.simulateTouch && event2.pointerType === "mouse" || swiper.animating && params.preventInteractionOnTransition)
    return;
  !swiper.animating && params.cssMode && params.loop && swiper.loopFix();
  let e = event2;
  e.originalEvent && (e = e.originalEvent);
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper" && !swiper.wrapperEl.contains(targetEl) || "which" in e && e.which === 3 || "button" in e && e.button > 0 || data2.isTouched && data2.isMoved)
    return;
  let swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "", eventPath = event2.composedPath ? event2.composedPath() : event2.path;
  swipingClassHasValue && e.target && e.target.shadowRoot && eventPath && (targetEl = eventPath[0]);
  let noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`, isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = !0;
    return;
  }
  if (params.swipeHandler && !targetEl.closest(params.swipeHandler))
    return;
  touches.currentX = e.pageX, touches.currentY = e.pageY;
  let startX = touches.currentX, startY = touches.currentY, edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection, edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold))
    if (edgeSwipeDetection === "prevent")
      event2.preventDefault();
    else
      return;
  Object.assign(data2, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), touches.startX = startX, touches.startY = startY, data2.touchStartTime = now(), swiper.allowClick = !0, swiper.updateSize(), swiper.swipeDirection = void 0, params.threshold > 0 && (data2.allowThresholdMove = !1);
  let preventDefault = !0;
  targetEl.matches(data2.focusableElements) && (preventDefault = !1, targetEl.nodeName === "SELECT" && (data2.isTouched = !1)), document2.activeElement && document2.activeElement.matches(data2.focusableElements) && document2.activeElement !== targetEl && document2.activeElement.blur();
  let shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  (params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable && e.preventDefault(), params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode && swiper.freeMode.onTouchStart(), swiper.emit("touchStart", e);
}
function onTouchMove(event2) {
  let document2 = getDocument(), swiper = this, data2 = swiper.touchEventsData, {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled || !params.simulateTouch && event2.pointerType === "mouse")
    return;
  let e = event2;
  if (e.originalEvent && (e = e.originalEvent), !data2.isTouched) {
    data2.startMoving && data2.isScrolling && swiper.emit("touchMoveOpposite", e);
    return;
  }
  let pointerIndex = data2.evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
  pointerIndex >= 0 && (data2.evCache[pointerIndex] = e);
  let targetTouch = data2.evCache.length > 1 ? data2.evCache[0] : e, pageX = targetTouch.pageX, pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX, touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    e.target.matches(data2.focusableElements) || (swiper.allowClick = !1), data2.isTouched && (Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      prevX: swiper.touches.currentX,
      prevY: swiper.touches.currentY,
      currentX: pageX,
      currentY: pageY
    }), data2.touchStartTime = now());
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data2.isTouched = !1, data2.isMoved = !1;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      return;
  }
  if (document2.activeElement && e.target === document2.activeElement && e.target.matches(data2.focusableElements)) {
    data2.isMoved = !0, swiper.allowClick = !1;
    return;
  }
  if (data2.allowTouchCallbacks && swiper.emit("touchMove", e), e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX, touches.currentY = pageY;
  let diffX = touches.currentX - touches.startX, diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data2.isScrolling > "u") {
    let touchAngle;
    swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX ? data2.isScrolling = !1 : diffX * diffX + diffY * diffY >= 25 && (touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI, data2.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle);
  }
  if (data2.isScrolling && swiper.emit("touchMoveOpposite", e), typeof data2.startMoving > "u" && (touches.currentX !== touches.startX || touches.currentY !== touches.startY) && (data2.startMoving = !0), data2.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data2.evCache.length > 1) {
    data2.isTouched = !1;
    return;
  }
  if (!data2.startMoving)
    return;
  swiper.allowClick = !1, !params.cssMode && e.cancelable && e.preventDefault(), params.touchMoveStopPropagation && !params.nested && e.stopPropagation();
  let diff = swiper.isHorizontal() ? diffX : diffY, touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  params.oneWayMovement && (diff = Math.abs(diff) * (rtl ? 1 : -1), touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1)), touches.diff = diff, diff *= params.touchRatio, rtl && (diff = -diff, touchesDiff = -touchesDiff);
  let prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next", swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  let isLoop = swiper.params.loop && !params.cssMode, allowLoopFix = swiper.swipeDirection === "next" && swiper.allowSlideNext || swiper.swipeDirection === "prev" && swiper.allowSlidePrev;
  if (!data2.isMoved) {
    if (isLoop && allowLoopFix && swiper.loopFix({
      direction: swiper.swipeDirection
    }), data2.startTranslate = swiper.getTranslate(), swiper.setTransition(0), swiper.animating) {
      let evt = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data2.allowMomentumBounce = !1, params.grabCursor && (swiper.allowSlideNext === !0 || swiper.allowSlidePrev === !0) && swiper.setGrabCursor(!0), swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  data2.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1 && (swiper.loopFix({
    direction: swiper.swipeDirection,
    setTranslate: !0
  }), loopFixed = !0), swiper.emit("sliderMove", e), data2.isMoved = !0, data2.currentTranslate = diff + data2.startTranslate;
  let disableParentSwiper = !0, resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges && (resistanceRatio = 0), diff > 0 ? (isLoop && allowLoopFix && !loopFixed && data2.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate()) && swiper.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), data2.currentTranslate > swiper.minTranslate() && (disableParentSwiper = !1, params.resistance && (data2.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data2.startTranslate + diff) ** resistanceRatio))) : diff < 0 && (isLoop && allowLoopFix && !loopFixed && data2.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate()) && swiper.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
  }), data2.currentTranslate < swiper.maxTranslate() && (disableParentSwiper = !1, params.resistance && (data2.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data2.startTranslate - diff) ** resistanceRatio))), disableParentSwiper && (e.preventedByNestedSwiper = !0), !swiper.allowSlideNext && swiper.swipeDirection === "next" && data2.currentTranslate < data2.startTranslate && (data2.currentTranslate = data2.startTranslate), !swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data2.currentTranslate > data2.startTranslate && (data2.currentTranslate = data2.startTranslate), !swiper.allowSlidePrev && !swiper.allowSlideNext && (data2.currentTranslate = data2.startTranslate), params.threshold > 0)
    if (Math.abs(diff) > params.threshold || data2.allowThresholdMove) {
      if (!data2.allowThresholdMove) {
        data2.allowThresholdMove = !0, touches.startX = touches.currentX, touches.startY = touches.currentY, data2.currentTranslate = data2.startTranslate, touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data2.currentTranslate = data2.startTranslate;
      return;
    }
  !params.followFinger || params.cssMode || ((params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) && (swiper.updateActiveIndex(), swiper.updateSlidesClasses()), params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.freeMode.onTouchMove(), swiper.updateProgress(data2.currentTranslate), swiper.setTranslate(data2.currentTranslate));
}
function onTouchEnd(event2) {
  let swiper = this, data2 = swiper.touchEventsData, pointerIndex = data2.evCache.findIndex((cachedEv) => cachedEv.pointerId === event2.pointerId);
  if (pointerIndex >= 0 && data2.evCache.splice(pointerIndex, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(event2.type) && !(["pointercancel", "contextmenu"].includes(event2.type) && (swiper.browser.isSafari || swiper.browser.isWebView)))
    return;
  let {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled || !params.simulateTouch && event2.pointerType === "mouse")
    return;
  let e = event2;
  if (e.originalEvent && (e = e.originalEvent), data2.allowTouchCallbacks && swiper.emit("touchEnd", e), data2.allowTouchCallbacks = !1, !data2.isTouched) {
    data2.isMoved && params.grabCursor && swiper.setGrabCursor(!1), data2.isMoved = !1, data2.startMoving = !1;
    return;
  }
  params.grabCursor && data2.isMoved && data2.isTouched && (swiper.allowSlideNext === !0 || swiper.allowSlidePrev === !0) && swiper.setGrabCursor(!1);
  let touchEndTime = now(), timeDiff = touchEndTime - data2.touchStartTime;
  if (swiper.allowClick) {
    let pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree), swiper.emit("tap click", e), timeDiff < 300 && touchEndTime - data2.lastClickTime < 300 && swiper.emit("doubleTap doubleClick", e);
  }
  if (data2.lastClickTime = now(), nextTick(() => {
    swiper.destroyed || (swiper.allowClick = !0);
  }), !data2.isTouched || !data2.isMoved || !swiper.swipeDirection || touches.diff === 0 || data2.currentTranslate === data2.startTranslate) {
    data2.isTouched = !1, data2.isMoved = !1, data2.startMoving = !1;
    return;
  }
  data2.isTouched = !1, data2.isMoved = !1, data2.startMoving = !1;
  let currentPos;
  if (params.followFinger ? currentPos = rtl ? swiper.translate : -swiper.translate : currentPos = -data2.currentTranslate, params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0, groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    let increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    typeof slidesGrid[i + increment2] < "u" ? currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2] && (stopIndex = i, groupSize = slidesGrid[i + increment2] - slidesGrid[i]) : currentPos >= slidesGrid[i] && (stopIndex = i, groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]);
  }
  let rewindFirstIndex = null, rewindLastIndex = null;
  params.rewind && (swiper.isBeginning ? rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1 : swiper.isEnd && (rewindFirstIndex = 0));
  let ratio = (currentPos - slidesGrid[stopIndex]) / groupSize, increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    swiper.swipeDirection === "next" && (ratio >= params.longSwipesRatio ? swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment) : swiper.slideTo(stopIndex)), swiper.swipeDirection === "prev" && (ratio > 1 - params.longSwipesRatio ? swiper.slideTo(stopIndex + increment) : rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio ? swiper.slideTo(rewindLastIndex) : swiper.slideTo(stopIndex));
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl) ? e.target === swiper.navigation.nextEl ? swiper.slideTo(stopIndex + increment) : swiper.slideTo(stopIndex) : (swiper.swipeDirection === "next" && swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment), swiper.swipeDirection === "prev" && swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex));
  }
}
function onResize() {
  let swiper = this, {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  params.breakpoints && swiper.setBreakpoint();
  let {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper, isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = !0, swiper.allowSlidePrev = !0, swiper.updateSize(), swiper.updateSlides(), swiper.updateSlidesClasses();
  let isVirtualLoop = isVirtual && params.loop;
  (params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : swiper.params.loop && !isVirtual ? swiper.slideToLoop(swiper.realIndex, 0, !1, !0) : swiper.slideTo(swiper.activeIndex, 0, !1, !0), swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && (clearTimeout(swiper.autoplay.resizeTimeout), swiper.autoplay.resizeTimeout = setTimeout(() => {
    swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && swiper.autoplay.resume();
  }, 500)), swiper.allowSlidePrev = allowSlidePrev, swiper.allowSlideNext = allowSlideNext, swiper.params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow();
}
function onClick(e) {
  let swiper = this;
  swiper.enabled && (swiper.allowClick || (swiper.params.preventClicks && e.preventDefault(), swiper.params.preventClicksPropagation && swiper.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function onScroll() {
  let swiper = this, {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate, swiper.isHorizontal() ? swiper.translate = -wrapperEl.scrollLeft : swiper.translate = -wrapperEl.scrollTop, swiper.translate === 0 && (swiper.translate = 0), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
  let newProgress, translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  translatesDiff === 0 ? newProgress = 0 : newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff, newProgress !== swiper.progress && swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate), swiper.emit("setTranslate", swiper.translate, !1);
}
function onLoad(e) {
  let swiper = this;
  processLazyPreloader(swiper, e.target), !(swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) && swiper.update();
}
var dummyEventAttached = !1;
function dummyEventListener() {
}
var events = (swiper, method) => {
  let document2 = getDocument(), {
    params,
    el,
    wrapperEl,
    device
  } = swiper, capture = !!params.nested, domMethod = method === "on" ? "addEventListener" : "removeEventListener", swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: !1
  }), document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: !1,
    capture
  }), document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: !0
  }), document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: !0
  }), document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: !0
  }), document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: !0
  }), document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: !0
  }), (params.preventClicks || params.preventClicksPropagation) && el[domMethod]("click", swiper.onClick, !0), params.cssMode && wrapperEl[domMethod]("scroll", swiper.onScroll), params.updateOnWindowResize ? swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : swiper[swiperMethod]("observerUpdate", onResize, !0), el[domMethod]("load", swiper.onLoad, {
    capture: !0
  });
};
function attachEvents() {
  let swiper = this, document2 = getDocument(), {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper), swiper.onTouchMove = onTouchMove.bind(swiper), swiper.onTouchEnd = onTouchEnd.bind(swiper), params.cssMode && (swiper.onScroll = onScroll.bind(swiper)), swiper.onClick = onClick.bind(swiper), swiper.onLoad = onLoad.bind(swiper), dummyEventAttached || (document2.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0), events(swiper, "on");
}
function detachEvents() {
  events(this, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
}, isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
function setBreakpoint() {
  let swiper = this, {
    realIndex,
    initialized,
    params,
    el
  } = swiper, breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  let breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  let breakpointParams = (breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0) || swiper.originalParams, wasMultiRow = isGridEnabled(swiper, params), isMultiRow = isGridEnabled(swiper, breakpointParams), wasEnabled = params.enabled;
  wasMultiRow && !isMultiRow ? (el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`), swiper.emitContainerClasses()) : !wasMultiRow && isMultiRow && (el.classList.add(`${params.containerModifierClass}grid`), (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") && el.classList.add(`${params.containerModifierClass}grid-column`), swiper.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] > "u")
      return;
    let wasModuleEnabled = params[prop] && params[prop].enabled, isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    wasModuleEnabled && !isModuleEnabled && swiper[prop].disable(), !wasModuleEnabled && isModuleEnabled && swiper[prop].enable();
  });
  let directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction, needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged), wasLoop = params.loop;
  directionChanged && initialized && swiper.changeDirection(), extend2(swiper.params, breakpointParams);
  let isEnabled = swiper.params.enabled, hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  }), wasEnabled && !isEnabled ? swiper.disable() : !wasEnabled && isEnabled && swiper.enable(), swiper.currentBreakpoint = breakpoint, swiper.emit("_beforeBreakpoint", breakpointParams), initialized && (needsReLoop ? (swiper.loopDestroy(), swiper.loopCreate(realIndex), swiper.updateSlides()) : !wasLoop && hasLoop ? (swiper.loopCreate(realIndex), swiper.updateSlides()) : wasLoop && !hasLoop && swiper.loopDestroy()), swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0 && (base = "window"), !breakpoints2 || base === "container" && !containerEl)
    return;
  let breakpoint = !1, window2 = getWindow(), currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight, points = Object.keys(breakpoints2).map((point) => {
    if (typeof point == "string" && point.indexOf("@") === 0) {
      let minRatio = parseFloat(point.substr(1));
      return {
        value: currentHeight * minRatio,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    let {
      point,
      value
    } = points[i];
    base === "window" ? window2.matchMedia(`(min-width: ${value}px)`).matches && (breakpoint = point) : value <= containerEl.clientWidth && (breakpoint = point);
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  let resultClasses = [];
  return entries.forEach((item) => {
    typeof item == "object" ? Object.keys(item).forEach((classNames) => {
      item[classNames] && resultClasses.push(prefix + classNames);
    }) : typeof item == "string" && resultClasses.push(prefix + item);
  }), resultClasses;
}
function addClasses() {
  let swiper = this, {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper, suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    autoheight: params.autoHeight
  }, {
    rtl
  }, {
    grid: params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    android: device.android
  }, {
    ios: device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    centered: params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes), el.classList.add(...classNames), swiper.emitContainerClasses();
}
function removeClasses() {
  let swiper = this, {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames), swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  let swiper = this, {
    isLocked: wasLocked,
    params
  } = swiper, {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    let lastSlideIndex = swiper.slides.length - 1, lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else
    swiper.isLocked = swiper.snapGrid.length === 1;
  params.allowSlideNext === !0 && (swiper.allowSlideNext = !swiper.isLocked), params.allowSlidePrev === !0 && (swiper.allowSlidePrev = !swiper.isLocked), wasLocked && wasLocked !== swiper.isLocked && (swiper.isEnd = !1), wasLocked !== swiper.isLocked && swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
  checkOverflow
}, defaults = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopedSlides: null,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function moduleExtendParams(params, allModulesParams) {
  return function(obj) {
    obj === void 0 && (obj = {});
    let moduleParamName = Object.keys(obj)[0], moduleParams = obj[moduleParamName];
    if (typeof moduleParams != "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === !0 && (params[moduleParamName] = {
      enabled: !0
    }), moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl && (params[moduleParamName].auto = !0), ["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el && (params[moduleParamName].auto = !0), !(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    typeof params[moduleParamName] == "object" && !("enabled" in params[moduleParamName]) && (params[moduleParamName].enabled = !0), params[moduleParamName] || (params[moduleParamName] = {
      enabled: !1
    }), extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
}, extendedDefaults = {}, Swiper = class {
  constructor() {
    let el, params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
      args[_key] = arguments[_key];
    args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object" ? params = args[0] : [el, params] = args, params || (params = {}), params = extend2({}, params), el && !params.el && (params.el = el);
    let document2 = getDocument();
    if (params.el && typeof params.el == "string" && document2.querySelectorAll(params.el).length > 1) {
      let swipers = [];
      return document2.querySelectorAll(params.el).forEach((containerEl) => {
        let newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      }), swipers;
    }
    let swiper = this;
    swiper.__swiper__ = !0, swiper.support = getSupport(), swiper.device = getDevice({
      userAgent: params.userAgent
    }), swiper.browser = getBrowser(), swiper.eventsListeners = {}, swiper.eventsAnyListeners = [], swiper.modules = [...swiper.__modules__], params.modules && Array.isArray(params.modules) && swiper.modules.push(...params.modules);
    let allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    let swiperParams = extend2({}, defaults, allModulesParams);
    return swiper.params = extend2({}, swiperParams, extendedDefaults, params), swiper.originalParams = extend2({}, swiper.params), swiper.passedParams = extend2({}, params), swiper.params && swiper.params.on && Object.keys(swiper.params.on).forEach((eventName) => {
      swiper.on(eventName, swiper.params.on[eventName]);
    }), swiper.params && swiper.params.onAny && swiper.onAny(swiper.params.onAny), Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), swiper.emit("_swiper"), swiper.params.init && swiper.init(), swiper;
  }
  getSlideIndex(slideEl) {
    let {
      slidesEl,
      params
    } = this, slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`), firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    let swiper = this, {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    let swiper = this;
    swiper.enabled || (swiper.enabled = !0, swiper.params.grabCursor && swiper.setGrabCursor(), swiper.emit("enable"));
  }
  disable() {
    let swiper = this;
    swiper.enabled && (swiper.enabled = !1, swiper.params.grabCursor && swiper.unsetGrabCursor(), swiper.emit("disable"));
  }
  setProgress(progress, speed) {
    let swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    let min = swiper.minTranslate(), current = (swiper.maxTranslate() - min) * progress + min;
    swiper.translateTo(current, typeof speed > "u" ? 0 : speed), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    let swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    let cls = swiper.el.className.split(" ").filter((className) => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0);
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    let swiper = this;
    return swiper.destroyed ? "" : slideEl.className.split(" ").filter((className) => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    let swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    let updates = [];
    swiper.slides.forEach((slideEl) => {
      let classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      }), swiper.emit("_slideClass", slideEl, classNames);
    }), swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    view === void 0 && (view = "current"), exact === void 0 && (exact = !1);
    let swiper = this, {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper, spv = 1;
    if (typeof params.slidesPerView == "number")
      return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0, breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1)
        slides[i] && !breakLoop && (slideSize += slides[i].swiperSlideSize, spv += 1, slideSize > swiperSize && (breakLoop = !0));
      for (let i = activeIndex - 1; i >= 0; i -= 1)
        slides[i] && !breakLoop && (slideSize += slides[i].swiperSlideSize, spv += 1, slideSize > swiperSize && (breakLoop = !0));
    } else if (view === "current")
      for (let i = activeIndex + 1; i < slides.length; i += 1)
        (exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) && (spv += 1);
    else
      for (let i = activeIndex - 1; i >= 0; i -= 1)
        slidesGrid[activeIndex] - slidesGrid[i] < swiperSize && (spv += 1);
    return spv;
  }
  update() {
    let swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    let {
      snapGrid,
      params
    } = swiper;
    params.breakpoints && swiper.setBreakpoint(), [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      imageEl.complete && processLazyPreloader(swiper, imageEl);
    }), swiper.updateSize(), swiper.updateSlides(), swiper.updateProgress(), swiper.updateSlidesClasses();
    function setTranslate2() {
      let translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate, newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode)
      setTranslate2(), params.autoHeight && swiper.updateAutoHeight();
    else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        let slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, !1, !0);
      } else
        translated = swiper.slideTo(swiper.activeIndex, 0, !1, !0);
      translated || setTranslate2();
    }
    params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow(), swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    needUpdate === void 0 && (needUpdate = !0);
    let swiper = this, currentDirection = swiper.params.direction;
    return newDirection || (newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal"), newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical" || (swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`), swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`), swiper.emitContainerClasses(), swiper.params.direction = newDirection, swiper.slides.forEach((slideEl) => {
      newDirection === "vertical" ? slideEl.style.width = "" : slideEl.style.height = "";
    }), swiper.emit("changeDirection"), needUpdate && swiper.update()), swiper;
  }
  changeLanguageDirection(direction) {
    let swiper = this;
    swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr" || (swiper.rtl = direction === "rtl", swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl, swiper.rtl ? (swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`), swiper.el.dir = "rtl") : (swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`), swiper.el.dir = "ltr"), swiper.update());
  }
  mount(element) {
    let swiper = this;
    if (swiper.mounted)
      return !0;
    let el = element || swiper.params.el;
    if (typeof el == "string" && (el = document.querySelector(el)), !el)
      return !1;
    el.swiper = swiper, el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER" && (swiper.isElement = !0);
    let getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`, wrapperEl = (() => el && el.shadowRoot && el.shadowRoot.querySelector ? el.shadowRoot.querySelector(getWrapperSelector()) : elementChildren(el, getWrapperSelector())[0])();
    return !wrapperEl && swiper.params.createElements && (wrapperEl = createElement("div", swiper.params.wrapperClass), el.append(wrapperEl), elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
      wrapperEl.append(slideEl);
    })), Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: !0,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    }), !0;
  }
  init(el) {
    let swiper = this;
    if (swiper.initialized || swiper.mount(el) === !1)
      return swiper;
    swiper.emit("beforeInit"), swiper.params.breakpoints && swiper.setBreakpoint(), swiper.addClasses(), swiper.updateSize(), swiper.updateSlides(), swiper.params.watchOverflow && swiper.checkOverflow(), swiper.params.grabCursor && swiper.enabled && swiper.setGrabCursor(), swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled ? swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, !1, !0) : swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, !1, !0), swiper.params.loop && swiper.loopCreate(), swiper.attachEvents();
    let lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    return swiper.isElement && lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]')), lazyElements.forEach((imageEl) => {
      imageEl.complete ? processLazyPreloader(swiper, imageEl) : imageEl.addEventListener("load", (e) => {
        processLazyPreloader(swiper, e.target);
      });
    }), preload(swiper), swiper.initialized = !0, preload(swiper), swiper.emit("init"), swiper.emit("afterInit"), swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    deleteInstance === void 0 && (deleteInstance = !0), cleanStyles === void 0 && (cleanStyles = !0);
    let swiper = this, {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    return typeof swiper.params > "u" || swiper.destroyed || (swiper.emit("beforeDestroy"), swiper.initialized = !1, swiper.detachEvents(), params.loop && swiper.loopDestroy(), cleanStyles && (swiper.removeClasses(), el.removeAttribute("style"), wrapperEl.removeAttribute("style"), slides && slides.length && slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass), slideEl.removeAttribute("style"), slideEl.removeAttribute("data-swiper-slide-index");
    })), swiper.emit("destroy"), Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    }), deleteInstance !== !1 && (swiper.el.swiper = null, deleteProps(swiper)), swiper.destroyed = !0), null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
    let modules2 = Swiper.prototype.__modules__;
    typeof mod == "function" && modules2.indexOf(mod) < 0 && modules2.push(mod);
  }
  static use(module2) {
    return Array.isArray(module2) ? (module2.forEach((m) => Swiper.installModule(m)), Swiper) : (Swiper.installModule(module2), Swiper);
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// node_modules/swiper/modules/virtual.mjs
function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout, document2 = getDocument();
  swiper.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  let tempDOM = document2.createElement("div");
  function renderSlide(slide2, index) {
    let params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index])
      return swiper.virtual.cache[index];
    let slideEl;
    return params.renderSlide ? (slideEl = params.renderSlide.call(swiper, slide2, index), typeof slideEl == "string" && (tempDOM.innerHTML = slideEl, slideEl = tempDOM.children[0])) : swiper.isElement ? slideEl = createElement("swiper-slide") : slideEl = createElement("div", swiper.params.slideClass), slideEl.setAttribute("data-swiper-slide-index", index), params.renderSlide || (slideEl.innerHTML = slide2), params.cache && (swiper.virtual.cache[index] = slideEl), slideEl;
  }
  function update2(force) {
    let {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params, {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual, {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    swiper.params.cssMode || swiper.updateActiveIndex();
    let activeIndex = swiper.activeIndex || 0, offsetProp;
    swiper.rtlTranslate ? offsetProp = "right" : offsetProp = swiper.isHorizontal() ? "left" : "top";
    let slidesAfter, slidesBefore;
    centeredSlides ? (slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter, slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore) : (slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter, slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore);
    let from = activeIndex - slidesBefore, to = activeIndex + slidesAfter;
    isLoop || (from = Math.max(from, 0), to = Math.min(to, slides.length - 1));
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    isLoop && activeIndex >= slidesBefore ? (from -= slidesBefore, centeredSlides || (offset += swiper.slidesGrid[0])) : isLoop && activeIndex < slidesBefore && (from = -slidesBefore, centeredSlides && (offset += swiper.slidesGrid[0])), Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides(), swiper.updateProgress(), swiper.updateSlidesClasses(), emit("virtualUpdate");
    }
    if (previousFrom === from && previousTo === to && !force) {
      swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset && swiper.slides.forEach((slideEl) => {
        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
      }), swiper.updateProgress(), emit("virtualUpdate");
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function() {
          let slidesToRender = [];
          for (let i = from; i <= to; i += 1)
            slidesToRender.push(slides[i]);
          return slidesToRender;
        }()
      }), swiper.params.virtual.renderExternalUpdate ? onRendered() : emit("virtualUpdate");
      return;
    }
    let prependIndexes = [], appendIndexes = [], getSlideIndex = (index) => {
      let slideIndex = index;
      return index < 0 ? slideIndex = slides.length + index : slideIndex >= slides.length && (slideIndex = slideIndex - slides.length), slideIndex;
    };
    if (force)
      swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
        slideEl.remove();
      });
    else
      for (let i = previousFrom; i <= previousTo; i += 1)
        if (i < from || i > to) {
          let slideIndex = getSlideIndex(i);
          swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
            slideEl.remove();
          });
        }
    let loopFrom = isLoop ? -slides.length : 0, loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1)
      if (i >= from && i <= to) {
        let slideIndex = getSlideIndex(i);
        typeof previousTo > "u" || force ? appendIndexes.push(slideIndex) : (i > previousTo && appendIndexes.push(slideIndex), i < previousFrom && prependIndexes.push(slideIndex));
      }
    if (appendIndexes.forEach((index) => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    }), isLoop)
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        let index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    else
      prependIndexes.sort((a, b) => b - a), prependIndexes.forEach((index) => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    }), onRendered();
  }
  function appendSlide2(slides) {
    if (typeof slides == "object" && "length" in slides)
      for (let i = 0; i < slides.length; i += 1)
        slides[i] && swiper.virtual.slides.push(slides[i]);
    else
      swiper.virtual.slides.push(slides);
    update2(!0);
  }
  function prependSlide2(slides) {
    let activeIndex = swiper.activeIndex, newActiveIndex = activeIndex + 1, numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1)
        slides[i] && swiper.virtual.slides.unshift(slides[i]);
      newActiveIndex = activeIndex + slides.length, numberOfNewSlides = slides.length;
    } else
      swiper.virtual.slides.unshift(slides);
    if (swiper.params.virtual.cache) {
      let cache = swiper.virtual.cache, newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        let cachedEl = cache[cachedIndex], cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
        cachedElIndex && cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides), newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      }), swiper.virtual.cache = newCache;
    }
    update2(!0), swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide2(slidesIndexes) {
    if (typeof slidesIndexes > "u" || slidesIndexes === null)
      return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes))
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1)
        swiper.params.virtual.cache && (delete swiper.virtual.cache[slidesIndexes[i]], Object.keys(swiper.virtual.cache).forEach((key) => {
          key > slidesIndexes && (swiper.virtual.cache[key - 1] = swiper.virtual.cache[key], swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1), delete swiper.virtual.cache[key]);
        })), swiper.virtual.slides.splice(slidesIndexes[i], 1), slidesIndexes[i] < activeIndex && (activeIndex -= 1), activeIndex = Math.max(activeIndex, 0);
    else
      swiper.params.virtual.cache && (delete swiper.virtual.cache[slidesIndexes], Object.keys(swiper.virtual.cache).forEach((key) => {
        key > slidesIndexes && (swiper.virtual.cache[key - 1] = swiper.virtual.cache[key], swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1), delete swiper.virtual.cache[key]);
      })), swiper.virtual.slides.splice(slidesIndexes, 1), slidesIndexes < activeIndex && (activeIndex -= 1), activeIndex = Math.max(activeIndex, 0);
    update2(!0), swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides2() {
    swiper.virtual.slides = [], swiper.params.virtual.cache && (swiper.virtual.cache = {}), update2(!0), swiper.slideTo(0, 0);
  }
  on("beforeInit", () => {
    if (!swiper.params.virtual.enabled)
      return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides > "u") {
      let slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      slides && slides.length && (swiper.virtual.slides = [...slides], domSlidesAssigned = !0, slides.forEach((slideEl, slideIndex) => {
        slideEl.setAttribute("data-swiper-slide-index", slideIndex), swiper.virtual.cache[slideIndex] = slideEl, slideEl.remove();
      }));
    }
    domSlidesAssigned || (swiper.virtual.slides = swiper.params.virtual.slides), swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`), swiper.params.watchSlidesProgress = !0, swiper.originalParams.watchSlidesProgress = !0, update2();
  }), on("setTranslate", () => {
    swiper.params.virtual.enabled && (swiper.params.cssMode && !swiper._immediateVirtual ? (clearTimeout(cssModeTimeout), cssModeTimeout = setTimeout(() => {
      update2();
    }, 100)) : update2());
  }), on("init update resize", () => {
    swiper.params.virtual.enabled && swiper.params.cssMode && setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
  }), Object.assign(swiper.virtual, {
    appendSlide: appendSlide2,
    prependSlide: prependSlide2,
    removeSlide: removeSlide2,
    removeAllSlides: removeAllSlides2,
    update: update2
  });
}

// node_modules/swiper/modules/keyboard.mjs
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, document2 = getDocument(), window2 = getWindow();
  swiper.keyboard = {
    enabled: !1
  }, extendParams({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function handle(event2) {
    if (!swiper.enabled)
      return;
    let {
      rtlTranslate: rtl
    } = swiper, e = event2;
    e.originalEvent && (e = e.originalEvent);
    let kc = e.keyCode || e.charCode, pageUpDown = swiper.params.keyboard.pageUpDown, isPageUp = pageUpDown && kc === 33, isPageDown = pageUpDown && kc === 34, isArrowLeft = kc === 37, isArrowRight = kc === 39, isArrowUp = kc === 38, isArrowDown = kc === 40;
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown) || !swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp))
      return !1;
    if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) && !(document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = !1;
        if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0)
          return;
        let el = swiper.el, swiperWidth = el.clientWidth, swiperHeight = el.clientHeight, windowWidth = window2.innerWidth, windowHeight = window2.innerHeight, swiperOffset = elementOffset(el);
        rtl && (swiperOffset.left -= el.scrollLeft);
        let swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          let point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0)
              continue;
            inView = !0;
          }
        }
        if (!inView)
          return;
      }
      swiper.isHorizontal() ? ((isPageUp || isPageDown || isArrowLeft || isArrowRight) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) && swiper.slideNext(), ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) && swiper.slidePrev()) : ((isPageUp || isPageDown || isArrowUp || isArrowDown) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (isPageDown || isArrowDown) && swiper.slideNext(), (isPageUp || isArrowUp) && swiper.slidePrev()), emit("keyPress", kc);
    }
  }
  function enable() {
    swiper.keyboard.enabled || (document2.addEventListener("keydown", handle), swiper.keyboard.enabled = !0);
  }
  function disable() {
    swiper.keyboard.enabled && (document2.removeEventListener("keydown", handle), swiper.keyboard.enabled = !1);
  }
  on("init", () => {
    swiper.params.keyboard.enabled && enable();
  }), on("destroy", () => {
    swiper.keyboard.enabled && disable();
  }), Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  }), swiper.mousewheel = {
    enabled: !1
  };
  let timeout, lastScrollTime = now(), lastEventBeforeSnap, recentWheelEvents = [];
  function normalize(e) {
    let sX = 0, sY = 0, pX = 0, pY = 0;
    return "detail" in e && (sY = e.detail), "wheelDelta" in e && (sY = -e.wheelDelta / 120), "wheelDeltaY" in e && (sY = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (sX = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (sX = sY, sY = 0), pX = sX * 10, pY = sY * 10, "deltaY" in e && (pY = e.deltaY), "deltaX" in e && (pX = e.deltaX), e.shiftKey && !pX && (pX = pY, pY = 0), (pX || pY) && e.deltaMode && (e.deltaMode === 1 ? (pX *= 40, pY *= 40) : (pX *= 800, pY *= 800)), pX && !sX && (sX = pX < 1 ? -1 : 1), pY && !sY && (sY = pY < 1 ? -1 : 1), {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    swiper.enabled && (swiper.mouseEntered = !0);
  }
  function handleMouseLeave() {
    swiper.enabled && (swiper.mouseEntered = !1);
  }
  function animateSlider(newEvent) {
    return swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta || swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime ? !1 : newEvent.delta >= 6 && now() - lastScrollTime < 60 ? !0 : (newEvent.direction < 0 ? (!swiper.isEnd || swiper.params.loop) && !swiper.animating && (swiper.slideNext(), emit("scroll", newEvent.raw)) : (!swiper.isBeginning || swiper.params.loop) && !swiper.animating && (swiper.slidePrev(), emit("scroll", newEvent.raw)), lastScrollTime = new window2.Date().getTime(), !1);
  }
  function releaseScroll(newEvent) {
    let params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges)
        return !0;
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges)
      return !0;
    return !1;
  }
  function handle(event2) {
    let e = event2, disableParentSwiper = !0;
    if (!swiper.enabled || event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`))
      return;
    let params = swiper.params.mousewheel;
    swiper.params.cssMode && e.preventDefault();
    let targetEl = swiper.el;
    swiper.params.mousewheel.eventsTarget !== "container" && (targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget));
    let targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges)
      return !0;
    e.originalEvent && (e = e.originalEvent);
    let delta = 0, rtlFactor = swiper.rtlTranslate ? -1 : 1, data2 = normalize(e);
    if (params.forceToAxis)
      if (swiper.isHorizontal())
        if (Math.abs(data2.pixelX) > Math.abs(data2.pixelY))
          delta = -data2.pixelX * rtlFactor;
        else
          return !0;
      else if (Math.abs(data2.pixelY) > Math.abs(data2.pixelX))
        delta = -data2.pixelY;
      else
        return !0;
    else
      delta = Math.abs(data2.pixelX) > Math.abs(data2.pixelY) ? -data2.pixelX * rtlFactor : -data2.pixelY;
    if (delta === 0)
      return !0;
    params.invert && (delta = -delta);
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate() && (positions = swiper.minTranslate()), positions <= swiper.maxTranslate() && (positions = swiper.maxTranslate()), disableParentSwiper = swiper.params.loop ? !0 : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate()), disableParentSwiper && swiper.params.nested && e.stopPropagation(), !swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      let newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      recentWheelEvents.length >= 2 && recentWheelEvents.shift();
      let prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      if (recentWheelEvents.push(newEvent), prevEvent ? (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) && animateSlider(newEvent) : animateSlider(newEvent), releaseScroll(newEvent))
        return !0;
    } else {
      let newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      }, ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity, wasBeginning = swiper.isBeginning, wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate() && (position = swiper.minTranslate()), position <= swiper.maxTranslate() && (position = swiper.maxTranslate()), swiper.setTransition(0), swiper.setTranslate(position), swiper.updateProgress(), swiper.updateActiveIndex(), swiper.updateSlidesClasses(), (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) && swiper.updateSlidesClasses(), swiper.params.loop && swiper.loopFix({
          direction: newEvent.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), swiper.params.freeMode.sticky) {
          clearTimeout(timeout), timeout = void 0, recentWheelEvents.length >= 15 && recentWheelEvents.shift();
          let prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0, firstEvent = recentWheelEvents[0];
          if (recentWheelEvents.push(newEvent), prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction))
            recentWheelEvents.splice(0);
          else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            let snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent, recentWheelEvents.splice(0), timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, !0, void 0, snapToThreshold);
            }, 0);
          }
          timeout || (timeout = nextTick(() => {
            lastEventBeforeSnap = newEvent, recentWheelEvents.splice(0), swiper.slideToClosest(swiper.params.speed, !0, void 0, 0.5);
          }, 500));
        }
        if (ignoreWheelEvents || emit("scroll", e), swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction && swiper.autoplay.stop(), params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate()))
          return !0;
      }
    }
    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
  }
  function events2(method) {
    let targetEl = swiper.el;
    swiper.params.mousewheel.eventsTarget !== "container" && (targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget)), targetEl[method]("mouseenter", handleMouseEnter), targetEl[method]("mouseleave", handleMouseLeave), targetEl[method]("wheel", handle);
  }
  function enable() {
    return swiper.params.cssMode ? (swiper.wrapperEl.removeEventListener("wheel", handle), !0) : swiper.mousewheel.enabled ? !1 : (events2("addEventListener"), swiper.mousewheel.enabled = !0, !0);
  }
  function disable() {
    return swiper.params.cssMode ? (swiper.wrapperEl.addEventListener(event, handle), !0) : swiper.mousewheel.enabled ? (events2("removeEventListener"), swiper.mousewheel.enabled = !1, !0) : !1;
  }
  on("init", () => {
    !swiper.params.mousewheel.enabled && swiper.params.cssMode && disable(), swiper.params.mousewheel.enabled && enable();
  }), on("destroy", () => {
    swiper.params.cssMode && enable(), swiper.mousewheel.enabled && disable();
  }), Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  return swiper.params.createElements && Object.keys(checkProps).forEach((key) => {
    if (!params[key] && params.auto === !0) {
      let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
      element || (element = createElement("div", checkProps[key]), element.className = checkProps[key], swiper.el.append(element)), params[key] = element, originalParams[key] = element;
    }
  }), params;
}

// node_modules/swiper/modules/navigation.mjs
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  let makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  function getEl(el) {
    let res;
    return el && typeof el == "string" && swiper.isElement && (res = swiper.el.querySelector(el), res) ? res : (el && (typeof el == "string" && (res = [...document.querySelectorAll(el)]), swiper.params.uniqueNavElements && typeof el == "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1 && (res = swiper.el.querySelector(el))), el && !res ? el : res);
  }
  function toggleEl(el, disabled) {
    let params = swiper.params.navigation;
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl && (subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" ")), subEl.tagName === "BUTTON" && (subEl.disabled = disabled), swiper.params.watchOverflow && swiper.enabled && subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass));
    });
  }
  function update2() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, !1), toggleEl(nextEl, !1);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind), toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault(), !(swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) && (swiper.slidePrev(), emit("navigationPrev"));
  }
  function onNextClick(e) {
    e.preventDefault(), !(swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) && (swiper.slideNext(), emit("navigationNext"));
  }
  function init() {
    let params = swiper.params.navigation;
    if (swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(params.nextEl || params.prevEl))
      return;
    let nextEl = getEl(params.nextEl), prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    }), nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl);
    let initButton = (el, dir) => {
      el && el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick), !swiper.enabled && el && el.classList.add(...params.lockClass.split(" "));
    };
    nextEl.forEach((el) => initButton(el, "next")), prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl);
    let destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick), el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next")), prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    swiper.params.navigation.enabled === !1 ? disable() : (init(), update2());
  }), on("toEdge fromEdge lock unlock", () => {
    update2();
  }), on("destroy", () => {
    destroy();
  }), on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl), swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  }), on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl);
    let targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      nextEl.length ? isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass) : prevEl.length && (isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass)), emit(isHidden === !0 ? "navigationShow" : "navigationHide"), [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  let enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" ")), init(), update2();
  }, disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" ")), destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes2) {
  return classes2 === void 0 && (classes2 = ""), `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination.mjs
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  }), swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize, dynamicBulletIndex = 0, makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    let {
      bulletActiveClass
    } = swiper.params.pagination;
    bulletEl && (bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`], bulletEl && (bulletEl.classList.add(`${bulletActiveClass}-${position}`), bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`], bulletEl && bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`)));
  }
  function onBulletClick(e) {
    let bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl)
      return;
    e.preventDefault();
    let index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index)
        return;
      let realIndex = swiper.realIndex, newSlideIndex = swiper.getSlideIndexByData(index), currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex), loopFix2 = (dir) => {
        let indexBeforeLoopFix = swiper.activeIndex;
        swiper.loopFix({
          direction: dir,
          activeSlideIndex: newSlideIndex,
          slideTo: !1
        });
        let indexAfterFix = swiper.activeIndex;
        indexBeforeLoopFix === indexAfterFix && swiper.slideToLoop(realIndex, 0, !1, !0);
      };
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides)
        loopFix2(newSlideIndex > currentSlideIndex ? "next" : "prev");
      else if (swiper.params.centeredSlides) {
        let slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        newSlideIndex < Math.floor(slidesPerView / 2) && loopFix2("prev");
      }
      swiper.slideToLoop(index);
    } else
      swiper.slideTo(index);
  }
  function update2() {
    let rtl = swiper.rtl, params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current, previousIndex, slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length, total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop ? (previousIndex = swiper.previousRealIndex || 0, current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex) : typeof swiper.snapIndex < "u" ? (current = swiper.snapIndex, previousIndex = swiper.previousSnapIndex) : (previousIndex = swiper.previousIndex || 0, current = swiper.activeIndex || 0), params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      let bullets = swiper.pagination.bullets, firstIndex, lastIndex, midIndex;
      if (params.dynamicBullets && (bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", !0), el.forEach((subEl) => {
        subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
      }), params.dynamicMainBullets > 1 && previousIndex !== void 0 && (dynamicBulletIndex += current - (previousIndex || 0), dynamicBulletIndex > params.dynamicMainBullets - 1 ? dynamicBulletIndex = params.dynamicMainBullets - 1 : dynamicBulletIndex < 0 && (dynamicBulletIndex = 0)), firstIndex = Math.max(current - dynamicBulletIndex, 0), lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1), midIndex = (lastIndex + firstIndex) / 2), bullets.forEach((bulletEl) => {
        let classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s == "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      }), el.length > 1)
        bullets.forEach((bullet) => {
          let bulletIndex = elementIndex(bullet);
          bulletIndex === current ? bullet.classList.add(...params.bulletActiveClass.split(" ")) : swiper.isElement && bullet.setAttribute("part", "bullet"), params.dynamicBullets && (bulletIndex >= firstIndex && bulletIndex <= lastIndex && bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" ")), bulletIndex === firstIndex && setSideBullets(bullet, "prev"), bulletIndex === lastIndex && setSideBullets(bullet, "next"));
        });
      else {
        let bullet = bullets[current];
        if (bullet && bullet.classList.add(...params.bulletActiveClass.split(" ")), swiper.isElement && bullets.forEach((bulletEl, bulletIndex) => {
          bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
        }), params.dynamicBullets) {
          let firstDisplayedBullet = bullets[firstIndex], lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1)
            bullets[i] && bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
          setSideBullets(firstDisplayedBullet, "prev"), setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        let dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4), bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize, offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction" && (subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
        fractionEl.textContent = params.formatFractionCurrent(current + 1);
      }), subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
        totalEl.textContent = params.formatFractionTotal(total);
      })), params.type === "progressbar") {
        let progressbarDirection;
        params.progressbarOpposite ? progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal" : progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        let scale = (current + 1) / total, scaleX = 1, scaleY = 1;
        progressbarDirection === "horizontal" ? scaleX = scale : scaleY = scale, subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`, progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      params.type === "custom" && params.renderCustom ? (subEl.innerHTML = params.renderCustom(swiper, current + 1, total), subElIndex === 0 && emit("paginationRender", subEl)) : (subElIndex === 0 && emit("paginationRender", subEl), emit("paginationUpdate", subEl)), swiper.params.watchOverflow && swiper.enabled && subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
    });
  }
  function render() {
    let params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length, el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength && (numberOfBullets = slidesLength);
      for (let i = 0; i < numberOfBullets; i += 1)
        params.renderBullet ? paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass) : paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
    }
    params.type === "fraction" && (params.renderFraction ? paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass) : paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`), params.type === "progressbar" && (params.renderProgressbar ? paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass) : paginationHTML = `<span class="${params.progressbarFillClass}"></span>`), swiper.pagination.bullets = [], el.forEach((subEl) => {
      params.type !== "custom" && (subEl.innerHTML = paginationHTML || ""), params.type === "bullets" && swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
    }), params.type !== "custom" && emit("paginationRender", el[0]);
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    let params = swiper.params.pagination;
    if (!params.el)
      return;
    let el;
    typeof params.el == "string" && swiper.isElement && (el = swiper.el.querySelector(params.el)), !el && typeof params.el == "string" && (el = [...document.querySelectorAll(params.el)]), el || (el = params.el), !(!el || el.length === 0) && (swiper.params.uniqueNavElements && typeof params.el == "string" && Array.isArray(el) && el.length > 1 && (el = [...swiper.el.querySelectorAll(params.el)], el.length > 1 && (el = el.filter((subEl) => elementParents(subEl, ".swiper")[0] === swiper.el)[0])), Array.isArray(el) && el.length === 1 && (el = el[0]), Object.assign(swiper.pagination, {
      el
    }), el = makeElementsArray(el), el.forEach((subEl) => {
      params.type === "bullets" && params.clickable && subEl.classList.add(...(params.clickableClass || "").split(" ")), subEl.classList.add(params.modifierClass + params.type), subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass), params.type === "bullets" && params.dynamicBullets && (subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`), dynamicBulletIndex = 0, params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)), params.type === "progressbar" && params.progressbarOpposite && subEl.classList.add(params.progressbarOppositeClass), params.clickable && subEl.addEventListener("click", onBulletClick), swiper.enabled || subEl.classList.add(params.lockClass);
    }));
  }
  function destroy() {
    let params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    el && (el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.classList.remove(params.hiddenClass), subEl.classList.remove(params.modifierClass + params.type), subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass), params.clickable && (subEl.classList.remove(...(params.clickableClass || "").split(" ")), subEl.removeEventListener("click", onBulletClick));
    })), swiper.pagination.bullets && swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el)
      return;
    let params = swiper.params.pagination, {
      el
    } = swiper.pagination;
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass), subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  }), on("init", () => {
    swiper.params.pagination.enabled === !1 ? disable() : (init(), render(), update2());
  }), on("activeIndexChange", () => {
    typeof swiper.snapIndex > "u" && update2();
  }), on("snapIndexChange", () => {
    update2();
  }), on("snapGridLengthChange", () => {
    render(), update2();
  }), on("destroy", () => {
    destroy();
  }), on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    el && (el = makeElementsArray(el), el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
  }), on("lock unlock", () => {
    update2();
  }), on("click", (_s, e) => {
    let targetEl = e.target, el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      let isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      emit(isHidden === !0 ? "paginationShow" : "paginationHide"), el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  let enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    el && (el = makeElementsArray(el), el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass))), init(), render(), update2();
  }, disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    el && (el = makeElementsArray(el), el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass))), destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/scrollbar.mjs
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, document2 = getDocument(), isTouched = !1, timeout = null, dragTimeout = null, dragStartPos, dragSize, trackSize, divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    let {
      scrollbar,
      rtlTranslate: rtl
    } = swiper, {
      dragEl,
      el
    } = scrollbar, params = swiper.params.scrollbar, progress = swiper.params.loop ? swiper.progressLoop : swiper.progress, newSize = dragSize, newPos = (trackSize - dragSize) * progress;
    rtl ? (newPos = -newPos, newPos > 0 ? (newSize = dragSize - newPos, newPos = 0) : -newPos + dragSize > trackSize && (newSize = trackSize + newPos)) : newPos < 0 ? (newSize = dragSize + newPos, newPos = 0) : newPos + dragSize > trackSize && (newSize = trackSize - newPos), swiper.isHorizontal() ? (dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`, dragEl.style.width = `${newSize}px`) : (dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`, dragEl.style.height = `${newSize}px`), params.hide && (clearTimeout(timeout), el.style.opacity = 1, timeout = setTimeout(() => {
      el.style.opacity = 0, el.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function setTransition2(duration) {
    !swiper.params.scrollbar.el || !swiper.scrollbar.el || (swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`);
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
      return;
    let {
      scrollbar
    } = swiper, {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "", dragEl.style.height = "", trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight, divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0)), swiper.params.scrollbar.dragSize === "auto" ? dragSize = trackSize * divider : dragSize = parseInt(swiper.params.scrollbar.dragSize, 10), swiper.isHorizontal() ? dragEl.style.width = `${dragSize}px` : dragEl.style.height = `${dragSize}px`, divider >= 1 ? el.style.display = "none" : el.style.display = "", swiper.params.scrollbar.hide && (el.style.opacity = 0), swiper.params.watchOverflow && swiper.enabled && scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    let {
      scrollbar,
      rtlTranslate: rtl
    } = swiper, {
      el
    } = scrollbar, positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize), positionRatio = Math.max(Math.min(positionRatio, 1), 0), rtl && (positionRatio = 1 - positionRatio);
    let position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position), swiper.setTranslate(position), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    let params = swiper.params.scrollbar, {
      scrollbar,
      wrapperEl
    } = swiper, {
      el,
      dragEl
    } = scrollbar;
    isTouched = !0, dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), wrapperEl.style.transitionDuration = "100ms", dragEl.style.transitionDuration = "100ms", setDragPosition(e), clearTimeout(dragTimeout), el.style.transitionDuration = "0ms", params.hide && (el.style.opacity = 1), swiper.params.cssMode && (swiper.wrapperEl.style["scroll-snap-type"] = "none"), emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    let {
      scrollbar,
      wrapperEl
    } = swiper, {
      el,
      dragEl
    } = scrollbar;
    isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, setDragPosition(e), wrapperEl.style.transitionDuration = "0ms", el.style.transitionDuration = "0ms", dragEl.style.transitionDuration = "0ms", emit("scrollbarDragMove", e));
  }
  function onDragEnd(e) {
    let params = swiper.params.scrollbar, {
      scrollbar,
      wrapperEl
    } = swiper, {
      el
    } = scrollbar;
    isTouched && (isTouched = !1, swiper.params.cssMode && (swiper.wrapperEl.style["scroll-snap-type"] = "", wrapperEl.style.transitionDuration = ""), params.hide && (clearTimeout(dragTimeout), dragTimeout = nextTick(() => {
      el.style.opacity = 0, el.style.transitionDuration = "400ms";
    }, 1e3)), emit("scrollbarDragEnd", e), params.snapOnRelease && swiper.slideToClosest());
  }
  function events2(method) {
    let {
      scrollbar,
      params
    } = swiper, el = scrollbar.el;
    if (!el)
      return;
    let target = el, activeListener = params.passiveListeners ? {
      passive: !1,
      capture: !1
    } : !1, passiveListener = params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    if (!target)
      return;
    let eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener), document2[eventMethod]("pointermove", onDragMove, activeListener), document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    !swiper.params.scrollbar.el || !swiper.scrollbar.el || events2("on");
  }
  function disableDraggable() {
    !swiper.params.scrollbar.el || !swiper.scrollbar.el || events2("off");
  }
  function init() {
    let {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    let params = swiper.params.scrollbar;
    if (!params.el)
      return;
    let el;
    typeof params.el == "string" && swiper.isElement && (el = swiper.el.querySelector(params.el)), !el && typeof params.el == "string" ? el = document2.querySelectorAll(params.el) : el || (el = params.el), swiper.params.uniqueNavElements && typeof params.el == "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1 && (el = swiperEl.querySelector(params.el)), el.length > 0 && (el = el[0]), el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    el && (dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`), dragEl || (dragEl = createElement("div", swiper.params.scrollbar.dragClass), el.append(dragEl))), Object.assign(scrollbar, {
      el,
      dragEl
    }), params.draggable && enableDraggable(), el && el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
  }
  function destroy() {
    let params = swiper.params.scrollbar, el = swiper.scrollbar.el;
    el && el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass), disableDraggable();
  }
  on("init", () => {
    swiper.params.scrollbar.enabled === !1 ? disable() : (init(), updateSize2(), setTranslate2());
  }), on("update resize observerUpdate lock unlock", () => {
    updateSize2();
  }), on("setTranslate", () => {
    setTranslate2();
  }), on("setTransition", (_s, duration) => {
    setTransition2(duration);
  }), on("enable disable", () => {
    let {
      el
    } = swiper.scrollbar;
    el && el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
  }), on("destroy", () => {
    destroy();
  });
  let enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass), swiper.scrollbar.el && swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass), init(), updateSize2(), setTranslate2();
  }, disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass), swiper.scrollbar.el && swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass), destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}

// node_modules/swiper/modules/parallax.mjs
function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: !1
    }
  });
  let elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", setTransform = (el, progress) => {
    let {
      rtl
    } = swiper, rtlFactor = rtl ? -1 : 1, p = el.getAttribute("data-swiper-parallax") || "0", x = el.getAttribute("data-swiper-parallax-x"), y = el.getAttribute("data-swiper-parallax-y"), scale = el.getAttribute("data-swiper-parallax-scale"), opacity = el.getAttribute("data-swiper-parallax-opacity"), rotate = el.getAttribute("data-swiper-parallax-rotate");
    if (x || y ? (x = x || "0", y = y || "0") : swiper.isHorizontal() ? (x = p, y = "0") : (y = p, x = "0"), x.indexOf("%") >= 0 ? x = `${parseInt(x, 10) * progress * rtlFactor}%` : x = `${x * progress * rtlFactor}px`, y.indexOf("%") >= 0 ? y = `${parseInt(y, 10) * progress}%` : y = `${y * progress}px`, typeof opacity < "u" && opacity !== null) {
      let currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale < "u" && scale !== null) {
      let currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate < "u" && rotate !== null) {
      let currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  }, setTranslate2 = () => {
    let {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper, elements = elementChildren(el, elementsSelector);
    swiper.isElement && elements.push(...elementChildren(swiper.hostEl, elementsSelector)), elements.forEach((subEl) => {
      setTransform(subEl, progress);
    }), slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto" && (slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1)), slideProgress = Math.min(Math.max(slideProgress, -1), 1), slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach((subEl) => {
        setTransform(subEl, slideProgress);
      });
    });
  }, setTransition2 = function(duration) {
    duration === void 0 && (duration = swiper.params.speed);
    let {
      el,
      hostEl
    } = swiper, elements = [...el.querySelectorAll(elementsSelector)];
    swiper.isElement && elements.push(...hostEl.querySelectorAll(elementsSelector)), elements.forEach((parallaxEl) => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
      duration === 0 && (parallaxDuration = 0), parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on("beforeInit", () => {
    swiper.params.parallax.enabled && (swiper.params.watchSlidesProgress = !0, swiper.originalParams.watchSlidesProgress = !0);
  }), on("init", () => {
    swiper.params.parallax.enabled && setTranslate2();
  }), on("setTranslate", () => {
    swiper.params.parallax.enabled && setTranslate2();
  }), on("setTransition", (_swiper, duration) => {
    swiper.params.parallax.enabled && setTransition2(duration);
  });
}

// node_modules/swiper/modules/zoom.mjs
function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref, window2 = getWindow();
  extendParams({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), swiper.zoom = {
    enabled: !1
  };
  let currentScale = 1, isScaling = !1, fakeGestureTouched, fakeGestureMoved, evCache = [], gesture = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, image = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  }, velocity = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  }, scale = 1;
  Object.defineProperty(swiper.zoom, "scale", {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        let imageEl = gesture.imageEl, slideEl = gesture.slideEl;
        emit("zoomChange", value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2)
      return 1;
    let x1 = evCache[0].pageX, y1 = evCache[0].pageY, x2 = evCache[1].pageX, y2 = evCache[1].pageY;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  function getScaleOrigin() {
    if (evCache.length < 2)
      return {
        x: null,
        y: null
      };
    let box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? "swiper-slide" : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    let slideSelector = getSlideSelector();
    return !!(e.target.matches(slideSelector) || swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0);
  }
  function eventWithinZoomContainer(e) {
    let selector = `.${swiper.params.zoom.containerClass}`;
    return !!(e.target.matches(selector) || [...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0);
  }
  function onGestureStart(e) {
    if (e.pointerType === "mouse" && evCache.splice(0, evCache.length), !eventWithinSlide(e))
      return;
    let params = swiper.params.zoom;
    if (fakeGestureTouched = !1, fakeGestureMoved = !1, evCache.push(e), !(evCache.length < 2)) {
      if (fakeGestureTouched = !0, gesture.scaleStart = getDistanceBetweenTouches(), !gesture.slideEl) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`), gesture.slideEl || (gesture.slideEl = swiper.slides[swiper.activeIndex]);
        let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
        if (imageEl && (imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), gesture.imageEl = imageEl, imageEl ? gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0] : gesture.imageWrapEl = void 0, !gesture.imageWrapEl) {
          gesture.imageEl = void 0;
          return;
        }
        gesture.maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
      }
      if (gesture.imageEl) {
        let [originX, originY] = getScaleOrigin();
        gesture.originX = originX, gesture.originY = originY, gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = !0;
    }
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e))
      return;
    let params = swiper.params.zoom, zoom = swiper.zoom, pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    pointerIndex >= 0 && (evCache[pointerIndex] = e), !(evCache.length < 2) && (fakeGestureMoved = !0, gesture.scaleMove = getDistanceBetweenTouches(), gesture.imageEl && (zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale, zoom.scale > gesture.maxRatio && (zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5), zoom.scale < params.minRatio && (zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5), gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`));
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e) || e.pointerType === "mouse" && e.type === "pointerout")
      return;
    let params = swiper.params.zoom, zoom = swiper.zoom, pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
    pointerIndex >= 0 && evCache.splice(pointerIndex, 1), !(!fakeGestureTouched || !fakeGestureMoved) && (fakeGestureTouched = !1, fakeGestureMoved = !1, gesture.imageEl && (zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio), gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`, gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`, currentScale = zoom.scale, isScaling = !1, zoom.scale > 1 && gesture.slideEl ? gesture.slideEl.classList.add(`${params.zoomedSlideClass}`) : zoom.scale <= 1 && gesture.slideEl && gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`), zoom.scale === 1 && (gesture.originX = 0, gesture.originY = 0, gesture.slideEl = void 0)));
  }
  function onTouchStart2(e) {
    let device = swiper.device;
    if (!gesture.imageEl || image.isTouched)
      return;
    device.android && e.cancelable && e.preventDefault(), image.isTouched = !0;
    let event2 = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event2.pageX, image.touchesStart.y = event2.pageY;
  }
  function onTouchMove2(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e))
      return;
    let zoom = swiper.zoom;
    if (!gesture.imageEl || !image.isTouched || !gesture.slideEl)
      return;
    image.isMoved || (image.width = gesture.imageEl.offsetWidth, image.height = gesture.imageEl.offsetHeight, image.startX = getTranslate(gesture.imageWrapEl, "x") || 0, image.startY = getTranslate(gesture.imageWrapEl, "y") || 0, gesture.slideWidth = gesture.slideEl.offsetWidth, gesture.slideHeight = gesture.slideEl.offsetHeight, gesture.imageWrapEl.style.transitionDuration = "0ms");
    let scaledWidth = image.width * zoom.scale, scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight)
      return;
    if (image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0), image.maxX = -image.minX, image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX, image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY, Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y)) > 5 && (swiper.allowClick = !1), !image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = !1;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = !1;
        return;
      }
    }
    e.cancelable && e.preventDefault(), e.stopPropagation(), image.isMoved = !0;
    let scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio), {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2), image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2), image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8), image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8), velocity.prevPositionX || (velocity.prevPositionX = image.touchesCurrent.x), velocity.prevPositionY || (velocity.prevPositionY = image.touchesCurrent.y), velocity.prevTime || (velocity.prevTime = Date.now()), velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2, velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2, Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2 && (velocity.x = 0), Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2 && (velocity.y = 0), velocity.prevPositionX = image.touchesCurrent.x, velocity.prevPositionY = image.touchesCurrent.y, velocity.prevTime = Date.now(), gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd2() {
    let zoom = swiper.zoom;
    if (!gesture.imageEl)
      return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = !1, image.isMoved = !1;
      return;
    }
    image.isTouched = !1, image.isMoved = !1;
    let momentumDurationX = 300, momentumDurationY = 300, momentumDistanceX = velocity.x * momentumDurationX, newPositionX = image.currentX + momentumDistanceX, momentumDistanceY = velocity.y * momentumDurationY, newPositionY = image.currentY + momentumDistanceY;
    velocity.x !== 0 && (momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x)), velocity.y !== 0 && (momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y));
    let momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX, image.currentY = newPositionY;
    let scaledWidth = image.width * zoom.scale, scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0), image.maxX = -image.minX, image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`, gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    let zoom = swiper.zoom;
    gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl) && (gesture.imageEl && (gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), gesture.imageWrapEl && (gesture.imageWrapEl.style.transform = "translate3d(0,0,0)"), gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`), zoom.scale = 1, currentScale = 1, gesture.slideEl = void 0, gesture.imageEl = void 0, gesture.imageWrapEl = void 0, gesture.originX = 0, gesture.originY = 0);
  }
  function zoomIn(e) {
    let zoom = swiper.zoom, params = swiper.params.zoom;
    if (!gesture.slideEl) {
      e && e.target && (gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`)), gesture.slideEl || (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0] : gesture.slideEl = swiper.slides[swiper.activeIndex]);
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      imageEl && (imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), gesture.imageEl = imageEl, imageEl ? gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0] : gesture.imageWrapEl = void 0;
    }
    if (!gesture.imageEl || !gesture.imageWrapEl)
      return;
    swiper.params.cssMode && (swiper.wrapperEl.style.overflow = "hidden", swiper.wrapperEl.style.touchAction = "none"), gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
    typeof image.touchesStart.x > "u" && e ? (touchX = e.pageX, touchY = e.pageY) : (touchX = image.touchesStart.x, touchY = image.touchesStart.y);
    let forceZoomRatio = typeof e == "number" ? e : null;
    currentScale === 1 && forceZoomRatio && (touchX = void 0, touchY = void 0), zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio, currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio, e && !(currentScale === 1 && forceZoomRatio) ? (slideWidth = gesture.slideEl.offsetWidth, slideHeight = gesture.slideEl.offsetHeight, offsetX = elementOffset(gesture.slideEl).left + window2.scrollX, offsetY = elementOffset(gesture.slideEl).top + window2.scrollY, diffX = offsetX + slideWidth / 2 - touchX, diffY = offsetY + slideHeight / 2 - touchY, imageWidth = gesture.imageEl.offsetWidth, imageHeight = gesture.imageEl.offsetHeight, scaledWidth = imageWidth * zoom.scale, scaledHeight = imageHeight * zoom.scale, translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0), translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0), translateMaxX = -translateMinX, translateMaxY = -translateMinY, translateX = diffX * zoom.scale, translateY = diffY * zoom.scale, translateX < translateMinX && (translateX = translateMinX), translateX > translateMaxX && (translateX = translateMaxX), translateY < translateMinY && (translateY = translateMinY), translateY > translateMaxY && (translateY = translateMaxY)) : (translateX = 0, translateY = 0), forceZoomRatio && zoom.scale === 1 && (gesture.originX = 0, gesture.originY = 0), gesture.imageWrapEl.style.transitionDuration = "300ms", gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`, gesture.imageEl.style.transitionDuration = "300ms", gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    let zoom = swiper.zoom, params = swiper.params.zoom;
    if (!gesture.slideEl) {
      swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0] : gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      imageEl && (imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), gesture.imageEl = imageEl, imageEl ? gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0] : gesture.imageWrapEl = void 0;
    }
    !gesture.imageEl || !gesture.imageWrapEl || (swiper.params.cssMode && (swiper.wrapperEl.style.overflow = "", swiper.wrapperEl.style.touchAction = ""), zoom.scale = 1, currentScale = 1, gesture.imageWrapEl.style.transitionDuration = "300ms", gesture.imageWrapEl.style.transform = "translate3d(0,0,0)", gesture.imageEl.style.transitionDuration = "300ms", gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)", gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`), gesture.slideEl = void 0, gesture.originX = 0, gesture.originY = 0);
  }
  function zoomToggle(e) {
    let zoom = swiper.zoom;
    zoom.scale && zoom.scale !== 1 ? zoomOut() : zoomIn(e);
  }
  function getListeners() {
    let passiveListener = swiper.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }
  function enable() {
    let zoom = swiper.zoom;
    if (zoom.enabled)
      return;
    zoom.enabled = !0;
    let {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener), swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture), ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    }), swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  function disable() {
    let zoom = swiper.zoom;
    if (!zoom.enabled)
      return;
    zoom.enabled = !1;
    let {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener), swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture), ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    }), swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
  }
  on("init", () => {
    swiper.params.zoom.enabled && enable();
  }), on("destroy", () => {
    disable();
  }), on("touchStart", (_s, e) => {
    swiper.zoom.enabled && onTouchStart2(e);
  }), on("touchEnd", (_s, e) => {
    swiper.zoom.enabled && onTouchEnd2();
  }), on("doubleTap", (_s, e) => {
    !swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle && zoomToggle(e);
  }), on("transitionEnd", () => {
    swiper.zoom.enabled && swiper.params.zoom.enabled && onTransitionEnd();
  }), on("slideChange", () => {
    swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode && onTransitionEnd();
  }), Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

// node_modules/swiper/modules/controller.mjs
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
      // or 'container'
    }
  }), swiper.controller = {
    control: void 0
  };
  function LinearSpline(x, y) {
    let binarySearch = function() {
      let maxIndex, minIndex, guess;
      return (array, val) => {
        for (minIndex = -1, maxIndex = array.length; maxIndex - minIndex > 1; )
          guess = maxIndex + minIndex >> 1, array[guess] <= val ? minIndex = guess : maxIndex = guess;
        return maxIndex;
      };
    }();
    this.x = x, this.y = y, this.lastIndex = x.length - 1;
    let i1, i3;
    return this.interpolate = function(x2) {
      return x2 ? (i3 = binarySearch(this.x, x2), i1 = i3 - 1, (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1]) : 0;
    }, this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate2(_t, byController) {
    let controlled = swiper.controller.control, multiplier, controlledTranslate, Swiper2 = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed)
        return;
      let translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      swiper.params.controller.by === "slide" && (getInterpolateFunction(c), controlledTranslate = -swiper.controller.spline.interpolate(-translate2)), (!controlledTranslate || swiper.params.controller.by === "container") && (multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate()), (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) && (multiplier = 1), controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate()), swiper.params.controller.inverse && (controlledTranslate = c.maxTranslate() - controlledTranslate), c.updateProgress(controlledTranslate), c.setTranslate(controlledTranslate, swiper), c.updateActiveIndex(), c.updateSlidesClasses();
    }
    if (Array.isArray(controlled))
      for (let i = 0; i < controlled.length; i += 1)
        controlled[i] !== byController && controlled[i] instanceof Swiper2 && setControlledTranslate(controlled[i]);
    else
      controlled instanceof Swiper2 && byController !== controlled && setControlledTranslate(controlled);
  }
  function setTransition2(duration, byController) {
    let Swiper2 = swiper.constructor, controlled = swiper.controller.control, i;
    function setControlledTransition(c) {
      c.destroyed || (c.setTransition(duration, swiper), duration !== 0 && (c.transitionStart(), c.params.autoHeight && nextTick(() => {
        c.updateAutoHeight();
      }), elementTransitionEnd(c.wrapperEl, () => {
        controlled && c.transitionEnd();
      })));
    }
    if (Array.isArray(controlled))
      for (i = 0; i < controlled.length; i += 1)
        controlled[i] !== byController && controlled[i] instanceof Swiper2 && setControlledTransition(controlled[i]);
    else
      controlled instanceof Swiper2 && byController !== controlled && setControlledTransition(controlled);
  }
  function removeSpline() {
    swiper.controller.control && swiper.controller.spline && (swiper.controller.spline = void 0, delete swiper.controller.spline);
  }
  on("beforeInit", () => {
    if (typeof window < "u" && // eslint-disable-line
    (typeof swiper.params.controller.control == "string" || swiper.params.controller.control instanceof HTMLElement)) {
      let controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper)
        swiper.controller.control = controlElement.swiper;
      else if (controlElement) {
        let onControllerSwiper = (e) => {
          swiper.controller.control = e.detail[0], swiper.update(), controlElement.removeEventListener("init", onControllerSwiper);
        };
        controlElement.addEventListener("init", onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  }), on("update", () => {
    removeSpline();
  }), on("resize", () => {
    removeSpline();
  }), on("observerUpdate", () => {
    removeSpline();
  }), on("setTranslate", (_s, translate2, byController) => {
    !swiper.controller.control || swiper.controller.control.destroyed || swiper.controller.setTranslate(translate2, byController);
  }), on("setTransition", (_s, duration, byController) => {
    !swiper.controller.control || swiper.controller.control.destroyed || swiper.controller.setTransition(duration, byController);
  }), Object.assign(swiper.controller, {
    setTranslate: setTranslate2,
    setTransition: setTransition2
  });
}

// node_modules/swiper/modules/a11y.mjs
function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  }), swiper.a11y = {
    clicked: !1
  };
  let liveRegion = null;
  function notify(message) {
    let notification = liveRegion;
    notification.length !== 0 && (notification.innerHTML = "", notification.innerHTML = message);
  }
  let makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  function getRandomNumber(size) {
    size === void 0 && (size = 16);
    let randomChar = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "0");
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("tabIndex", "-1");
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("role", role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-roledescription", description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-controls", controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-label", label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("id", id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-live", live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", !0);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el), el.forEach((subEl) => {
      subEl.setAttribute("aria-disabled", !1);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32)
      return;
    let params = swiper.params.a11y, targetEl = e.target;
    swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target)) && !e.target.matches(classesToSelector(swiper.params.pagination.bulletClass)) || (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl && (swiper.isEnd && !swiper.params.loop || swiper.slideNext(), swiper.isEnd ? notify(params.lastSlideMessage) : notify(params.nextSlideMessage)), swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl && (swiper.isBeginning && !swiper.params.loop || swiper.slidePrev(), swiper.isBeginning ? notify(params.firstSlideMessage) : notify(params.prevSlideMessage)), swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass)) && targetEl.click());
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
      return;
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    prevEl && (swiper.isBeginning ? (disableEl(prevEl), makeElNotFocusable(prevEl)) : (enableEl(prevEl), makeElFocusable(prevEl))), nextEl && (swiper.isEnd ? (disableEl(nextEl), makeElNotFocusable(nextEl)) : (enableEl(nextEl), makeElFocusable(nextEl)));
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    let params = swiper.params.a11y;
    hasPagination() && swiper.pagination.bullets.forEach((bulletEl) => {
      swiper.params.pagination.clickable && (makeElFocusable(bulletEl), swiper.params.pagination.renderBullet || (addElRole(bulletEl, "button"), addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1)))), bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass)) ? bulletEl.setAttribute("aria-current", "true") : bulletEl.removeAttribute("aria-current");
    });
  }
  let initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el), el.tagName !== "BUTTON" && (addElRole(el, "button"), el.addEventListener("keydown", onEnterOrSpaceKey)), addElLabel(el, message), addElControls(el, wrapperId);
  }, handlePointerDown = () => {
    swiper.a11y.clicked = !0;
  }, handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        swiper.destroyed || (swiper.a11y.clicked = !1);
      });
    });
  }, handleFocus = (e) => {
    if (swiper.a11y.clicked)
      return;
    let slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl))
      return;
    let isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex, isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    isActive || isVisible || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (swiper.isHorizontal() ? swiper.el.scrollLeft = 0 : swiper.el.scrollTop = 0, swiper.slideTo(swiper.slides.indexOf(slideEl), 0));
  }, initSlides = () => {
    let params = swiper.params.a11y;
    params.itemRoleDescriptionMessage && addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage), params.slideRole && addElRole(swiper.slides, params.slideRole);
    let slidesLength = swiper.slides.length;
    params.slideLabelMessage && swiper.slides.forEach((slideEl, index) => {
      let slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index, ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
      addElLabel(slideEl, ariaLabelMessage);
    });
  }, init = () => {
    let params = swiper.params.a11y;
    swiper.el.append(liveRegion);
    let containerEl = swiper.el;
    params.containerRoleDescriptionMessage && addElRoleDescription(containerEl, params.containerRoleDescriptionMessage), params.containerMessage && addElLabel(containerEl, params.containerMessage);
    let wrapperEl = swiper.wrapperEl, wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`, live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
    addElId(wrapperEl, wrapperId), addElLive(wrapperEl, live), initSlides();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl), nextEl && nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage)), prevEl && prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage)), hasClickablePagination() && (Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el]).forEach((el) => {
      el.addEventListener("keydown", onEnterOrSpaceKey);
    }), swiper.el.addEventListener("focus", handleFocus, !0), swiper.el.addEventListener("pointerdown", handlePointerDown, !0), swiper.el.addEventListener("pointerup", handlePointerUp, !0);
  };
  function destroy() {
    liveRegion && liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl), prevEl = makeElementsArray(prevEl), nextEl && nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey)), prevEl && prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey)), hasClickablePagination() && (Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el]).forEach((el) => {
      el.removeEventListener("keydown", onEnterOrSpaceKey);
    }), swiper.el.removeEventListener("focus", handleFocus, !0), swiper.el.removeEventListener("pointerdown", handlePointerDown, !0), swiper.el.removeEventListener("pointerup", handlePointerUp, !0);
  }
  on("beforeInit", () => {
    liveRegion = createElement("span", swiper.params.a11y.notificationClass), liveRegion.setAttribute("aria-live", "assertive"), liveRegion.setAttribute("aria-atomic", "true");
  }), on("afterInit", () => {
    swiper.params.a11y.enabled && init();
  }), on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    swiper.params.a11y.enabled && initSlides();
  }), on("fromEdge toEdge afterInit lock unlock", () => {
    swiper.params.a11y.enabled && updateNavigation();
  }), on("paginationUpdate", () => {
    swiper.params.a11y.enabled && updatePagination();
  }), on("destroy", () => {
    swiper.params.a11y.enabled && destroy();
  });
}

// node_modules/swiper/modules/history.mjs
function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let initialized = !1, paths = {}, slugify = (text) => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), getPathValues = (urlOverride) => {
    let window2 = getWindow(), location;
    urlOverride ? location = new URL(urlOverride) : location = window2.location;
    let pathArray = location.pathname.slice(1).split("/").filter((part) => part !== ""), total = pathArray.length, key = pathArray[total - 2], value = pathArray[total - 1];
    return {
      key,
      value
    };
  }, setHistory = (key, index) => {
    let window2 = getWindow();
    if (!initialized || !swiper.params.history.enabled)
      return;
    let location;
    swiper.params.url ? location = new URL(swiper.params.url) : location = window2.location;
    let slide2 = swiper.slides[index], value = slugify(slide2.getAttribute("data-history"));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      root[root.length - 1] === "/" && (root = root.slice(0, root.length - 1)), value = `${root}/${key ? `${key}/` : ""}${value}`;
    } else
      location.pathname.includes(key) || (value = `${key ? `${key}/` : ""}${value}`);
    swiper.params.history.keepQuery && (value += location.search);
    let currentState = window2.history.state;
    currentState && currentState.value === value || (swiper.params.history.replaceState ? window2.history.replaceState({
      value
    }, null, value) : window2.history.pushState({
      value
    }, null, value));
  }, scrollToSlide = (speed, value, runCallbacks) => {
    if (value)
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        let slide2 = swiper.slides[i];
        if (slugify(slide2.getAttribute("data-history")) === value) {
          let index = swiper.getSlideIndex(slide2);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    else
      swiper.slideTo(0, speed, runCallbacks);
  }, setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url), scrollToSlide(swiper.params.speed, paths.value, !1);
  }, init = () => {
    let window2 = getWindow();
    if (swiper.params.history) {
      if (!window2.history || !window2.history.pushState) {
        swiper.params.history.enabled = !1, swiper.params.hashNavigation.enabled = !0;
        return;
      }
      if (initialized = !0, paths = getPathValues(swiper.params.url), !paths.key && !paths.value) {
        swiper.params.history.replaceState || window2.addEventListener("popstate", setHistoryPopState);
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit), swiper.params.history.replaceState || window2.addEventListener("popstate", setHistoryPopState);
    }
  }, destroy = () => {
    let window2 = getWindow();
    swiper.params.history.replaceState || window2.removeEventListener("popstate", setHistoryPopState);
  };
  on("init", () => {
    swiper.params.history.enabled && init();
  }), on("destroy", () => {
    swiper.params.history.enabled && destroy();
  }), on("transitionEnd _freeModeNoMomentumRelease", () => {
    initialized && setHistory(swiper.params.history.key, swiper.activeIndex);
  }), on("slideChange", () => {
    initialized && swiper.params.cssMode && setHistory(swiper.params.history.key, swiper.activeIndex);
  });
}

// node_modules/swiper/modules/hash-navigation.mjs
function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref, initialized = !1, document2 = getDocument(), window2 = getWindow();
  extendParams({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          let slideWithHash = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-hash") === hash)[0];
          return slideWithHash ? parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10) : 0;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  let onHashChange = () => {
    emit("hashChange");
    let newHash = document2.location.hash.replace("#", ""), activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex], activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
    if (newHash !== activeSlideHash) {
      let newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex > "u" || Number.isNaN(newIndex))
        return;
      swiper.slideTo(newIndex);
    }
  }, setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled)
      return;
    let activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex], activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
    swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState ? (window2.history.replaceState(null, null, `#${activeSlideHash}` || ""), emit("hashSet")) : (document2.location.hash = activeSlideHash || "", emit("hashSet"));
  }, init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled)
      return;
    initialized = !0;
    let hash = document2.location.hash.replace("#", "");
    if (hash) {
      let index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, 0, swiper.params.runCallbacksOnInit, !0);
    }
    swiper.params.hashNavigation.watchState && window2.addEventListener("hashchange", onHashChange);
  }, destroy = () => {
    swiper.params.hashNavigation.watchState && window2.removeEventListener("hashchange", onHashChange);
  };
  on("init", () => {
    swiper.params.hashNavigation.enabled && init();
  }), on("destroy", () => {
    swiper.params.hashNavigation.enabled && destroy();
  }), on("transitionEnd _freeModeNoMomentumRelease", () => {
    initialized && setHash();
  }), on("slideChange", () => {
    initialized && swiper.params.cssMode && setHash();
  });
}

// node_modules/swiper/modules/autoplay.mjs
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, extendParams({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let timeout, raf, autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3, autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3, autoplayTimeLeft, autoplayStartTime = (/* @__PURE__ */ new Date()).getTime, wasPaused, isTouched, pausedByTouch, touchStartTimeout, slideChanged, pausedByInteraction;
  function onTransitionEnd(e) {
    !swiper || swiper.destroyed || !swiper.wrapperEl || e.target === swiper.wrapperEl && (swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd), resume());
  }
  let calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    swiper.autoplay.paused ? wasPaused = !0 : wasPaused && (autoplayDelayCurrent = autoplayTimeLeft, wasPaused = !1);
    let timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft, emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal), raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  }, getSlideDelay = () => {
    let activeSlideEl;
    return swiper.virtual && swiper.params.virtual.enabled ? activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0] : activeSlideEl = swiper.slides[swiper.activeIndex], activeSlideEl ? parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    cancelAnimationFrame(raf), calcTimeLeft();
    let delay = typeof delayForce > "u" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay, autoplayDelayCurrent = swiper.params.autoplay.delay;
    let currentSlideDelay = getSlideDelay();
    !Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce > "u" && (delay = currentSlideDelay, autoplayDelayTotal = currentSlideDelay, autoplayDelayCurrent = currentSlideDelay), autoplayTimeLeft = delay;
    let speed = swiper.params.speed, proceed = () => {
      !swiper || swiper.destroyed || (swiper.params.autoplay.reverseDirection ? !swiper.isBeginning || swiper.params.loop || swiper.params.rewind ? (swiper.slidePrev(speed, !0, !0), emit("autoplay")) : swiper.params.autoplay.stopOnLastSlide || (swiper.slideTo(swiper.slides.length - 1, speed, !0, !0), emit("autoplay")) : !swiper.isEnd || swiper.params.loop || swiper.params.rewind ? (swiper.slideNext(speed, !0, !0), emit("autoplay")) : swiper.params.autoplay.stopOnLastSlide || (swiper.slideTo(0, speed, !0, !0), emit("autoplay")), swiper.params.cssMode && (autoplayStartTime = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        run();
      })));
    };
    return delay > 0 ? (clearTimeout(timeout), timeout = setTimeout(() => {
      proceed();
    }, delay)) : requestAnimationFrame(() => {
      proceed();
    }), delay;
  }, start = () => {
    swiper.autoplay.running = !0, run(), emit("autoplayStart");
  }, stop = () => {
    swiper.autoplay.running = !1, clearTimeout(timeout), cancelAnimationFrame(raf), emit("autoplayStop");
  }, pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    clearTimeout(timeout), internal || (pausedByInteraction = !0);
    let proceed = () => {
      emit("autoplayPause"), swiper.params.autoplay.waitForTransition ? swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd) : resume();
    };
    if (swiper.autoplay.paused = !0, reset) {
      slideChanged && (autoplayTimeLeft = swiper.params.autoplay.delay), slideChanged = !1, proceed();
      return;
    }
    autoplayTimeLeft = (autoplayTimeLeft || swiper.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime), !(swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) && (autoplayTimeLeft < 0 && (autoplayTimeLeft = 0), proceed());
  }, resume = () => {
    swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running || (autoplayStartTime = (/* @__PURE__ */ new Date()).getTime(), pausedByInteraction ? (pausedByInteraction = !1, run(autoplayTimeLeft)) : run(), swiper.autoplay.paused = !1, emit("autoplayResume"));
  }, onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    let document2 = getDocument();
    document2.visibilityState === "hidden" && (pausedByInteraction = !0, pause(!0)), document2.visibilityState === "visible" && resume();
  }, onPointerEnter = (e) => {
    e.pointerType === "mouse" && (pausedByInteraction = !0, !(swiper.animating || swiper.autoplay.paused) && pause(!0));
  }, onPointerLeave = (e) => {
    e.pointerType === "mouse" && swiper.autoplay.paused && resume();
  }, attachMouseEvents = () => {
    swiper.params.autoplay.pauseOnMouseEnter && (swiper.el.addEventListener("pointerenter", onPointerEnter), swiper.el.addEventListener("pointerleave", onPointerLeave));
  }, detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter), swiper.el.removeEventListener("pointerleave", onPointerLeave);
  }, attachDocumentEvents = () => {
    getDocument().addEventListener("visibilitychange", onVisibilityChange);
  }, detachDocumentEvents = () => {
    getDocument().removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    swiper.params.autoplay.enabled && (attachMouseEvents(), attachDocumentEvents(), autoplayStartTime = (/* @__PURE__ */ new Date()).getTime(), start());
  }), on("destroy", () => {
    detachMouseEvents(), detachDocumentEvents(), swiper.autoplay.running && stop();
  }), on("beforeTransitionStart", (_s, speed, internal) => {
    swiper.destroyed || !swiper.autoplay.running || (internal || !swiper.params.autoplay.disableOnInteraction ? pause(!0, !0) : stop());
  }), on("sliderFirstMove", () => {
    if (!(swiper.destroyed || !swiper.autoplay.running)) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = !0, pausedByTouch = !1, pausedByInteraction = !1, touchStartTimeout = setTimeout(() => {
        pausedByInteraction = !0, pausedByTouch = !0, pause(!0);
      }, 200);
    }
  }), on("touchEnd", () => {
    if (!(swiper.destroyed || !swiper.autoplay.running || !isTouched)) {
      if (clearTimeout(touchStartTimeout), clearTimeout(timeout), swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = !1, isTouched = !1;
        return;
      }
      pausedByTouch && swiper.params.cssMode && resume(), pausedByTouch = !1, isTouched = !1;
    }
  }), on("slideChange", () => {
    swiper.destroyed || !swiper.autoplay.running || (slideChanged = !0);
  }), Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

// node_modules/swiper/modules/thumbs.mjs
function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = !1, swiperCreated = !1;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    let thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    let clickedIndex = thumbsSwiper.clickedIndex, clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass) || typeof clickedIndex > "u" || clickedIndex === null)
      return;
    let slideToIndex;
    thumbsSwiper.params.loop ? slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : slideToIndex = clickedIndex, swiper.params.loop ? swiper.slideToLoop(slideToIndex) : swiper.slideTo(slideToIndex);
  }
  function init() {
    let {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized)
      return !1;
    initialized = !0;
    let SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass)
      swiper.thumbs.swiper = thumbsParams.swiper, Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), swiper.thumbs.swiper.update();
    else if (isObject2(thumbsParams.swiper)) {
      let thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams), swiperCreated = !0;
    }
    return swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass), swiper.thumbs.swiper.on("tap", onThumbClick), !0;
  }
  function update2(initial) {
    let thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    let slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView, thumbsToActivate = 1, thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides && (thumbsToActivate = swiper.params.slidesPerView), swiper.params.thumbs.multipleActiveThumbs || (thumbsToActivate = 1), thumbsToActivate = Math.floor(thumbsToActivate), thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass)), thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
      for (let i = 0; i < thumbsToActivate; i += 1)
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
    else
      for (let i = 0; i < thumbsToActivate; i += 1)
        thumbsSwiper.slides[swiper.realIndex + i] && thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
    let autoScrollOffset = swiper.params.thumbs.autoScrollOffset, useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex, newThumbsIndex, direction;
      if (thumbsSwiper.params.loop) {
        let newThumbsSlide = thumbsSwiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide), direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else
        newThumbsIndex = swiper.realIndex, direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      useOffset && (newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset), thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0 && (thumbsSwiper.params.centeredSlides ? newThumbsIndex > currentThumbsIndex ? newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1 : newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1 : newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup, thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0));
    }
  }
  on("beforeInit", () => {
    let {
      thumbs
    } = swiper.params;
    if (!(!thumbs || !thumbs.swiper))
      if (typeof thumbs.swiper == "string" || thumbs.swiper instanceof HTMLElement) {
        let document2 = getDocument(), getThumbsElementAndInit = () => {
          let thumbsElement = typeof thumbs.swiper == "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper)
            thumbs.swiper = thumbsElement.swiper, init(), update2(!0);
          else if (thumbsElement) {
            let onThumbsSwiper = (e) => {
              thumbs.swiper = e.detail[0], thumbsElement.removeEventListener("init", onThumbsSwiper), init(), update2(!0), thumbs.swiper.update(), swiper.update();
            };
            thumbsElement.addEventListener("init", onThumbsSwiper);
          }
          return thumbsElement;
        }, watchForThumbsToAppear = () => {
          if (swiper.destroyed)
            return;
          getThumbsElementAndInit() || requestAnimationFrame(watchForThumbsToAppear);
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else
        init(), update2(!0);
  }), on("slideChange update resize observerUpdate", () => {
    update2();
  }), on("setTransition", (_s, duration) => {
    let thumbsSwiper = swiper.thumbs.swiper;
    !thumbsSwiper || thumbsSwiper.destroyed || thumbsSwiper.setTransition(duration);
  }), on("beforeDestroy", () => {
    let thumbsSwiper = swiper.thumbs.swiper;
    !thumbsSwiper || thumbsSwiper.destroyed || swiperCreated && thumbsSwiper.destroy();
  }), Object.assign(swiper.thumbs, {
    init,
    update: update2
  });
}

// node_modules/swiper/modules/free-mode.mjs
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart2() {
    if (swiper.params.cssMode)
      return;
    let translate2 = swiper.getTranslate();
    swiper.setTranslate(translate2), swiper.setTransition(0), swiper.touchEventsData.velocities.length = 0, swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove2() {
    if (swiper.params.cssMode)
      return;
    let {
      touchEventsData: data2,
      touches
    } = swiper;
    data2.velocities.length === 0 && data2.velocities.push({
      position: touches[swiper.isHorizontal() ? "startX" : "startY"],
      time: data2.touchStartTime
    }), data2.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd2(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode)
      return;
    let {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data2
    } = swiper, timeDiff = now() - data2.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      swiper.slides.length < snapGrid.length ? swiper.slideTo(snapGrid.length - 1) : swiper.slideTo(swiper.slides.length - 1);
      return;
    }
    if (params.freeMode.momentum) {
      if (data2.velocities.length > 1) {
        let lastMoveEvent = data2.velocities.pop(), velocityEvent = data2.velocities.pop(), distance = lastMoveEvent.position - velocityEvent.position, time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time, swiper.velocity /= 2, Math.abs(swiper.velocity) < params.freeMode.minimumVelocity && (swiper.velocity = 0), (time > 150 || now() - lastMoveEvent.time > 300) && (swiper.velocity = 0);
      } else
        swiper.velocity = 0;
      swiper.velocity *= params.freeMode.momentumVelocityRatio, data2.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio, momentumDistance = swiper.velocity * momentumDuration, newPosition = swiper.translate + momentumDistance;
      rtl && (newPosition = -newPosition);
      let doBounce = !1, afterBouncePosition, bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio, needsLoopFix;
      if (newPosition < swiper.maxTranslate())
        params.freeMode.momentumBounce ? (newPosition + swiper.maxTranslate() < -bounceAmount && (newPosition = swiper.maxTranslate() - bounceAmount), afterBouncePosition = swiper.maxTranslate(), doBounce = !0, data2.allowMomentumBounce = !0) : newPosition = swiper.maxTranslate(), params.loop && params.centeredSlides && (needsLoopFix = !0);
      else if (newPosition > swiper.minTranslate())
        params.freeMode.momentumBounce ? (newPosition - swiper.minTranslate() > bounceAmount && (newPosition = swiper.minTranslate() + bounceAmount), afterBouncePosition = swiper.minTranslate(), doBounce = !0, data2.allowMomentumBounce = !0) : newPosition = swiper.minTranslate(), params.loop && params.centeredSlides && (needsLoopFix = !0);
      else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1)
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next" ? newPosition = snapGrid[nextSlide] : newPosition = snapGrid[nextSlide - 1], newPosition = -newPosition;
      }
      if (needsLoopFix && once("transitionEnd", () => {
        swiper.loopFix();
      }), swiper.velocity !== 0) {
        if (rtl ? momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity) : momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity), params.freeMode.sticky) {
          let moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate), currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          moveDistance < currentSlideSize ? momentumDuration = params.speed : moveDistance < 2 * currentSlideSize ? momentumDuration = params.speed * 1.5 : momentumDuration = params.speed * 2.5;
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      params.freeMode.momentumBounce && doBounce ? (swiper.updateProgress(afterBouncePosition), swiper.setTransition(momentumDuration), swiper.setTranslate(newPosition), swiper.transitionStart(!0, swiper.swipeDirection), swiper.animating = !0, elementTransitionEnd(wrapperEl, () => {
        !swiper || swiper.destroyed || !data2.allowMomentumBounce || (emit("momentumBounce"), swiper.setTransition(params.speed), setTimeout(() => {
          swiper.setTranslate(afterBouncePosition), elementTransitionEnd(wrapperEl, () => {
            !swiper || swiper.destroyed || swiper.transitionEnd();
          });
        }, 0));
      })) : swiper.velocity ? (emit("_freeModeNoMomentumRelease"), swiper.updateProgress(newPosition), swiper.setTransition(momentumDuration), swiper.setTranslate(newPosition), swiper.transitionStart(!0, swiper.swipeDirection), swiper.animating || (swiper.animating = !0, elementTransitionEnd(wrapperEl, () => {
        !swiper || swiper.destroyed || swiper.transitionEnd();
      }))) : swiper.updateProgress(newPosition), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else
      params.freeMode && emit("_freeModeNoMomentumRelease");
    (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) && (swiper.updateProgress(), swiper.updateActiveIndex(), swiper.updateSlidesClasses());
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart: onTouchStart2,
      onTouchMove: onTouchMove2,
      onTouchEnd: onTouchEnd2
    }
  });
}

// node_modules/swiper/modules/grid.mjs
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let slidesNumberEvenToRows, slidesPerRow, numFullColumns, wasMultiRow, getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    return typeof spaceBetween == "string" && spaceBetween.indexOf("%") >= 0 ? spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size : typeof spaceBetween == "string" && (spaceBetween = parseFloat(spaceBetween)), spaceBetween;
  }, initSlides = (slidesLength) => {
    let {
      slidesPerView
    } = swiper.params, {
      rows,
      fill
    } = swiper.params.grid;
    numFullColumns = Math.floor(slidesLength / rows), Math.floor(slidesLength / rows) === slidesLength / rows ? slidesNumberEvenToRows = slidesLength : slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows, slidesPerView !== "auto" && fill === "row" && (slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows)), slidesPerRow = slidesNumberEvenToRows / rows;
  }, updateSlide = (i, slide2, slidesLength, getDirectionLabel) => {
    let {
      slidesPerGroup
    } = swiper.params, spaceBetween = getSpaceBetween(), {
      rows,
      fill
    } = swiper.params.grid, newSlideOrderIndex, column, row;
    if (fill === "row" && slidesPerGroup > 1) {
      let groupIndex = Math.floor(i / (slidesPerGroup * rows)), slideIndexInGroup = i - rows * slidesPerGroup * groupIndex, columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup), column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup, newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows, slide2.style.order = newSlideOrderIndex;
    } else
      fill === "column" ? (column = Math.floor(i / rows), row = i - column * rows, (column > numFullColumns || column === numFullColumns && row === rows - 1) && (row += 1, row >= rows && (row = 0, column += 1))) : (row = Math.floor(i / slidesPerRow), column = i - row * slidesPerRow);
    slide2.row = row, slide2.column = column, slide2.style[getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
  }, updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    let {
      centeredSlides,
      roundLengths
    } = swiper.params, spaceBetween = getSpaceBetween(), {
      rows
    } = swiper.params.grid;
    if (swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows, swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween, swiper.wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`, centeredSlides) {
      let newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        roundLengths && (slidesGridItem = Math.floor(slidesGridItem)), snapGrid[i] < swiper.virtualSize + snapGrid[0] && newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length), snapGrid.push(...newSlidesGrid);
    }
  }, onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  }, onUpdate = () => {
    let {
      params,
      el
    } = swiper, isMultiRow = params.grid && params.grid.rows > 1;
    wasMultiRow && !isMultiRow ? (el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`), numFullColumns = 1, swiper.emitContainerClasses()) : !wasMultiRow && isMultiRow && (el.classList.add(`${params.containerModifierClass}grid`), params.grid.fill === "column" && el.classList.add(`${params.containerModifierClass}grid-column`), swiper.emitContainerClasses()), wasMultiRow = isMultiRow;
  };
  on("init", onInit), on("update", onUpdate), swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

// node_modules/swiper/modules/manipulation.mjs
function appendSlide(slides) {
  let swiper = this, {
    params,
    slidesEl
  } = swiper;
  params.loop && swiper.loopDestroy();
  let appendElement = (slideEl) => {
    if (typeof slideEl == "string") {
      let tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl, slidesEl.append(tempDOM.children[0]), tempDOM.innerHTML = "";
    } else
      slidesEl.append(slideEl);
  };
  if (typeof slides == "object" && "length" in slides)
    for (let i = 0; i < slides.length; i += 1)
      slides[i] && appendElement(slides[i]);
  else
    appendElement(slides);
  swiper.recalcSlides(), params.loop && swiper.loopCreate(), (!params.observer || swiper.isElement) && swiper.update();
}
function prependSlide(slides) {
  let swiper = this, {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  params.loop && swiper.loopDestroy();
  let newActiveIndex = activeIndex + 1, prependElement = (slideEl) => {
    if (typeof slideEl == "string") {
      let tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl, slidesEl.prepend(tempDOM.children[0]), tempDOM.innerHTML = "";
    } else
      slidesEl.prepend(slideEl);
  };
  if (typeof slides == "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1)
      slides[i] && prependElement(slides[i]);
    newActiveIndex = activeIndex + slides.length;
  } else
    prependElement(slides);
  swiper.recalcSlides(), params.loop && swiper.loopCreate(), (!params.observer || swiper.isElement) && swiper.update(), swiper.slideTo(newActiveIndex, 0, !1);
}
function addSlide(index, slides) {
  let swiper = this, {
    params,
    activeIndex,
    slidesEl
  } = swiper, activeIndexBuffer = activeIndex;
  params.loop && (activeIndexBuffer -= swiper.loopedSlides, swiper.loopDestroy(), swiper.recalcSlides());
  let baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer, slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    let currentSlide = swiper.slides[i];
    currentSlide.remove(), slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides == "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1)
      slides[i] && slidesEl.append(slides[i]);
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else
    slidesEl.append(slides);
  for (let i = 0; i < slidesBuffer.length; i += 1)
    slidesEl.append(slidesBuffer[i]);
  swiper.recalcSlides(), params.loop && swiper.loopCreate(), (!params.observer || swiper.isElement) && swiper.update(), params.loop ? swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, !1) : swiper.slideTo(newActiveIndex, 0, !1);
}
function removeSlide(slidesIndexes) {
  let swiper = this, {
    params,
    activeIndex
  } = swiper, activeIndexBuffer = activeIndex;
  params.loop && (activeIndexBuffer -= swiper.loopedSlides, swiper.loopDestroy());
  let newActiveIndex = activeIndexBuffer, indexToRemove;
  if (typeof slidesIndexes == "object" && "length" in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1)
      indexToRemove = slidesIndexes[i], swiper.slides[indexToRemove] && swiper.slides[indexToRemove].remove(), indexToRemove < newActiveIndex && (newActiveIndex -= 1);
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else
    indexToRemove = slidesIndexes, swiper.slides[indexToRemove] && swiper.slides[indexToRemove].remove(), indexToRemove < newActiveIndex && (newActiveIndex -= 1), newActiveIndex = Math.max(newActiveIndex, 0);
  swiper.recalcSlides(), params.loop && swiper.loopCreate(), (!params.observer || swiper.isElement) && swiper.update(), params.loop ? swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, !1) : swiper.slideTo(newActiveIndex, 0, !1);
}
function removeAllSlides() {
  let swiper = this, slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1)
    slidesIndexes.push(i);
  swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  let {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect)
      return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`), perspective && perspective() && swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    let overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult), Object.assign(swiper.originalParams, overwriteParamsResult);
  }), on("setTranslate", () => {
    swiper.params.effect === effect && setTranslate2();
  }), on("setTransition", (_s, duration) => {
    swiper.params.effect === effect && setTransition2(duration);
  }), on("transitionEnd", () => {
    if (swiper.params.effect === effect && recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows)
        return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      }), recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    swiper.params.effect === effect && (swiper.slides.length || (requireUpdateOnVirtual = !0), requestAnimationFrame(() => {
      requireUpdateOnVirtual && swiper.slides && swiper.slides.length && (setTranslate2(), requireUpdateOnVirtual = !1);
    }));
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  let transformEl = getSlideTransformEl(slideEl);
  return transformEl !== slideEl && (transformEl.style.backfaceVisibility = "hidden", transformEl.style["-webkit-backface-visibility"] = "hidden"), transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref, {
    activeIndex
  } = swiper, getSlide = (el) => el.parentElement ? el.parentElement : swiper.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = !1, transitionEndTarget;
    allSlides ? transitionEndTarget = transformElements : transitionEndTarget = transformElements.filter((transformEl) => {
      let el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
      return swiper.getSlideIndex(el) === activeIndex;
    }), transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered || !swiper || swiper.destroyed)
          return;
        eventTriggered = !0, swiper.animating = !1;
        let evt = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/modules/effect-fade.mjs
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: !1
    }
  }), effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: () => {
      let {
        slides
      } = swiper, params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        let slideEl = swiper.slides[i], tx = -slideEl.swiperSlideOffset;
        swiper.params.virtualTranslate || (tx -= swiper.translate);
        let ty = 0;
        swiper.isHorizontal() || (ty = tx, tx = 0);
        let slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0), targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity, targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    },
    setTransition: (duration) => {
      let transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      }), effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: !0
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cube.mjs
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  let createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top"), shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    shadowBefore || (shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" ")), slideEl.append(shadowBefore)), shadowAfter || (shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" ")), slideEl.append(shadowAfter)), shadowBefore && (shadowBefore.style.opacity = Math.max(-progress, 0)), shadowAfter && (shadowAfter.style.opacity = Math.max(progress, 0));
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate: () => {
      let {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser2
      } = swiper, params = swiper.params.cubeEffect, isHorizontal = swiper.isHorizontal(), isVirtual = swiper.virtual && swiper.params.virtual.enabled, wrapperRotate = 0, cubeShadowEl;
      params.shadow && (isHorizontal ? (cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow"), cubeShadowEl || (cubeShadowEl = createElement("div", "swiper-cube-shadow"), swiper.wrapperEl.append(cubeShadowEl)), cubeShadowEl.style.height = `${swiperWidth}px`) : (cubeShadowEl = el.querySelector(".swiper-cube-shadow"), cubeShadowEl || (cubeShadowEl = createElement("div", "swiper-cube-shadow"), el.append(cubeShadowEl))));
      for (let i = 0; i < slides.length; i += 1) {
        let slideEl = slides[i], slideIndex = i;
        isVirtual && (slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10));
        let slideAngle = slideIndex * 90, round = Math.floor(slideAngle / 360);
        rtl && (slideAngle = -slideAngle, round = Math.floor(-slideAngle / 360));
        let progress = Math.max(Math.min(slideEl.progress, 1), -1), tx = 0, ty = 0, tz = 0;
        slideIndex % 4 === 0 ? (tx = -round * 4 * swiperSize, tz = 0) : (slideIndex - 1) % 4 === 0 ? (tx = 0, tz = -round * 4 * swiperSize) : (slideIndex - 2) % 4 === 0 ? (tx = swiperSize + round * 4 * swiperSize, tz = swiperSize) : (slideIndex - 3) % 4 === 0 && (tx = -swiperSize, tz = 3 * swiperSize + swiperSize * 4 * round), rtl && (tx = -tx), isHorizontal || (ty = tx, tx = 0);
        let transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        progress <= 1 && progress > -1 && (wrapperRotate = slideIndex * 90 + progress * 90, rtl && (wrapperRotate = -slideIndex * 90 - progress * 90)), slideEl.style.transform = transform, params.slideShadows && createSlideShadows(slideEl, progress, isHorizontal);
      }
      if (wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`, wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`, params.shadow)
        if (isHorizontal)
          cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
        else {
          let shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90, multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2), scale1 = params.shadowScale, scale2 = params.shadowScale / multiplier, offset = params.shadowOffset;
          cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
        }
      let zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`, wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    },
    setTransition: (duration) => {
      let {
        el,
        slides
      } = swiper;
      if (slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = `${duration}ms`, slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
          subEl.style.transitionDuration = `${duration}ms`;
        });
      }), swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        let shadowEl = el.querySelector(".swiper-cube-shadow");
        shadowEl && (shadowEl.style.transitionDuration = `${duration}ms`);
      }
    },
    recreateShadows: () => {
      let isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach((slideEl) => {
        let progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    },
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  });
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  let shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`, shadowContainer = getSlideTransformEl(slideEl), shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  return shadowEl || (shadowEl = createElement("div", shadowClass.split(" ")), shadowContainer.append(shadowEl)), shadowEl;
}

// node_modules/swiper/modules/effect-flip.mjs
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  let createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top"), shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    shadowBefore || (shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top")), shadowAfter || (shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom")), shadowBefore && (shadowBefore.style.opacity = Math.max(-progress, 0)), shadowAfter && (shadowAfter.style.opacity = Math.max(progress, 0));
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate: () => {
      let {
        slides,
        rtlTranslate: rtl
      } = swiper, params = swiper.params.flipEffect;
      for (let i = 0; i < slides.length; i += 1) {
        let slideEl = slides[i], progress = slideEl.progress;
        swiper.params.flipEffect.limitRotation && (progress = Math.max(Math.min(slideEl.progress, 1), -1));
        let offset = slideEl.swiperSlideOffset, rotateY = -180 * progress, rotateX = 0, tx = swiper.params.cssMode ? -offset - swiper.translate : -offset, ty = 0;
        swiper.isHorizontal() ? rtl && (rotateY = -rotateY) : (ty = tx, tx = 0, rotateX = -rotateY, rotateY = 0), slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length, params.slideShadows && createSlideShadows(slideEl, progress);
        let transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    },
    setTransition: (duration) => {
      let transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`, el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      }), effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    },
    recreateShadows: () => {
      swiper.params.flipEffect, swiper.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        swiper.params.flipEffect.limitRotation && (progress = Math.max(Math.min(slideEl.progress, 1), -1)), createSlideShadows(slideEl, progress);
      });
    },
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-coverflow.mjs
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  }), effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate: () => {
      let {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper, params = swiper.params.coverflowEffect, isHorizontal = swiper.isHorizontal(), transform = swiper.translate, center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2, rotate = isHorizontal ? params.rotate : -params.rotate, translate2 = params.depth;
      for (let i = 0, length = slides.length; i < length; i += 1) {
        let slideEl = slides[i], slideSize = slidesSizesGrid[i], slideOffset = slideEl.swiperSlideOffset, centerOffset = (center - slideOffset - slideSize / 2) / slideSize, offsetMultiplier = typeof params.modifier == "function" ? params.modifier(centerOffset) : centerOffset * params.modifier, rotateY = isHorizontal ? rotate * offsetMultiplier : 0, rotateX = isHorizontal ? 0 : rotate * offsetMultiplier, translateZ = -translate2 * Math.abs(offsetMultiplier), stretch = params.stretch;
        typeof stretch == "string" && stretch.indexOf("%") !== -1 && (stretch = parseFloat(params.stretch) / 100 * slideSize);
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier, translateX = isHorizontal ? stretch * offsetMultiplier : 0, scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        Math.abs(translateX) < 1e-3 && (translateX = 0), Math.abs(translateY) < 1e-3 && (translateY = 0), Math.abs(translateZ) < 1e-3 && (translateZ = 0), Math.abs(rotateY) < 1e-3 && (rotateY = 0), Math.abs(rotateX) < 1e-3 && (rotateX = 0), Math.abs(scale) < 1e-3 && (scale = 0);
        let slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`, targetEl = effectTarget(params, slideEl);
        if (targetEl.style.transform = slideTransform, slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1, params.slideShadows) {
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top"), shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
          shadowBeforeEl || (shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top")), shadowAfterEl || (shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom")), shadowBeforeEl && (shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0), shadowAfterEl && (shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0);
        }
      }
    },
    setTransition: (duration) => {
      swiper.slides.map((slideEl) => getSlideTransformEl(slideEl)).forEach((el) => {
        el.style.transitionDuration = `${duration}ms`, el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}

// node_modules/swiper/modules/effect-creative.mjs
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  let getTranslateValue = (value) => typeof value == "string" ? value : `${value}px`;
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate: () => {
      let {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper, params = swiper.params.creativeEffect, {
        progressMultiplier: multiplier
      } = params, isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        let margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
      }
      for (let i = 0; i < slides.length; i += 1) {
        let slideEl = slides[i], slideProgress = slideEl.progress, progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress), originalProgress = progress;
        isCenteredSlides || (originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress));
        let offset = slideEl.swiperSlideOffset, t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0], r = [0, 0, 0], custom = !1;
        swiper.isHorizontal() || (t[1] = t[0], t[0] = 0);
        let data2 = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        progress < 0 ? (data2 = params.next, custom = !0) : progress > 0 && (data2 = params.prev, custom = !0), t.forEach((value, index) => {
          t[index] = `calc(${value}px + (${getTranslateValue(data2.translate[index])} * ${Math.abs(progress * multiplier)}))`;
        }), r.forEach((value, index) => {
          r[index] = data2.rotate[index] * Math.abs(progress * multiplier);
        }), slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        let translateString = t.join(", "), rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`, scaleString = originalProgress < 0 ? `scale(${1 + (1 - data2.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data2.scale) * originalProgress * multiplier})`, opacityString = originalProgress < 0 ? 1 + (1 - data2.opacity) * originalProgress * multiplier : 1 - (1 - data2.opacity) * originalProgress * multiplier, transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
        if (custom && data2.shadow || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data2.shadow && (shadowEl = createShadow("creative", slideEl)), shadowEl) {
            let shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        let targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform, targetEl.style.opacity = opacityString, data2.origin && (targetEl.style.transformOrigin = data2.origin);
      }
    },
    setTransition: (duration) => {
      let transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`, el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      }), effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: !0
      });
    },
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  }), effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate: () => {
      let {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper, params = swiper.params.cardsEffect, {
        startTranslate,
        isTouched
      } = swiper.touchEventsData, currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        let slideEl = slides[i], slideProgress = slideEl.progress, progress = Math.min(Math.max(slideProgress, -4), 4), offset = slideEl.swiperSlideOffset;
        swiper.params.centeredSlides && !swiper.params.cssMode && (swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`), swiper.params.centeredSlides && swiper.params.cssMode && (offset -= slides[0].swiperSlideOffset);
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset, tY = 0, tZ = -100 * Math.abs(progress), scale = 1, rotate = -params.perSlideRotate * progress, tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75, slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i, isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate, isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          let subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
          rotate += -28 * progress * subProgress, scale += -0.5 * subProgress, tXAdd += 96 * subProgress, tY = `${-25 * subProgress * Math.abs(progress)}%`;
        }
        if (progress < 0 ? tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))` : progress > 0 ? tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))` : tX = `${tX}px`, !swiper.isHorizontal()) {
          let prevY = tY;
          tY = tX, tX = prevY;
        }
        let scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`, transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
        if (params.slideShadows) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          shadowEl || (shadowEl = createShadow("cards", slideEl)), shadowEl && (shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1));
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        let targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    },
    setTransition: (duration) => {
      let transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`, el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = `${duration}ms`;
        });
      }), effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/swiper-bundle.mjs
var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
Swiper.use(modules);

// node_modules/swiper/shared/update-swiper.mjs
var paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function isObject3(o) {
  return typeof o == "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
}
function extend3(target, src) {
  let noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    typeof target[key] > "u" ? target[key] = src[key] : isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0 ? src[key].__swiper__ ? target[key] = src[key] : extend3(target[key], src[key]) : target[key] = src[key];
  });
}
function needsNavigation(params) {
  return params === void 0 && (params = {}), params.navigation && typeof params.navigation.nextEl > "u" && typeof params.navigation.prevEl > "u";
}
function needsPagination(params) {
  return params === void 0 && (params = {}), params.pagination && typeof params.pagination.el > "u";
}
function needsScrollbar(params) {
  return params === void 0 && (params = {}), params.scrollbar && typeof params.scrollbar.el > "u";
}
function attrToProp(attrName) {
  return attrName === void 0 && (attrName = ""), attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace("-", ""));
}
function updateSwiper(_ref) {
  let {
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  } = _ref, updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass"), {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper, needThumbsInit, needControllerInit, needPaginationInit, needScrollbarInit, needNavigationInit, loopNeedDestroy, loopNeedEnable, loopNeedReloop;
  changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper && (needThumbsInit = !0), changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control && (needControllerInit = !0), changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === !1) && pagination && !pagination.el && (needPaginationInit = !0), changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === !1) && scrollbar && !scrollbar.el && (needScrollbarInit = !0), changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === !1) && navigation && !navigation.prevEl && !navigation.nextEl && (needNavigationInit = !0);
  let destroyModule = (mod) => {
    swiper[mod] && (swiper[mod].destroy(), mod === "navigation" ? (swiper.isElement && (swiper[mod].prevEl.remove(), swiper[mod].nextEl.remove()), currentParams[mod].prevEl = void 0, currentParams[mod].nextEl = void 0, swiper[mod].prevEl = void 0, swiper[mod].nextEl = void 0) : (swiper.isElement && swiper[mod].el.remove(), currentParams[mod].el = void 0, swiper[mod].el = void 0));
  };
  changedParams.includes("loop") && swiper.isElement && (currentParams.loop && !passedParams.loop ? loopNeedDestroy = !0 : !currentParams.loop && passedParams.loop ? loopNeedEnable = !0 : loopNeedReloop = !0), updateParams.forEach((key) => {
    if (isObject3(currentParams[key]) && isObject3(passedParams[key]))
      extend3(currentParams[key], passedParams[key]), (key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled && destroyModule(key);
    else {
      let newValue = passedParams[key];
      (newValue === !0 || newValue === !1) && (key === "navigation" || key === "pagination" || key === "scrollbar") ? newValue === !1 && destroyModule(key) : currentParams[key] = passedParams[key];
    }
  }), updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control && (swiper.controller.control = currentParams.controller.control), changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled && (virtual.slides = slides, virtual.update(!0)), changedParams.includes("children") && slides && currentParams.loop && (loopNeedReloop = !0), needThumbsInit && thumbs.init() && thumbs.update(!0), needControllerInit && (swiper.controller.control = currentParams.controller.control), needPaginationInit && (swiper.isElement && (!paginationEl || typeof paginationEl == "string") && (paginationEl = document.createElement("div"), paginationEl.classList.add("swiper-pagination"), paginationEl.part.add("pagination"), swiper.el.appendChild(paginationEl)), paginationEl && (currentParams.pagination.el = paginationEl), pagination.init(), pagination.render(), pagination.update()), needScrollbarInit && (swiper.isElement && (!scrollbarEl || typeof scrollbarEl == "string") && (scrollbarEl = document.createElement("div"), scrollbarEl.classList.add("swiper-scrollbar"), scrollbarEl.part.add("scrollbar"), swiper.el.appendChild(scrollbarEl)), scrollbarEl && (currentParams.scrollbar.el = scrollbarEl), scrollbar.init(), scrollbar.updateSize(), scrollbar.setTranslate()), needNavigationInit && (swiper.isElement && ((!nextEl || typeof nextEl == "string") && (nextEl = document.createElement("div"), nextEl.classList.add("swiper-button-next"), nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg, nextEl.part.add("button-next"), swiper.el.appendChild(nextEl)), (!prevEl || typeof prevEl == "string") && (prevEl = document.createElement("div"), prevEl.classList.add("swiper-button-prev"), prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg, prevEl.part.add("button-prev"), swiper.el.appendChild(prevEl))), nextEl && (currentParams.navigation.nextEl = nextEl), prevEl && (currentParams.navigation.prevEl = prevEl), navigation.init(), navigation.update()), changedParams.includes("allowSlideNext") && (swiper.allowSlideNext = passedParams.allowSlideNext), changedParams.includes("allowSlidePrev") && (swiper.allowSlidePrev = passedParams.allowSlidePrev), changedParams.includes("direction") && swiper.changeDirection(passedParams.direction, !1), (loopNeedDestroy || loopNeedReloop) && swiper.loopDestroy(), (loopNeedEnable || loopNeedReloop) && swiper.loopCreate(), swiper.update();
}

// node_modules/swiper/shared/get-element-params.mjs
var formatValue = (val) => {
  if (parseFloat(val) === Number(val))
    return Number(val);
  if (val === "true" || val === "")
    return !0;
  if (val === "false")
    return !1;
  if (val === "null")
    return null;
  if (val !== "undefined") {
    if (typeof val == "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
      let v;
      try {
        v = JSON.parse(val);
      } catch {
        v = val;
      }
      return v;
    }
    return val;
  }
}, modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function getParams(element, propName, propValue) {
  let params = {}, passedParams = {};
  extend3(params, defaults);
  let localParamsList = [...paramsList, "on"], allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
  localParamsList.forEach((paramName) => {
    paramName = paramName.replace("_", ""), typeof element[paramName] < "u" && (passedParams[paramName] = element[paramName]);
  });
  let attrsList = [...element.attributes];
  return typeof propName == "string" && typeof propValue < "u" && attrsList.push({
    name: propName,
    value: isObject3(propValue) ? {
      ...propValue
    } : propValue
  }), attrsList.forEach((attr) => {
    let moduleParam = modulesParamsList.filter((mParam) => attr.name.indexOf(`${mParam}-`) === 0)[0];
    if (moduleParam) {
      let parentObjName = attrToProp(moduleParam), subObjName = attrToProp(attr.name.split(`${moduleParam}-`)[1]);
      typeof passedParams[parentObjName] > "u" && (passedParams[parentObjName] = {}), passedParams[parentObjName] === !0 && (passedParams[parentObjName] = {
        enabled: !0
      }), passedParams[parentObjName][subObjName] = formatValue(attr.value);
    } else {
      let name = attrToProp(attr.name);
      if (!allowedParams.includes(name))
        return;
      let value = formatValue(attr.value);
      passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value) ? (passedParams[name].constructor !== Object && (passedParams[name] = {}), passedParams[name].enabled = !!value) : passedParams[name] = value;
    }
  }), extend3(params, passedParams), params.navigation ? params.navigation = {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    ...params.navigation !== !0 ? params.navigation : {}
  } : params.navigation === !1 && delete params.navigation, params.scrollbar ? params.scrollbar = {
    el: ".swiper-scrollbar",
    ...params.scrollbar !== !0 ? params.scrollbar : {}
  } : params.scrollbar === !1 && delete params.scrollbar, params.pagination ? params.pagination = {
    el: ".swiper-pagination",
    ...params.pagination !== !0 ? params.pagination : {}
  } : params.pagination === !1 && delete params.pagination, {
    params,
    passedParams
  };
}

// node_modules/swiper/swiper-element-bundle.mjs
var SwiperCSS = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;overflow:clip;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}", SwiperSlideCSS = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}", DummyHTMLElement = class {
}, ClassToExtend = typeof window > "u" || typeof HTMLElement > "u" ? DummyHTMLElement : HTMLElement, arrowSvg = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `, addStyle = (shadowRoot, styles) => {
  if (typeof CSSStyleSheet < "u" && shadowRoot.adoptedStyleSheets) {
    let styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(styles), shadowRoot.adoptedStyleSheets = [styleSheet];
  } else {
    let style = document.createElement("style");
    style.rel = "stylesheet", style.textContent = styles, shadowRoot.appendChild(style);
  }
}, SwiperContainer = class extends ClassToExtend {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  static get nextButtonSvg() {
    return arrowSvg;
  }
  static get prevButtonSvg() {
    return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
  }
  cssStyles() {
    return [
      SwiperCSS,
      // eslint-disable-line
      ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
    ].join(`
`);
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    let currentSideSlots = this.slideSlots || 0, slideSlotChildren = [...this.querySelectorAll("[slot^=slide-]")].map((child) => parseInt(child.getAttribute("slot").split("slide-")[1], 10));
    if (this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0, !!this.rendered) {
      if (this.slideSlots > currentSideSlots)
        for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
          let slideEl = document.createElement("swiper-slide");
          slideEl.setAttribute("part", `slide slide-${i + 1}`);
          let slotEl = document.createElement("slot");
          slotEl.setAttribute("name", `slide-${i + 1}`), slideEl.appendChild(slotEl), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
        }
      else if (this.slideSlots < currentSideSlots) {
        let slides = this.swiper.slides;
        for (let i = slides.length - 1; i >= 0; i -= 1)
          i > this.slideSlots && slides[i].remove();
      }
    }
  }
  render() {
    if (this.rendered)
      return;
    this.calcSlideSlots();
    let localStyles = this.cssStyles();
    this.slideSlots > 0 && (localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), localStyles.length && addStyle(this.shadowRoot, localStyles), this.cssLinks().forEach((url) => {
      if (this.shadowRoot.querySelector(`link[href="${url}"]`))
        return;
      let linkEl = document.createElement("link");
      linkEl.rel = "stylesheet", linkEl.href = url, this.shadowRoot.appendChild(linkEl);
    });
    let el = document.createElement("div");
    el.classList.add("swiper"), el.part = "container", el.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
      length: this.slideSlots
    }).map((_, index) => `
        <swiper-slide part="slide slide-${index}">
          <slot name="slide-${index}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${needsNavigation(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${needsPagination(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${needsScrollbar(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `, this.shadowRoot.appendChild(el), this.rendered = !0;
  }
  initialize() {
    var _this = this;
    if (this.initialized)
      return;
    this.initialized = !0;
    let {
      params: swiperParams,
      passedParams
    } = getParams(this);
    this.swiperParams = swiperParams, this.passedParams = passedParams, delete this.swiperParams.init, this.render(), this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), {
      ...swiperParams.virtual ? {} : {
        observer: !0,
        observeSlideChildren: this.slideSlots > 0
      },
      ...swiperParams,
      touchEventsTarget: "container",
      onAny: function(name) {
        name === "observerUpdate" && _this.calcSlideSlots();
        let eventName = swiperParams.eventsPrefix ? `${swiperParams.eventsPrefix}${name.toLowerCase()}` : name.toLowerCase();
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
          args[_key - 1] = arguments[_key];
        let event2 = new CustomEvent(eventName, {
          detail: args,
          bubbles: name !== "hashChange",
          cancelable: !0
        });
        _this.dispatchEvent(event2);
      }
    });
  }
  connectedCallback() {
    this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.init === !1 || this.getAttribute("init") === "false" || this.initialize();
  }
  disconnectedCallback() {
    this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || (this.swiper && this.swiper.destroy && this.swiper.destroy(), this.initialized = !1);
  }
  updateSwiperOnPropChange(propName, propValue) {
    let {
      params: swiperParams,
      passedParams
    } = getParams(this, propName, propValue);
    this.passedParams = passedParams, this.swiperParams = swiperParams, updateSwiper({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [attrToProp(propName)],
      ...propName === "navigation" && passedParams[propName] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {},
      ...propName === "pagination" && passedParams[propName] ? {
        paginationEl: ".swiper-pagination"
      } : {},
      ...propName === "scrollbar" && passedParams[propName] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}
    });
  }
  attributeChangedCallback(attr, prevValue, newValue) {
    this.initialized && (prevValue === "true" && newValue === null && (newValue = !1), this.updateSwiperOnPropChange(attr, newValue));
  }
  static get observedAttributes() {
    return paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v) => `-${v}`).replace("_", "").toLowerCase());
  }
};
paramsList.forEach((paramName) => {
  paramName !== "init" && (paramName = paramName.replace("_", ""), Object.defineProperty(SwiperContainer.prototype, paramName, {
    configurable: !0,
    get() {
      return (this.passedParams || {})[paramName];
    },
    set(value) {
      this.passedParams || (this.passedParams = {}), this.passedParams[paramName] = value, this.initialized && this.updateSwiperOnPropChange(paramName, value);
    }
  }));
});
var SwiperSlide = class extends ClassToExtend {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  render() {
    let lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    if (addStyle(this.shadowRoot, SwiperSlideCSS), this.shadowRoot.appendChild(document.createElement("slot")), lazy) {
      let lazyDiv = document.createElement("div");
      lazyDiv.classList.add("swiper-lazy-preloader"), lazyDiv.part.add("preloader"), this.shadowRoot.appendChild(lazyDiv);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    this.initialize();
  }
}, register = () => {
  typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", SwiperContainer), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", SwiperSlide));
};
typeof window < "u" && (window.SwiperElementRegisterParams = (params) => {
  paramsList.push(...params);
});

// app/components/Portfolio/Carousel.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Carousel({ content }) {
  let swiperElRef = (0, import_react9.useRef)(null), [currentIndex, setIndex] = (0, import_react9.useState)(0), [isSliding, setSlidingState] = (0, import_react9.useState)(!1), id = (0, import_react9.useId)();
  if (register(), (0, import_react9.useEffect)(() => {
    let swiper = swiperElRef.current;
    if (!swiper)
      return;
    let swiperParams = {
      initialSlide: content.length > 1 ? 1 : 0,
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: !0,
      centerInsufficientSlides: !0,
      spaceBetween: "16",
      breakpoints: {
        768: {
          spaceBetween: "80"
        }
      },
      on: {
        init() {
          swiper.addEventListener("slidechange", (e) => {
            setIndex(e.detail[0].realIndex);
          }), swiper.addEventListener("slidechangetransitionstart", () => {
            setSlidingState(!0);
          }), swiper.addEventListener("slidechangetransitionend", () => {
            setSlidingState(!1);
          });
        }
      }
    };
    Object.assign(swiper, swiperParams), swiper.initialize();
  }, []), !!content)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative mix-blend-multiply", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "swiper-container",
        {
          init: "false",
          ref: swiperElRef,
          className: "mix-blend-multiply",
          children: content.map(({ image, caption }, i) => {
            if (image)
              return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("swiper-slide", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { className: "block max-h-[80vh] object-contain object-center mx-auto w-auto mix-blend-multiply", width: "319", height: "329", src: image, alt: caption || "" }),
                caption && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "block text-sm uppercase pt-4", children: [
                  "* ",
                  caption
                ] })
              ] }, `${id}-${i}`);
          })
        }
      ),
      content.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: `${isSliding ? "md:opacity-0" : "duration-500"} transition-opacity duration-200 flex max-md:container max-md:py-4 md:flex-col gap-3 items-center md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:pl-[24%] md:w-[1%]`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: currentIndex + 1 }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-xs", children: "/" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: content.length })
        ] }),
        currentIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: () => swiperElRef.current.swiper.slidePrev(),
            className: "z-[1] h-16 w-16 text-ivory hover:text-tuatara transform rotate-180 origin-top translate-y-1/2 hidden md:flex items-center justify-center absolute absolute-container-left top-1/2 transition duration-200 opacity-90",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Arrow_default, { className: "w-16 h-16" })
          }
        ),
        currentIndex + 1 < content.length && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            onClick: () => swiperElRef.current.swiper.slideNext(),
            className: "z-[1] h-16 w-16 text-ivory hover:text-tuatara transform -translate-y-1/2 hidden md:flex items-center justify-center absolute absolute-container-right top-1/2 transition duration-200 opacity-90",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Arrow_default, { className: "w-16 h-16" })
          }
        )
      ] })
    ] }) });
}

// app/components/Portfolio/Overview.tsx
var import_react10 = require("react"), import_jsx_runtime11 = require("react/jsx-runtime");
function Overview({ content }) {
  let id = (0, import_react10.useId)();
  if (content)
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "container md:max-w-5xl py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { className: "text-sm font-normal uppercase pb-16", children: "PROJECT OVERVIEW" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "flex flex-col gap-8", children: content == null ? void 0 : content.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: "grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-end w-full gap-3 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "leading-none text-xs", children: [
            i < 9 ? "0" : "",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "hidden md:block border-b border-dashed border-current w-full" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-title text-2xl opacity-80 leading-relaxed", children: item })
      ] }, `${id}-${i}`)) })
    ] }) });
}

// app/components/Portfolio/PortfolioBanner.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function PortfolioBanner({ content }) {
  if (!content)
    return;
  let { image, caption } = content;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { className: "block", src: image, alt: caption ?? "" }),
    caption && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "uppercase text-sm", children: caption }) })
  ] }) });
}

// app/components/Portfolio/Results.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Results({ content }) {
  if (content)
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "container py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col gap-10 max-w-5xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "uppercase text-sm", children: "Results" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "font-title text-xl md:text-4xl", dangerouslySetInnerHTML: { __html: content } })
    ] }) });
}

// app/components/Portfolio/SparkyMagic.tsx
var import_react11 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SparkyMagic({ content }) {
  let id = (0, import_react11.useId)();
  if (content != null && content.length)
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "container md:max-w-5xl py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col border border-current", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex gap-8 items-center border-b border-current px-11 py-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Star_default, { className: "h-5 w-5" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "uppercase", children: "Sparky Magic" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { className: `grid grid-cols-1 [&>li:nth-child(n+3)]:border-t [&>li:not(only-child):not(last-child):nth-child(odd)]:max-md:border-b [&>li:not(only-child):not(last-child):nth-child(odd)]:md:border-r ${(content == null ? void 0 : content.length) > 1 && "md:grid-cols-2"}`, children: [
        content.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { className: "p-12 md:min-h-[400px] md:only:min-h-max flex flex-col gap-8 justify-end border-current", children: [
          content.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "mb-auto", children: [
            i < 9 && "0",
            i + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { dangerouslySetInnerHTML: { __html: item }, className: "font-title text-2xl" })
        ] }, id)),
        content.length % 2 !== 0 && content.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { "aria-hidden": !0, className: "border-current" })
      ] })
    ] }) });
}

// app/components/Portfolio/Stack.tsx
var import_react12 = require("react"), import_jsx_runtime15 = require("react/jsx-runtime");
function Stack({ content }) {
  let id = (0, import_react12.useId)();
  if (content)
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container md:max-w-5xl py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-col gap-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "uppercase text-sm", children: "Tech stack" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "flex flex-wrap [&_li]:bg-ivory [&_li]:border [&_li]:border-current [&_li]:py-2 [&_li]:px-4 [&_li]:md:py-4 [&_li]:md:px-8 md:text-xl", children: content.map(
        ({ title, link }, i) => link ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("a", { rel: "noopener", href: link, children: title }) }, `${id}-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: title }, `${id}-${i}`)
      ) })
    ] }) });
}

// app/components/Portfolio/Testimonial.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Testimonial({ content }) {
  if (!content)
    return;
  let { quote, attribution, attributionTitle } = content;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container md:max-w-5xl py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "py-14 px-8 md:py-28 md:px-32 flex flex-col gap-14 relative bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "absolute left-8 md:left-32 top-0 transform -translate-y-1/2 font-title w-8 h-8 md:w-[66px] md:h-[66px] z-[1]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Quote_default, { className: "text-ivory" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Quote_default, { className: "absolute -left-px -top-1 md:-left-1 md:-top-2.5 w-full h-full opacity-90 text-energyYellow" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "font-title text-3xl md:text-[66px] leading-[1]", children: quote }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "text-sm flex", children: [
      attribution,
      attributionTitle && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "block w-max px-4", children: "**" }),
        attributionTitle
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "absolute left-0 top-0 w-full h-full bg-botticelli mix-blend-multiply transform -translate-x-2 -translate-y-2" })
  ] }) });
}

// app/components/Portfolio/Footer.tsx
var import_react14 = require("react");

// app/components/Footer/components/FooterInfo.tsx
var import_react13 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function FooterInfo() {
  let toggleModal = (0, import_react13.useContext)(ModalContext);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "bg-ivory py-16 md:pb-32 text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "container flex flex-col gap-14 relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        className: "uppercase underline tracking-wide hover-highlight hover:highlighted",
        onClick: () => toggleModal ? toggleModal() : null,
        children: "CONTACT"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " / SPARKY / OPERATING WORLDWIDE"
    ] })
  ] }) });
}

// app/components/Portfolio/Footer.tsx
var import_react15 = require("@remix-run/react"), import_jsx_runtime18 = require("react/jsx-runtime");
function Footer({ prevItem, nextItem, isFirst = !1 }) {
  let toggleModal = (0, import_react14.useContext)(ModalContext);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "container pt-11", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center w-full", children: [
        prevItem.handle && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react15.Link, { className: "group flex items-center gap-3 md:gap-7", to: `/portfolio/${prevItem.handle}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { className: "text-xl md:text-[44px] font-title underline hover-highlight group-hover:highlighted", children: prevItem.title }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "uppercase text-xs", children: "PREV" })
        ] }),
        nextItem.handle && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react15.Link, { className: "group flex items-center gap-3 md:gap-7 ml-auto", to: `/portfolio/${nextItem.handle}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "uppercase text-xs", children: isFirst ? "View" : "NEXT" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { className: "text-xl md:text-[44px] font-title underline hover-highlight group-hover:highlighted", children: nextItem.title })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("hr", { className: "border-0 border-b py-11 border-dashed border-current w-full" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "bg-ivory py-52", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "container flex flex-col items-center justify-center gap-14", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("strong", { className: "h1 text-5xl text-center", children: [
        "Like what you see? ",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
        " Let's meet."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "button--secondary", onClick: () => toggleModal ? toggleModal() : null, children: "Get in Touch" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("hr", { className: "border-0 border-b border-dashed border-current" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FooterInfo, {})
  ] });
}

// app/assets/portfolio-svg-background.svg
var portfolio_svg_background_default = "/build/_assets/portfolio-svg-background-UU3LEGFQ.svg";

// app/routes/portfolio.$client.tsx
var import_react17 = require("react"), import_jsx_runtime19 = require("react/jsx-runtime");
function Index() {
  var _a, _b, _c, _d, _e, _f;
  let params = (0, import_react16.useParams)(), currentIndex = case_studies_default.findIndex((item) => item.handle === params.client), caseStudy = case_studies_default[currentIndex], id = (0, import_react17.useId)();
  if (!caseStudy)
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-ivory", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "container pt-32 flex flex-col gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "h2", children: "Whoops! Nothing here." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("hr", { className: "border-0 border-b border-dashed mt-11 mb-5 block border-current" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "w-full py-5 md:py-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "container title", children: "case studies" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "container py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "md:max-w-5xl ml-auto flex flex-col gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "flex flex-col gap-3 pb-11", children: case_studies_default.map(({ title: title2, handle }, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { className: "relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 focus-within:highlighted hover:highlighted hover-highlight after:!duration-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "transition duration-500 absolute bottom-1/2 -left-5 transform translate-y-1/2 -translate-x-full -rotate-45 scale-0 group-hover:rotate-90 group-hover:scale-100", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Star_default, { className: "w-9 h-9" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "flex w-full items-end gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { className: "block w-max whitespace-nowrap text-lg md:text-[44px] font-title leading-[0.75]", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react16.Link, { to: `/portfolio/${handle}`, children: title2 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "w-full border-b border-current border-dashed" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "flex items-end w-full gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "max-md:text-xs title leading-none text-center whitespace-nowrap", children: "Shopify plus" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "w-full border-b border-current border-dashed" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "max-md:text-xs title leading-none text-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react16.Link, { className: "flex gap-2 items-center text-tuatara", to: `/portfolio/${handle}`, children: [
            "Read",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "aria-hidden": "true", className: "w-2", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ArrowSquare_default, {}) })
          ] }) })
        ] }, `${id}-${i}`)) }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        Footer,
        {
          isFirst: !0,
          prevItem: {
            title: null,
            handle: null
          },
          nextItem: {
            title: (_a = case_studies_default[0]) == null ? void 0 : _a.title,
            handle: (_b = case_studies_default[0]) == null ? void 0 : _b.handle
          }
        }
      )
    ] });
  let {
    title,
    description,
    vimeoLinkPrimary,
    overview,
    carousel,
    sparkyMagic,
    portfolioBanner,
    vimeoLinkSecondary,
    siteLink,
    testimonial,
    stack,
    results
  } = caseStudy;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "bg-[length:_100%_auto] bg-no-repeat bg-top bg-ivory", style: { backgroundImage: `url(${portfolio_svg_background_default})` }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "container flex flex-col pt-32 gap-5 pb-5 md:pb-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react16.Link, { to: "/portfolio", className: "title", children: "case study /" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "block leading-tight text-3xl md:text-[88px] font-bold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { target: "_blank", rel: "noopener", href: siteLink, className: "relative z-[0] group px-2 font-title text-xl font-bold md:text-[44px] flex items-end gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "py-3 block w-max", children: "Visit" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "aria-hidden": "true", className: "w-6 text-energyYellow transition-all duration-300 group-hover:text-tuatara", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ArrowSquare_default, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "aria-hidden": "true", className: "absolute bottom-0 left-0 h-6 w-[calc(100%-44px)] bg-energyYellow -z-[1]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        className: "container py-5 md:py-10 font-title text-2xl md:text-4xl font-medium leading-normal",
        dangerouslySetInnerHTML: { __html: description }
      }
    ),
    vimeoLinkPrimary && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "container py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("iframe", { className: "aspect-video w-full", src: vimeoLinkPrimary }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Overview, { content: overview }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Carousel, { content: carousel }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SparkyMagic, { content: sparkyMagic }),
    vimeoLinkSecondary && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "container py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("iframe", { className: "aspect-video w-full", src: vimeoLinkSecondary }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PortfolioBanner, { content: portfolioBanner }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Testimonial, { content: testimonial }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Stack, { content: stack }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Results, { content: results }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "bg-ivory pt-20", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Footer,
      {
        isFirst: !1,
        prevItem: {
          title: (_c = case_studies_default[currentIndex - 1]) == null ? void 0 : _c.title,
          handle: (_d = case_studies_default[currentIndex - 1]) == null ? void 0 : _d.handle
        },
        nextItem: {
          title: (_e = case_studies_default[currentIndex + 1]) == null ? void 0 : _e.title,
          handle: (_f = case_studies_default[currentIndex + 1]) == null ? void 0 : _f.handle
        }
      }
    ) })
  ] });
}

// app/routes/portfolio._index.tsx
var portfolio_index_exports = {};
__export(portfolio_index_exports, {
  default: () => Index2
});
var import_react18 = require("@remix-run/react"), import_react19 = require("react");

// app/assets/homepage-svg-background.svg
var homepage_svg_background_default = "/build/_assets/homepage-svg-background-UCFKBJDT.svg";

// app/routes/portfolio._index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Index2() {
  var _a, _b;
  let id = (0, import_react19.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { style: { backgroundImage: `url(${homepage_svg_background_default})` }, className: "bg-ivory bg-[length:_100%_auto] bg-no-repeat bg-top", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "container flex flex-col pt-32 gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "title", children: "Our work" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { className: "block leading-tight text-3xl md:text-[88px] font-bold", children: "Case Studies" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "container py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "md:max-w-5xl ml-auto flex flex-col gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "flex flex-col gap-3 pb-11", children: case_studies_default.map(({ title, handle }, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("li", { className: "relative group w-full grid grid-cols-[40%_1fr_auto] md:grid-cols-[50%_1fr_auto] items-end gap-4 focus-within:highlighted hover:highlighted hover-highlight after:!duration-500", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "transition duration-500 absolute bottom-1/2 -left-5 transform translate-y-1/2 -translate-x-full -rotate-45 scale-0 group-hover:rotate-90 group-hover:scale-100", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Star_default, { className: "w-9 h-9" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "flex w-full items-end gap-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { className: "block w-max whitespace-nowrap text-lg md:text-[44px] font-title leading-[0.75]", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react18.Link, { to: `/portfolio/${handle}`, children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "w-full border-b border-current border-dashed" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "flex items-end w-full gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "max-md:text-xs title leading-none text-center whitespace-nowrap", children: "Shopify plus" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "w-full border-b border-current border-dashed" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "max-md:text-xs title leading-none text-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react18.Link, { className: "flex gap-2 items-center text-tuatara", to: `/portfolio/${handle}`, children: [
        "Read",
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { "aria-hidden": "true", className: "w-2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ArrowSquare_default, {}) })
      ] }) })
    ] }, `${id}-${i}`)) }) }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "pt-20", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      Footer,
      {
        isFirst: !0,
        prevItem: {
          title: null,
          handle: null
        },
        nextItem: {
          title: (_a = case_studies_default[0]) == null ? void 0 : _a.title,
          handle: (_b = case_studies_default[0]) == null ? void 0 : _b.handle
        }
      }
    ) })
  ] });
}

// app/routes/elevar-summit.tsx
var elevar_summit_exports = {};
__export(elevar_summit_exports, {
  loader: () => loader
});
var import_node2 = require("@remix-run/node");
async function loader() {
  return (0, import_node2.redirect)("/elevar");
}

// app/routes/checklist.tsx
var checklist_exports = {};
__export(checklist_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
async function loader2() {
  return (0, import_node3.redirect)("/elevar");
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index3,
  meta: () => meta
});

// app/components/Homepage/Hero.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "hero flex flex-col justify-center items-center container text-center gap-5 pt-48 pb-14 md:pb-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { className: "text-3xl md:text-[54px] leading-tight font-semibold max-w-[872px]", children: "The Shopify Plus partner with startup agility and enterprise ability" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "pt-0.5 text-xl leading-normal max-w-[872px]", children: "Since 2018, we\u2019ve partnered with some of Shopify\u2019s largest brands to future-proof their tech stacks, optimize their revenues per visitor, and make their sites glow with brand personality." })
  ] });
}

// app/components/Homepage/FeaturedPortfolio.tsx
var import_react20 = require("react");

// app/assets/fortyseven.png
var fortyseven_default = "/build/_assets/fortyseven-5ELHC4ZR.png";

// app/assets/legends.png
var legends_default = "/build/_assets/legends-3YY772IV.png";

// app/assets/ghost.png
var ghost_default = "/build/_assets/ghost-BFAFNU52.png";

// app/assets/heydude.png
var heydude_default = "/build/_assets/heydude-4SRR2EA2.png";

// app/assets/holley.png
var holley_default = "/build/_assets/holley-T4UENWPZ.png";

// app/assets/momentous.png
var momentous_default = "/build/_assets/momentous-66XJE3G5.png";

// app/assets/orthofeet.png
var orthofeet_default = "/build/_assets/orthofeet-QL7AWBX4.png";

// app/assets/paka.png
var paka_default = "/build/_assets/paka-JNC6ELJQ.png";

// app/assets/rockets.png
var rockets_default = "/build/_assets/rockets-HCATCOZR.png";

// app/assets/venus.png
var venus_default = "/build/_assets/venus-MJ7UPHZW.png";

// app/assets/wink.png
var wink_default = "/build/_assets/wink-G6YDIV4K.png";

// app/assets/york.png
var york_default = "/build/_assets/york-MB4IHFKS.png";

// app/assets/algolia.svg
var algolia_default = "/build/_assets/algolia-ALJOQTD6.svg";

// app/assets/elevar.svg
var elevar_default = "/build/_assets/elevar-4ELO3I2W.svg";

// app/assets/fast_simon_logo_no_tag.svg
var fast_simon_logo_no_tag_default = "/build/_assets/fast_simon_logo_no_tag-RM3753HE.svg";

// app/assets/gorgias-white.svg
var gorgias_white_default = "/build/_assets/gorgias-white-R36JH2FX.svg";

// app/assets/heatmap.svg
var heatmap_default = "/build/_assets/heatmap-2HVZNN5V.svg";

// app/assets/inveterate.png
var inveterate_default = "/build/_assets/inveterate-VAAQBIIK.png";

// app/assets/klavyio-logo.svg
var klavyio_logo_default = "/build/_assets/klavyio-logo-DPTPMZYE.svg";

// app/assets/loop-isologo.svg
var loop_isologo_default = "/build/_assets/loop-isologo-IJJHUBYL.svg";

// app/assets/narvar.svg
var narvar_default = "/build/_assets/narvar-H62HXMUK.svg";

// app/assets/rebuy_logo_white.svg
var rebuy_logo_white_default = "/build/_assets/rebuy_logo_white-LQSTCVY3.svg";

// app/assets/tapcart-logo.svg
var tapcart_logo_default = "/build/_assets/tapcart-logo-KC3SEZVD.svg";

// app/assets/visually-lgoo.png
var visually_lgoo_default = "/build/_assets/visually-lgoo-GTGPNXPD.png";

// app/assets/47-main.png
var main_default = "/build/_assets/47-main-LFNG4OZR.png";

// app/assets/ghost-main.png
var ghost_main_default = "/build/_assets/ghost-main-TIJA6UVK.png";

// app/assets/heydude-main.jpg
var heydude_main_default = "/build/_assets/heydude-main-LQOSSZDA.jpg";

// app/assets/legends-main.png
var legends_main_default = "/build/_assets/legends-main-SYBLOWAG.png";

// app/assets/wink-main.png
var wink_main_default = "/build/_assets/wink-main-E6P7E7WB.png";

// app/assets/york-main.png
var york_main_default = "/build/_assets/york-main-6ZWBISH7.png";

// app/data/homepage.js
var portfolioSlider = [
  {
    title: "Heydude",
    link: "https://www.heydude.com/",
    image: heydude_main_default
  },
  {
    title: "'47 Brand",
    link: "https://www.47brand.com/",
    image: main_default
  },
  {
    title: "Legends",
    link: "https://www.legends.com/",
    image: legends_main_default
  },
  {
    title: "Ghost",
    link: "https://www.ghostlifestyle.com/",
    image: ghost_main_default
  },
  {
    title: "York Athletics",
    link: "https://yorkathleticsmfg.com/",
    image: york_main_default
  },
  {
    title: "Wink",
    link: "https://winkscrubs.com/",
    image: wink_main_default
  }
], portfolioListItems = [
  {
    title: "Heydude",
    link: "https://www.heydude.com/",
    logo: heydude_default
  },
  {
    title: "'47 Brand",
    link: "https://www.47brand.com/",
    logo: fortyseven_default
  },
  {
    title: "Legends",
    link: "https://www.legends.com/",
    logo: legends_default
  },
  {
    title: "Ghost",
    link: "https://www.ghostlifestyle.com/",
    logo: ghost_default
  },
  {
    title: "Venus",
    link: "#",
    logo: venus_default
  },
  {
    title: "Wink",
    link: "https://winkscrubs.com/",
    logo: wink_default
  },
  {
    title: "Paka",
    link: "https://www.pakaapparel.com",
    logo: paka_default
  },
  {
    title: "Momentous",
    link: "https://www.livemomentous.com/",
    logo: momentous_default
  },
  {
    title: "Orthofeet",
    link: "#",
    logo: orthofeet_default
  },
  {
    title: "Rockets of Awesome",
    link: "https://www.rocketsofawesome.com",
    logo: rockets_default
  },
  {
    title: "Holley",
    link: "https://www.holley.com/",
    logo: holley_default
  },
  {
    title: "York Athletics",
    link: "https://yorkathleticsmfg.com/",
    logo: york_default
  }
], offerings = [
  {
    title: "Front-End",
    listItems: [
      {
        title: "UI/UX Design",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20">
              <defs>
                  <clipPath id="c4grcy6sja">
                      <path data-name="Path 56" d="M19.2-8.008V-24a.99.99 0 0 0-1-1H1a1 1 0 0 0-1 1v15.6a1 1 0 0 0 1 1h14.064c1.384 1.312 2.784 2.36 3.728 2.4h.056a1.134 1.134 0 0 0 .84-.36A1.116 1.116 0 0 0 20-6.208a3.861 3.861 0 0 0-.8-1.8zM.8-21v-3a.2.2 0 0 1 .2-.2h17.2a.2.2 0 0 1 .2.2v3zm2.4 3.2v2.4H8v.8H2.8a.4.4 0 0 1-.4-.4v-3.2a.4.4 0 0 1 .4-.4h13.6a.4.4 0 0 1 .4.4v3.2a.4.4 0 0 1-.4.4h-2v-.8H16v-2.4zM8.8-13v.8H2.4v-.8zm.8 2.4H2.4v-.8h7.2zm1.568-1.176a1.49 1.49 0 0 1-.888-1.312 6.088 6.088 0 0 0-.408-2.248c1.216.16 3.072.576 3.48 1.48.184.408.024.936-.472 1.56a1.572 1.572 0 0 1-1.712.52zm7.912 5.9a.277.277 0 0 1-.256.08c-1-.04-3.408-2.12-6.2-5.336a3.2 3.2 0 0 0 .832-.608c.016-.008.024-.024.032-.032a4.336 4.336 0 0 0 .392-.576c3.248 2.824 5.28 5.168 5.32 6.176a.332.332 0 0 1-.12.292zM2.4-23.4a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zm2.4 0a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zm2.4 0a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8z" transform="translate(0 25)" style="fill:currentColor"/>
                  </clipPath>
              </defs>
              <g data-name="Group 252">
                  <g data-name="Group 120" style="clip-path:url(#c4grcy6sja)">
                      <path data-name="Path 55" d="M-5-30h28v28H-5z" transform="translate(1 26)" style="fill:currentColor"/>
                  </g>
              </g>
          </svg>
        `
      },
      {
        title: "A/B Testing & Optimization",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 13 20">
              <defs>
                  <clipPath id="na2ld3j54a">
                      <path data-name="Path 64" d="M9.036-17.016v-5.64a1.149 1.149 0 0 0 .82-1.088v-.1A1.167 1.167 0 0 0 8.676-25H4.468a1.167 1.167 0 0 0-1.181 1.152v.1a1.142 1.142 0 0 0 .82 1.088v5.64A6.144 6.144 0 0 0 .08-11.264 6.406 6.406 0 0 0 6.609-5a6.3 6.3 0 0 0 6.471-6.264 6.156 6.156 0 0 0-4.044-5.752zm-4.921-6.832a.36.36 0 0 1 .361-.352h4.208a.36.36 0 0 1 .361.352v.1a.36.36 0 0 1-.361.352h-4.2a.36.36 0 0 1-.361-.352v-.1zm.55 7.48a.4.4 0 0 0 .271-.376V-17h1.64v-.8h-1.64v-.8h1.64v-.8h-1.64v-.8h1.64v-.8h-1.64v-1.6h3.28v5.856a.4.4 0 0 0 .271.376 5.5 5.5 0 0 1 3.519 3.488c-2.116 1.552-3.568 1.064-5.249.5a7.153 7.153 0 0 0-5.7-.072 5.432 5.432 0 0 1 3.608-3.916z" transform="translate(-.08 25)" style="fill:currentColor"/>
                  </clipPath>
              </defs>
              <g data-name="Group 377">
                  <g data-name="Group 137" style="clip-path:url(#na2ld3j54a)">
                      <path data-name="Path 63" d="M-4.92-30h21.2v28h-21.2z" transform="translate(.819 26)" style="fill:currentColor"/>
                  </g>
              </g>
          </svg>
        `
      },
      {
        title: "Headless Front-End Development",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20">
            <defs>
              <clipPath id="zwib8tse0a">
                <path data-name="Path 54" d="M1-22.6h7.8v-.8H1a1 1 0 0 0-1 1v14.8a1 1 0 0 0 1 1h7.8v-12.8h-8v-3a.2.2 0 0 1 .2-.2zM5.6-9H2.4v-.8h3.2zM8-10.6H2.4v-.8H8zm-5.6-1.6v-.8h4.8v.8zM8-13.8H4v-.8h4zm-6.24-2.48.48-.64 1.6 1.2a.384.384 0 0 1 .16.32.384.384 0 0 1-.16.32l-1.6 1.2-.48-.64 1.176-.88zM7.2-21.8a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zm-2.4 0a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zM19-23.4h-8.6V-25h-.8v20h.8v-1.6H19a1 1 0 0 0 1-1v-14.8a1 1 0 0 0-1-1zM17.6-9h-7.2v-.8h7.2zm0-1.6h-7.2v-.8h7.2zm0-2.8a.4.4 0 0 1-.4.4h-6.8v-3.2h6.8a.4.4 0 0 1 .4.4zm1.6-6h-8.8v-3.2H19a.2.2 0 0 1 .2.2zM2.4-21.8a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8z" transform="translate(0 25)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 378">
              <g data-name="Group 118" style="clip-path:url(#zwib8tse0a)">
                <path data-name="Path 53" d="M-5-30h28v28H-5z" transform="translate(1 26)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "Shopify Theme Development",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 20 17">
            <defs>
              <style>
                .cls-1 {
                  fill: currentColor;
                }

                .cls-2 {
                  clip-path: url(#clip-path);
                }
              </style>
              <clipPath id="clip-path">
                <path id="Path_44" data-name="Path 44" class="cls-1" d="M19.2-16.952H.8v-3.036a.2.2,0,0,1,.2-.2H19a.2.2,0,0,1,.2.2ZM19-21H1a1.006,1.006,0,0,0-1,1.012V-5.012A1.006,1.006,0,0,0,1-4H19a1.006,1.006,0,0,0,1-1.012V-19.988A1.006,1.006,0,0,0,19-21ZM7.192-8.857l-.792.81L4-10.476a.572.572,0,0,1,0-.81l2.4-2.429.792.81L5.184-10.881ZM8.9-7.408l-1-.5L11.1-14.386l1,.5ZM16-10.476,13.6-8.048l-.792-.81,2.008-2.024L12.808-12.9l.792-.81L16-11.286A.572.572,0,0,1,16-10.476Zm-13.6-8.9a.807.807,0,0,0-.8.81.807.807,0,0,0,.8.81.807.807,0,0,0,.8-.81A.807.807,0,0,0,2.4-19.381Zm2.4,0a.807.807,0,0,0-.8.81.807.807,0,0,0,.8.81.807.807,0,0,0,.8-.81A.807.807,0,0,0,4.8-19.381Zm2.4,0a.807.807,0,0,0-.8.81.807.807,0,0,0,.8.81.807.807,0,0,0,.8-.81A.807.807,0,0,0,7.2-19.381Z" transform="translate(0 21)"/>
              </clipPath>
            </defs>
            <g id="Group_379" data-name="Group 379" transform="translate(0 21)">
              <g id="Group_95" data-name="Group 95" class="cls-2" transform="translate(0 -21)">
                <path id="Path_43" data-name="Path 43" class="cls-1" d="M-5-26H23V-.9H-5Z" transform="translate(1 21.952)"/>
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    title: "Platform",
    listItems: [
      {
        title: "Merchandising Operations",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20">
            <defs>
              <clipPath id="306xb8rn3a">
                <path data-name="Path 68" d="M18.736-25h-7.08a3.257 3.257 0 0 0-2.1.769L.432-15.152a1.394 1.394 0 0 0 0 2.018l7.7 7.71A1.439 1.439 0 0 0 9.168-5a1.466 1.466 0 0 0 1.04-.432l9.024-9.127a3.263 3.263 0 0 0 .768-2.1v-7.086A1.152 1.152 0 0 0 18.736-25zM14.4-16.994A2.408 2.408 0 0 1 12-19.4a2.408 2.408 0 0 1 2.4-2.4 2.408 2.408 0 0 1 2.4 2.4 2.408 2.408 0 0 1-2.4 2.406z" transform="translate(0 25)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 383">
              <g data-name="Group 145" style="clip-path:url(#306xb8rn3a)">
                <path data-name="Path 67" d="M-5-30h28v28.006H-5z" transform="translate(1 25.997)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "CMS Administration",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 20">
            <defs>
              <clipPath id="ify68snhka">
                <path data-name="Path 90" d="M.97-21c0-2.24 3.946-4 8.987-4s8.987 1.76 8.987 4S15-17 9.957-17 .97-18.76.97-21zm8.987 4.96C5.934-16.04 2.6-17.1 1-18.72V-17c0 2.24 3.946 4 8.987 4s8.987-1.76 8.987-4v-1.776c-1.587 1.648-4.943 2.736-9.017 2.736zM1-14.72V-13c0 2.24 3.946 4 8.987 4s8.987-1.76 8.987-4v-1.776c-1.583 1.648-4.939 2.736-9.013 2.736C5.934-12.04 2.6-13.1 1-14.72zm0 4V-9c0 2.24 3.941 4 8.983 4s8.987-1.76 8.987-4v-1.776C17.387-9.128 14.031-8.04 9.957-8.04 5.934-8.04 2.6-9.1 1-10.72z" transform="translate(-.97 25)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 384">
              <g data-name="Group 171" style="clip-path:url(#ify68snhka)">
                <path data-name="Path 89" d="M-4.03-30h26.559v28H-4.03z" transform="translate(-.25 26)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "Promo & Campaign Management",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18">
            <defs>
              <clipPath id="u33i1xt2aa">
                <path data-name="Path 72" d="M1.6-15.957v3.13A1.588 1.588 0 0 1 0-14.391a1.588 1.588 0 0 1 1.6-1.566zm16.8-.884v4.907a2.706 2.706 0 0 0 1.6-2.45 2.717 2.717 0 0 0-1.6-2.457zm-16 .227v4.445a.919.919 0 0 0 .928.908H3.2v5.267A1 1 0 0 0 4.208-5h1.984A1 1 0 0 0 7.2-5.978v-4.86c0-.172 0-.415.8-.415h1.6v-6.261H3.328a.907.907 0 0 0-.928.9zM17.2-23c-1.592 0-2.776 1.471-3.912 2.888-.9 1.127-1.84 2.285-2.888 2.536v6.417c1.1.243 2.04 1.409 2.952 2.551 1.112 1.393 2.264 2.825 3.848 2.825a.392.392 0 0 0 .4-.391v-16.435a.392.392 0 0 0-.4-.391z" transform="translate(0 23)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 385">
              <g data-name="Group 149" style="clip-path:url(#u33i1xt2aa)">
                <path data-name="Path 71" d="M-5-28h28v25.826H-5z" transform="translate(1 24.087)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "Catalog Architecture",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 17 20">
            <defs>
              <clipPath id="lltbh5c34a">
                <path data-name="Path 76" d="m7.164-22.08-2.833-2.8a.382.382 0 0 0-.283-.12H.4a.4.4 0 0 0-.4.4v8a.4.4 0 0 0 .4.4h6.481a.4.4 0 0 0 .4-.4v-5.2a.373.373 0 0 0-.117-.28zm-3.117.28v-2.232L6.306-21.8zm12.831-.28-2.833-2.8a.382.382 0 0 0-.283-.12h-3.643a.4.4 0 0 0-.4.4v8a.4.4 0 0 0 .4.4H16.6a.4.4 0 0 0 .4-.4v-5.2a.373.373 0 0 0-.121-.28zm-3.117.28v-2.232L16.02-21.8zm-6.6 10.92-2.833-2.8a.382.382 0 0 0-.283-.12H.4a.4.4 0 0 0-.4.4v8a.4.4 0 0 0 .4.4h6.481a.4.4 0 0 0 .4-.4v-5.2a.373.373 0 0 0-.117-.28zm-3.117.28v-2.232L6.306-10.6zm12.831-.28-2.833-2.8a.382.382 0 0 0-.283-.12h-3.64a.4.4 0 0 0-.4.4v8a.4.4 0 0 0 .4.4H16.6a.4.4 0 0 0 .4-.4v-5.2a.373.373 0 0 0-.121-.28zm-3.117.28v-2.232L16.02-10.6z" transform="translate(0 25)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 386">
              <g data-name="Group 153" style="clip-path:url(#lltbh5c34a)">
                <path data-name="Path 75" d="M-5-30h25.1v28H-5z" transform="translate(.952 26)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    title: "Strategy",
    listItems: [
      {
        title: "UX Consulting",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 20">
            <defs>
              <clipPath id="n039585vya">
                <path data-name="Path 84" d="M7.818-24.769a1.909 1.909 0 0 0-2.058.144 4.2 4.2 0 0 0-1.135 1.84 4.02 4.02 0 0 0 .086 1.3c.063.232-.227.464-.462.528a.4.4 0 0 1-.493-.312 4.1 4.1 0 0 1-.133-.96 5 5 0 0 0-2.731 4.46 4.8 4.8 0 0 0 .266 1.6 3.221 3.221 0 0 1 2-.7.432.432 0 0 1 .43.432.434.434 0 0 1-.43.44C1.268-16 0-13.674 0-11.49a6.811 6.811 0 0 0 3.8 5.9 4.618 4.618 0 0 0 4.14.184 1.32 1.32 0 0 0 .665-1.136v-17.091a1.323 1.323 0 0 0-.787-1.136zm-1.463 8.536a3.21 3.21 0 0 1-.485 1.688 1.131 1.131 0 0 0 .18.848.822.822 0 0 0 .845.432.383.383 0 0 1 .47.3.392.392 0 0 1-.29.48 1.529 1.529 0 0 1-1.683-.776 1.3 1.3 0 0 1-.078-.144 3.751 3.751 0 0 0 .156 3.659 3.817 3.817 0 0 0 1.01 1.1.4.4 0 0 1 .094.552.392.392 0 0 1-.321.176A.358.358 0 0 1 6.026-8a4.428 4.428 0 0 1-1.221-1.32 4.638 4.638 0 0 1-.258-.48A3.51 3.51 0 0 1 3.17-8.786a.391.391 0 0 1-.509-.232.4.4 0 0 1 .219-.512 2.717 2.717 0 0 0 1.33-1.16c.008-.016.016-.024.023-.04a4.654 4.654 0 0 1 .167-2.552 3.122 3.122 0 0 1-1.221.256.4.4 0 0 1-.391-.4.392.392 0 0 1 .391-.4 2.39 2.39 0 0 0 2.011-1.112.8.8 0 0 1 .086-.136 2.429 2.429 0 0 0 .3-1.16 2.4 2.4 0 0 0-.477-1.44.312.312 0 0 1-.063-.08 2.388 2.388 0 0 0-1.855-.9.392.392 0 0 1-.391-.4.4.4 0 0 1 .391-.4 3.127 3.127 0 0 1 2.27.976 3.05 3.05 0 0 0 1.346-2.536 3.012 3.012 0 0 0-.235-1.184.409.409 0 0 1 .211-.528.379.379 0 0 1 .509.216 3.75 3.75 0 0 1 .3 1.5 3.855 3.855 0 0 1-1.651 3.176 3.148 3.148 0 0 1 .424 1.601zm8.483.233a.439.439 0 0 1-.43-.44.427.427 0 0 1 .43-.432 3.2 3.2 0 0 1 2 .7 5 5 0 0 0 .258-1.6 5.018 5.018 0 0 0-2.755-4.464 5.128 5.128 0 0 1-.172.96.473.473 0 0 1-.571.312.433.433 0 0 1-.305-.528 4.005 4.005 0 0 0 .078-1.3 3.494 3.494 0 0 0-1.01-1.84 2.007 2.007 0 0 0-2.105-.144 1.4 1.4 0 0 0-.861 1.136v17.094a1.32 1.32 0 0 0 .665 1.136 4.635 4.635 0 0 0 4.14-.185 6.8 6.8 0 0 0 3.8-5.9C18-13.674 16.732-16 14.838-16zm.5 6.983a.391.391 0 0 1-.509.232A3.488 3.488 0 0 1 13.453-9.8a4.639 4.639 0 0 1-.258.48A4.532 4.532 0 0 1 11.974-8a.358.358 0 0 1-.227.08.392.392 0 0 1-.321-.176.4.4 0 0 1 .094-.552 3.817 3.817 0 0 0 1.01-1.1 3.751 3.751 0 0 0 .157-3.664 1.3 1.3 0 0 1-.078.144 1.524 1.524 0 0 1-1.683.776.4.4 0 0 1-.29-.48.383.383 0 0 1 .47-.3.822.822 0 0 0 .845-.432 1.131 1.131 0 0 0 .18-.848 3.2 3.2 0 0 1-.477-1.688 3.143 3.143 0 0 1 .423-1.6 3.855 3.855 0 0 1-1.651-3.176 3.75 3.75 0 0 1 .3-1.5.379.379 0 0 1 .509-.216.409.409 0 0 1 .211.528 3.04 3.04 0 0 0-.235 1.184 3.05 3.05 0 0 0 1.346 2.536 3.127 3.127 0 0 1 2.27-.976.4.4 0 0 1 .391.4.392.392 0 0 1-.391.4 2.388 2.388 0 0 0-1.855.9.312.312 0 0 1-.063.08 2.4 2.4 0 0 0-.47 1.44 2.423 2.423 0 0 0 .29 1.16.5.5 0 0 1 .086.136 2.39 2.39 0 0 0 2.011 1.112.392.392 0 0 1 .391.4.4.4 0 0 1-.391.4 3.122 3.122 0 0 1-1.221-.256 4.654 4.654 0 0 1 .164 2.552c.008.016.016.024.023.04a2.717 2.717 0 0 0 1.33 1.16.4.4 0 0 1 .217.518z" transform="translate(0 25.003)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 388">
              <g data-name="Group 164" style="clip-path:url(#n039585vya)">
                <path data-name="Path 83" d="M-5-30h25.826v28H-5z" transform="translate(1.087 26.003)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "CRO Strategy",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 20">
            <defs>
              <clipPath id="5j78yl9dva">
                <path data-name="Path 86" d="M4.908-10.192v4.8a.4.4 0 0 1-.409.4H.408A.4.4 0 0 1 0-5.39v-4.8a.4.4 0 0 1 .409-.4H4.5a.4.4 0 0 1 .408.398zm6.135-2.8h-4.09a.4.4 0 0 0-.409.4v7.2a.4.4 0 0 0 .409.4h4.09a.4.4 0 0 0 .409-.4v-7.2a.4.4 0 0 0-.409-.401zm6.135 7.2h-3.271v-2.4h-.818v2.8a.4.4 0 0 0 .409.4h4.09A.4.4 0 0 0 18-5.39v-2.8h-.818zm-3.272-8h-.818v4h.818zm3.681-4.8H13.5a.4.4 0 0 0-.409.4v2.8h.818v-2.4h3.272v2.4H18v-2.8a.4.4 0 0 0-.412-.408zm-.409 8.8H18v-4h-.818zM.408-14.658h.041c6.618-.7 10.013-3.449 14.275-8.884v3.353h.818v-4.4a.4.4 0 0 0-.409-.4h-4.5v.8H14.2C9.947-18.723 6.8-16.138.359-15.45a.4.4 0 0 0-.36.44.411.411 0 0 0 .409.352z" transform="translate(.003 24.99)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 389">
              <g data-name="Group 166" style="clip-path:url(#5j78yl9dva)">
                <path data-name="Path 85" d="M-5-29.99h26.178v28H-5z" transform="translate(.913 25.988)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "Roadmap Development",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 17">
            <defs>
              <clipPath id="15sg054e8a">
                <path data-name="Path 88" d="M12.8-17.128v-4.739l-5.6 2.228v14.466L12.8-7.4v-8.9a2.941 2.941 0 0 0-2.1 1.566l-.712-.371a3.716 3.716 0 0 1 2.812-2.023zm-2.4 3.778a3.673 3.673 0 0 1-1.744 3.011l-.408-.694a2.9 2.9 0 0 0 1.352-2.35zm-4 2.632v-8.92L.544-21.956a.4.4 0 0 0-.368.048.387.387 0 0 0-.176.332v13.6a.413.413 0 0 0 .256.379L6.4-5.173V-9.9a3.352 3.352 0 0 1-2.56-1.493l.664-.452A2.558 2.558 0 0 0 6.4-10.719zm-2.376-2.447-.8.1a4.278 4.278 0 0 1-.024-.455v-2.08a1.214 1.214 0 0 1-.8-1.138 1.2 1.2 0 0 1 1.2-1.211 1.2 1.2 0 0 1 1.2 1.211A1.214 1.214 0 0 1 4-15.6v2.083a2.562 2.562 0 0 0 .024.352zM20-19.106a.413.413 0 0 0-.256-.379L13.6-21.867V-7.28L19.456-5a.449.449 0 0 0 .144.024.372.372 0 0 0 .224-.073.4.4 0 0 0 .176-.334c-.008-3.633-.016-13.231 0-13.691zm-5.432 2.171a3.566 3.566 0 0 1 2.168 2.712l-.784.145a2.769 2.769 0 0 0-1.672-2.107zM16.4-9.08a1.2 1.2 0 0 1-1.2-1.211 1.214 1.214 0 0 1 .8-1.138v-1.114h.8v1.114a1.214 1.214 0 0 1 .8 1.138 1.2 1.2 0 0 1-1.2 1.211z" transform="translate(0 21.979)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 390">
              <g data-name="Group 168" style="clip-path:url(#15sg054e8a)">
                <path data-name="Path 87" d="M-5-26.979h28v25.072H-5z" transform="translate(1 22.943)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      },
      {
        title: "Tech Stack Strategy",
        logo: `
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20.004 20">
            <defs>
              <clipPath id="f7ugbyr2ya">
                <path data-name="Path 70" d="M20.984-11.182a.875.875 0 0 1-.464.728l-8.666 5.233A1.729 1.729 0 0 1 10.99-5a1.7 1.7 0 0 1-.855-.216l-8.667-5.23a.878.878 0 0 1-.456-.736.875.875 0 0 1 .464-.728l.951-.584 7.2 4.345a2.622 2.622 0 0 0 1.359.368 2.672 2.672 0 0 0 1.359-.36l7.228-4.353.951.568a.883.883 0 0 1 .46.744zM1.46-17.92l8.667 5.225a1.727 1.727 0 0 0 .855.224 1.627 1.627 0 0 0 .855-.224L20.5-17.92a.87.87 0 0 0 .464-.736.9.9 0 0 0-.456-.744l-8.678-5.377a1.719 1.719 0 0 0-1.711 0l-8.683 5.369a.89.89 0 0 0-.456.744.914.914 0 0 0 .48.744zm0 3.721 8.667 5.233a1.735 1.735 0 0 0 .863.224 1.655 1.655 0 0 0 .863-.224l8.667-5.225a.86.86 0 0 0 .464-.736.892.892 0 0 0-.448-.744l-.911-.592-7.284 4.385a2.643 2.643 0 0 1-1.351.36 2.643 2.643 0 0 1-1.351-.36l-7.3-4.4-.887.56a.892.892 0 0 0-.452.767.876.876 0 0 0 .46.751z" transform="translate(-.98 25.005)" style="fill:currentColor"/>
              </clipPath>
            </defs>
            <g data-name="Group 391">
              <g data-name="Group 147" style="clip-path:url(#f7ugbyr2ya)">
                <path data-name="Path 69" d="M-4.02-30.005h28V-2h-28z" transform="translate(.022 26.004)" style="fill:currentColor"/>
              </g>
            </g>
          </svg>
        `
      }
    ]
  }
], partnerListItems = [
  {
    title: "Klaviyo",
    logo: klavyio_logo_default
  },
  {
    title: "Elevar",
    logo: elevar_default
  },
  {
    title: "Fast Simon",
    logo: fast_simon_logo_no_tag_default
  },
  {
    title: "Inveterate",
    logo: inveterate_default
  },
  {
    title: "Tapcart",
    logo: tapcart_logo_default
  },
  {
    title: "Gorgias",
    logo: gorgias_white_default
  },
  {
    title: "Loop",
    logo: loop_isologo_default
  },
  {
    title: "Algolia",
    logo: algolia_default
  },
  {
    title: "Visually",
    logo: visually_lgoo_default
  },
  {
    title: "Narvar",
    logo: narvar_default
  },
  {
    title: "Rebuy",
    logo: rebuy_logo_white_default
  },
  {
    title: "Heatmap.com",
    logo: heatmap_default
  }
];

// app/components/Homepage/FeaturedPortfolio.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
register();
function FeaturedPortfolio() {
  let swiperRef = (0, import_react20.useRef)(null), [isEnd, setIsEnd] = (0, import_react20.useState)(!1), [isBeginning, setIsBeginning] = (0, import_react20.useState)(!0);
  (0, import_react20.useEffect)(() => {
    register();
    let params = {
      injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        `
      ],
      on: {
        slideChange(s) {
          setIsEnd(s.isEnd), setIsBeginning(s.isBeginning);
        }
      },
      spaceBetween: 8,
      slidesPerView: 1.2,
      breakpoints: {
        768: {
          slidesPerView: 3
        }
      }
    };
    Object.assign(swiperRef.current, params), swiperRef.current.initialize(), setIsEnd(swiperRef.current.swiper.isEnd);
  }, []);
  let buttonStyles = `
    z-[1]
    h-16 
    w-16
    transform 
    -translate-y-1/2 
    items-center 
    justify-center 
    absolute 
    top-1/2 
    rounded-full 
    transition 
    duration-200
    flex
    bg-white
    p-5
    hover:bg-black
    hover:text-white
  `;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "pt-5 pb-16 md:py-10 [&_.swiper-button-disabled]:!hidden relative container overflow-visible", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("swiper-container", { init: "false", ref: swiperRef, children: portfolioSlider.map((caseStudy) => {
      let caseStudyKey = (0, import_react20.useId)();
      if (caseStudy != null && caseStudy.image)
        return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("swiper-slide", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "block relative rounded-md overflow-hidden group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "img",
            {
              className: "block aspect-[432/540] object-cover object-center scale-100 group-hover:scale-105 origin-center transition-all duration-500",
              src: caseStudy.image,
              loading: "lazy",
              alt: caseStudy.title ?? ""
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "a",
            {
              href: caseStudy.link,
              target: "_blank",
              style: { backgroundImage: "linear-gradient(to bottom, rgba(63, 73, 73, 0) -12%, #3f494a 92%)" },
              className: "absolute top-0 left-0 flex items-end h-full w-full p-7",
              children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { className: "text-2xl md:text-[40px] text-white", children: caseStudy.title })
            }
          )
        ] }) }, caseStudyKey);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        onClick: () => swiperRef.current.swiper.slidePrev(),
        className: `left-4 -translate-x-1/2 [&_svg]:transform [&_svg]:rotate-180 max-md:hidden ${buttonStyles} ${isBeginning ? "hidden" : "md:flex"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("svg", { viewBox: "0 0 16 16", height: "100%", width: "100%", focusable: "false", role: "img", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: "StyledIconBase-sc-ea9ulj-0 hRnJPC", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("title", { children: "ChevronRight icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { fillRule: "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        onClick: () => swiperRef.current.swiper.slideNext(),
        className: `right-[calc(10%+32px)] md:right-4 translate-x-1/2 ${buttonStyles} ${isEnd ? "hidden" : "flex"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("svg", { viewBox: "0 0 16 16", height: "100%", width: "100%", focusable: "false", role: "img", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: "StyledIconBase-sc-ea9ulj-0 hRnJPC", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("title", { children: "ChevronRight icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { fillRule: "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })
        ] })
      }
    )
  ] }) });
}

// app/components/PortfolioList.tsx
var import_react21 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function PortfolioList() {
  let toggleModal = (0, import_react21.useContext)(ModalContext);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "bg-[#141414] text-white w-full py-10 md:py-20", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between py-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "font-body text-lg md:text-2xl", children: "Notable Merchants" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "button",
        {
          className: "font-NeueHaasGroteskDisplay text-white cursor-pointer text-sm whitespace-nowrap",
          onClick: () => toggleModal ? toggleModal() : null,
          children: "Become a Client"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("ul", { className: "grid grid-cols-2 md:grid-cols-4 border border-[#2c2c2c] bg-[#2c2c2c] gap-px rounded-md overflow-hidden", children: portfolioListItems.map(({ title, logo, link }) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "block relative aspect-[320/190] bg-[#141414] group", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "a",
      {
        href: link,
        target: "_blank",
        className: "absolute top-0 left-0 h-full w-full flex items-center justify-center transform transition duration-500 origin-center scale-105 group-hover:scale-110",
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "img",
          {
            className: "block object-contain object-center w-1/2 h-1/3",
            src: logo,
            alt: title
          }
        )
      }
    ) }, `${(0, import_react21.useId)()}`)) })
  ] }) });
}

// app/components/Footer/Footer.tsx
var import_react22 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function Footer2() {
  let toggleModal = (0, import_react22.useContext)(ModalContext);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "bg-white py-16 md:py-52", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "container flex flex-col items-center justify-center gap-6 md:gap-14", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("strong", { className: "text-3xl md:text-[54px] font-semibold leading-[1.37] text-center max-w-[550px]", children: "Take your Shopify site to the next level today." }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "button",
        {
          className: "font-NeueHaasGroteskDisplay border border-black text-black bg-transparent py-4 px-8 rounded-[3px] text-sm hover:bg-black hover:text-white transition duration-200",
          onClick: () => toggleModal ? toggleModal() : null,
          children: "Contact Us"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("hr", { className: "border-0 border-b border-current" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "bg-white py-16 text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "container flex flex-col gap-14 relative", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " / Sparky / Operating Worldwide"
    ] }) }) })
  ] });
}

// app/components/Offerings.tsx
var import_react23 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function Offerings() {
  let toggleModal = (0, import_react23.useContext)(ModalContext);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "bg-[#f4df73]", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "container items-center text-center pt-20 pb-14 md:pt-[120px] md:pb-[100px] flex flex-col w-full gap-11", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("strong", { className: "font-semibold text-3xl md:text-[54px] leading-[1.37] max-w-[996px]", children: "We are a partner for brands with diverse eComm technical and business needs." }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "button",
        {
          className: "font-NeueHaasGroteskDisplay font-bold text-lg border-b-2 border-current w-max transition duration-200 origin-center scale-100 hover:scale-105",
          onClick: () => toggleModal ? toggleModal() : null,
          children: "Let's Talk"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "bg-gradient-to-b from-[#f4df73] via-white from-[30%] via-30% md:from-[50%] md:via-50%", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "container grid md:grid-cols-3 gap-2 text-white", children: offerings.map(({ title, listItems }) => {
      let id = (0, import_react23.useId)();
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "bg-[#141414] rounded-md p-9 md:p-11 flex flex-col gap-6 md:gap-[30px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("strong", { className: "font-body text-lg md:text-2xl", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "ul",
          {
            className: "border border-[#2c2c2c] bg-[#2c2c2c] gap-px rounded-md flex flex-col overflow-hidden",
            children: listItems.map(({ title: title2, logo }) => {
              let subId = (0, import_react23.useId)();
              return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("li", { className: "flex items-center w-full p-6 bg-[#141414] gap-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  "span",
                  {
                    className: "block h-[50px] w-[50px] p-3 text-[#f4df73] border border-[#f4df73] rounded-full",
                    dangerouslySetInnerHTML: { __html: logo }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: title2 })
              ] }, subId);
            })
          },
          id
        )
      ] }, id);
    }) }) })
  ] });
}

// app/assets/sparkyos.png
var sparkyos_default = "/build/_assets/sparkyos-XIVX4AZQ.png";

// app/components/Homepage/TextImageColumns.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function TextImageColumns() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { className: "md:right-edge-container grid md:grid-cols-2 pt-14 gap-9 md:py-28 md:gap-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex flex-col text-center items-center justify-center gap-6 md:gap-12 max-md:container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "inline-flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h1", { className: "text-3xl md:text-[54px] font-semibold leading-[1.37]", children: "Service as a Software\u2122" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "md:text-2xl font-body", children: "50% Agency, 50% Platform, 100% Ecomm" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-xl leading-normal max-w-[577px]", children: "Our proprietary software, Sparky OS, enables us to maximize our investments in senior eCommerce talent and avoid administrative bloat commonly experienced with agencies; this leads to the most growth-minded, merchant-friendly service model without any hourly rates, scope creep, or fluff." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "img",
      {
        loading: "lazy",
        className: "block",
        src: sparkyos_default,
        alt: ""
      }
    )
  ] });
}

// app/components/Homepage/FeaturedPartners.tsx
var import_react24 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function FeaturedPartners() {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "bg-[#141414] text-white w-full py-10 md:py-20", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex items-center justify-between py-5 md:py-10", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "font-body text-xl md:text-2xl", children: "Partners" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ul", { className: "grid grid-cols-2 md:grid-cols-4 border border-[#2c2c2c] bg-[#2c2c2c] gap-px rounded-md overflow-hidden", children: partnerListItems.map(({ title, logo }) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "block relative aspect-[320/190] bg-[#141414] group", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "span",
      {
        className: "absolute top-0 left-0 h-full w-full flex items-center justify-center transform transition duration-500 origin-center scale-105 group-hover:scale-110",
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "img",
          {
            className: "block object-contain object-center w-1/2 h-1/3",
            src: logo,
            alt: title
          }
        )
      }
    ) }, `${(0, import_react24.useId)()}`)) })
  ] }) });
}

// app/routes/_index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime"), meta = () => [
  { title: "Sparky | Home" },
  { name: "description", content: "We design, build, & optimize high-converting eCommerce sites that glow with brand personality." }
];
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "homepage", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Hero, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FeaturedPortfolio, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(PortfolioList, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Offerings, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TextImageColumns, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FeaturedPartners, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Footer2, {})
  ] });
}

// app/routes/elevar.tsx
var elevar_exports = {};
__export(elevar_exports, {
  default: () => ElevarPage
});

// app/components/ContentArea.tsx
var import_classnames = __toESM(require("classnames")), import_jsx_runtime29 = require("react/jsx-runtime");
function ContentArea(props) {
  let section_classes = (0, import_classnames.default)(props.className, {
    ContentArea: !0,
    "ContentArea--reverse": props.layout === "reverse",
    "Component--header-padded": props.topComponent,
    hero: props.topComponent
  }), text_classes = (0, import_classnames.default)({
    ContentArea__text: !0,
    "justify-start": props.textVerticalPosition === "top",
    "justify-center": props.textVerticalPosition === "middle",
    "justify-end": props.textVerticalPosition === "bottom"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "section",
    {
      id: props.id,
      className: section_classes,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: text_classes,
            children: props.children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: "ContentArea__media",
            children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "img",
              {
                src: props.image
              }
            )
          }
        )
      ]
    }
  );
}

// app/assets/quick_wins.png
var quick_wins_default = "/build/_assets/quick_wins-JR6ZSL4F.png";

// app/assets/sparkydude.png
var sparkydude_default = "/build/_assets/sparkydude-R3X7OUN4.png";

// app/assets/personalized_login_touches.png
var personalized_login_touches_default = "/build/_assets/personalized_login_touches-FGHZKNWB.png";

// app/components/forms/ElevarSubmission.tsx
var import_react25 = require("@remix-run/react"), import_react26 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
function ElevarSubmissionForm() {
  let [submitting, setSubmitting] = (0, import_react26.useState)(!1), [submitted, setSubmitted] = (0, import_react26.useState)(!1), handleSubmit = (0, import_react26.useCallback)(async (event2) => {
    event2.preventDefault(), setSubmitting(!0);
    let form_data = new FormData(event2.currentTarget);
    form_data.append("type", "quick wins"), await fetch("https://usebasin.com/f/6d5879c9a3ba", {
      method: "post",
      body: form_data
    }), setSubmitting(!1), setSubmitted(!0);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("section", { className: "container ElevarSubmissionForm", children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "h2", children: "Thank you for your submission!" }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("button", { className: "button--secondary my-5", onClick: () => setSubmitted(!1), children: "Send Another" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react25.Form, { className: "form form__wrapper", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: "brand_name", children: "What's your brand name?" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "input",
        {
          id: "brand_name",
          name: "brand_name",
          type: "text",
          placeholder: "Brand Name",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: "brand_site", children: "What's your brand website?" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "input",
        {
          id: "brand_site",
          name: "brand_site",
          type: "text",
          placeholder: "brandwebsite.com",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: "name", children: "What's your name?" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "input",
        {
          id: "name",
          name: "name",
          type: "text",
          placeholder: "First Last",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: "email", children: "Where should we send your CRO Quick Wins?" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          placeholder: "you@brand.com",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-center justify-center flex my-8", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      "button",
      {
        disabled: submitting,
        type: "submit",
        className: "button--secondary flex gap-5 items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: "Get My Free CRO Quick Wins" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Arrow_default, { className: "w-3" })
        ]
      }
    ) })
  ] }) });
}

// app/components/forms/ElevarSubmissionSimple.tsx
var import_react27 = require("@remix-run/react"), import_react28 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
function ElevarSubmissionSimpleForm() {
  let [submitting, setSubmitting] = (0, import_react28.useState)(!1), [submitted, setSubmitted] = (0, import_react28.useState)(!1), handleSubmit = (0, import_react28.useCallback)(async (event2) => {
    event2.preventDefault(), setSubmitting(!0);
    let form_data = new FormData(event2.currentTarget);
    form_data.append("type", "checklist"), await fetch("https://usebasin.com/f/6d5879c9a3ba", {
      method: "post",
      body: form_data
    }), setSubmitting(!1), setSubmitted(!0);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("section", { className: "container ElevarSubmissionForm", children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "h2", children: "Thank you for your submission!" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("button", { className: "button--secondary my-5", onClick: () => setSubmitted(!1), children: "Send Another" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_react27.Form, { className: "form form__wrapper", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: "name", children: "What's your name?" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "input",
        {
          id: "name",
          name: "name",
          type: "text",
          placeholder: "First Last",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "form__inputGroup", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: "email", children: "What's your email?" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          placeholder: "you@brand.com",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "text-center justify-center flex my-8", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "button",
      {
        disabled: submitting,
        type: "submit",
        className: "button--secondary flex gap-5 items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: "Get the CRO Readiness Checklist" }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Arrow_default, { className: "w-3" })
        ]
      }
    ) })
  ] }) });
}

// app/routes/elevar.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function ElevarPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      ContentArea,
      {
        layout: "standard",
        topComponent: !0,
        image: quick_wins_default,
        textVerticalPosition: "middle",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { children: "CRO Readiness Checklist" }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "h4 leading-8 font-normal", children: "Looking to improve conversion rate? Before you start testing, download this checklist to determine site readiness and avoid common pitfalls that hinder growth." })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ElevarSubmissionSimpleForm, {}),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      ContentArea,
      {
        layout: "standard",
        image: personalized_login_touches_default,
        textVerticalPosition: "middle",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "img",
            {
              src: sparkydude_default,
              className: "w-[144px]"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { children: "Get 3 CRO Quick Wins" }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "h4 leading-8 font-normal", children: "Send us your site and we\u2019ll give you 3 brand-specific ideas to level up this holiday season." })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ElevarSubmissionForm, {}),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Footer2, {})
  ] });
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => Index4
});
var import_jsx_runtime33 = require("react/jsx-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "bg-ivory", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "container text-center flex items-center justify-center min-h-screen text-5xl font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { children: "404 - Page not found" }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JI64AUKH.js", imports: ["/build/_shared/chunk-NPVKMBEQ.js", "/build/_shared/chunk-GDLBX7ER.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F4T7ZFEX.js", imports: ["/build/_shared/chunk-EE2IS6R6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-MPRPCM2Z.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G6FO2BAZ.js", imports: ["/build/_shared/chunk-RNNG2IQT.js", "/build/_shared/chunk-GGVPIROO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/checklist": { id: "routes/checklist", parentId: "root", path: "checklist", index: void 0, caseSensitive: void 0, module: "/build/routes/checklist-5VKNHNVY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/elevar": { id: "routes/elevar", parentId: "root", path: "elevar", index: void 0, caseSensitive: void 0, module: "/build/routes/elevar-CS74H2O7.js", imports: ["/build/_shared/chunk-GGVPIROO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/elevar-summit": { id: "routes/elevar-summit", parentId: "root", path: "elevar-summit", index: void 0, caseSensitive: void 0, module: "/build/routes/elevar-summit-66TNCGMJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portfolio.$client": { id: "routes/portfolio.$client", parentId: "root", path: "portfolio/:client", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio.$client-T6NG5RDV.js", imports: ["/build/_shared/chunk-5VCN46LX.js", "/build/_shared/chunk-RNNG2IQT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portfolio._index": { id: "routes/portfolio._index", parentId: "root", path: "portfolio", index: !0, caseSensitive: void 0, module: "/build/routes/portfolio._index-APKVZTJV.js", imports: ["/build/_shared/chunk-5VCN46LX.js", "/build/_shared/chunk-RNNG2IQT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "75d20754", hmr: void 0, url: "/build/manifest-75D20754.js" };

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
  "routes/portfolio.$client": {
    id: "routes/portfolio.$client",
    parentId: "root",
    path: "portfolio/:client",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_client_exports
  },
  "routes/portfolio._index": {
    id: "routes/portfolio._index",
    parentId: "root",
    path: "portfolio",
    index: !0,
    caseSensitive: void 0,
    module: portfolio_index_exports
  },
  "routes/elevar-summit": {
    id: "routes/elevar-summit",
    parentId: "root",
    path: "elevar-summit",
    index: void 0,
    caseSensitive: void 0,
    module: elevar_summit_exports
  },
  "routes/checklist": {
    id: "routes/checklist",
    parentId: "root",
    path: "checklist",
    index: void 0,
    caseSensitive: void 0,
    module: checklist_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/elevar": {
    id: "routes/elevar",
    parentId: "root",
    path: "elevar",
    index: void 0,
    caseSensitive: void 0,
    module: elevar_exports
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
