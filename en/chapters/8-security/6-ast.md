# 🔐 Security

## Static Analysis & AST

As part of my [NodeSecure](https://github.com/NodeSecure/cli) project, one of my objectives was to succeed in detecting various and varied “malicious” codes that have been listed through various attacks.

When we talk about static analysis, it is therefore a question of analyzing a source code without ever executing it (otherwise it is rather a dynamic analysis). For this we will transform the code into AST format which will make the analysis of the code much simpler.

I recently gave a [talk in French](https://www.youtube.com/watch?v=zSYrEbggqWA&feature=youtu.be) on the manipulation of AST in JavaScript which I recommend you watch. It is with these techniques that I managed to create my [JS-X-Ray](https://github.com/fraxken/js-x-ray) project (which is a SAST -> Static Application Security Testing tool).

Other talks related to Abstract Syntax Trees:

- [Machine Powered Refactoring: Leverage AST's to Push Your Legacy Code (& the Web) Forward](https://www.youtube.com/watch?v=s8g_cBfm9d0&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=2)
- [What the AST ?](https://www.youtube.com/watch?v=BtD2OrlLBhI&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=36)
- [What is an Abstract Syntax Tree? (Nearform)](https://www.nearform.com/blog/what-is-an-abstract-syntax-tree/)

Articles written by NodeSecure core members:

- [A technical tale of NodeSecure - Chapter 2](https://dev.to/nodesecure/a-technical-tale-of-nodesecure-chapter-2-2p17)
- [🕶 What it takes to build a Static Analysis tool](https://dev.to/antoinecoulon/what-it-takes-to-build-a-static-analysis-tool-4p40)

---

⬅️ [🔐 Security: Common Security Breach](./5-common-breach.md) |
➡️ [🔐 Security: Additional links and resources to read](./7-link-resources.md)
