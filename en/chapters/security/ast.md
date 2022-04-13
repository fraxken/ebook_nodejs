# 🔐 Security

## Static Analysis & AST

As part of my [Node-secure](https://github.com/ES-Community/nsecure) project, one of my objectives was to succeed in detecting various and varied “malicious” codes that have been listed through various attacks (several can be found on [badjs](https://badjs.org/)).

When we talk about static analysis, it is therefore a question of analyzing a source code without ever executing it (otherwise it is rather a dynamic analysis). For this we will transform the code into AST format which will make the analysis of the code much simpler.

I recently gave a [talk in French](https://www.youtube.com/watch?v=zSYrEbggqWA&feature=youtu.be) on the manipulation of AST in JavaScript which I recommend you watch. It is with these techniques that I managed to create my [JS-X-Ray](https://github.com/fraxken/js-x-ray) project (which is a SAST -> Static Application Security Testing tool).

Other talks related to Abstract Syntax Trees:

- EN [Machine Powered Refactoring: Leverage AST's to Push Your Legacy Code (& the Web) Forward](https://www.youtube.com/watch?v=s8g_cBfm9d0&list=PLfMzBWSH11xaZvhv1X5Fq1H-oMdnAtG6k&index=2)
- EN [What the AST ?](https://www.youtube.com/watch?v=BtD2OrlLBhI&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=36)

---

⬅️ [🔐 Security: Common Security Breach](./common-breach.md) |
➡️ [🔐 Security: Additional links and resources to read](./link-resources.md)