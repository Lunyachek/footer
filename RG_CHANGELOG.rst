RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `palm-rg.1`

Footer synchronization with upstream occurs at the time of a major release, such as Palm, Quince, Redwood, etc. If there were no changes in our version of the footer between major releases, we simply add a note stating that a sync was performed with the specified upstream footer version. The synchronization process involves creating a new branch based on the latest upstream tag and transferring our changes there, either by cherry-picking or even manually.

[Unreleased]
************

Fixes
=====
* Dynamic use value for config variables transmitted from dynamic MFE_CONFIG. (DR-176)
    * This fix, should be refactored in the next Open edX release.
* Static links now aware of runtime config

[redwood-rg.2] 2024-11-13
*************************

Changed:
========
* Updated changelog (RGOeX-26827)

[redwood-rg.1] 2024-10-04 (Redwood RG release)
**********************************************

Added:
=====
* OpenedX release label above the RG logo (RGInt-116)

Sync
====
Syncronized with upstream's version 13.2.0 (RGInt-116)

[quince-rg.1] 2024-03-13 (Quince RG release)
*********************************************

Sync
====
Syncronized with upstream's version 12.3.0 (RGOeX-26371, RGOeX-26349)

[palm-rg.1] 2023-11-03 (Palm RG release)
****************************************

Added:
=====
* Footer logo enhancements, added `by Raccoon Gang` text to a clickable area in the link with RG logo (RGOeX-26186)
* add local and CI checkers: add pre-commit-hooks, .gitlab-ci.yml, style checkers (RGOeX-24524)(MC-36)
* restyle component (RGOeX-24524)

  * add support of brand logo from `brand` package
  * add a "powered by" section (links to RG and edX)
  * add a NavLinks section (static page links)
  * add a SocialLinks section (social media links)
