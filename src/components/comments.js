import React from "react"

export const Comments = ({ repo, issueTerm, theme }) => (
  <section
    ref={elem => {
      if (!elem) {
        return
      }
      const scriptElem = document.createElement("script")
      scriptElem.src = "https://utteranc.es/client.js"
      scriptElem.async = true
      scriptElem.crossOrigin = "anonymous"
      scriptElem.setAttribute("repo", repo)
      scriptElem.setAttribute("issue-term", issueTerm || "pathname")
      scriptElem.setAttribute("theme", theme || "github-light")
      elem.appendChild(scriptElem)
    }}
  />
)
