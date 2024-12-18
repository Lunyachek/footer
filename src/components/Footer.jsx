import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';

import {
  footerLogo, svgSprite, isFooterDark, footerIcons, displayCreatedByBlock,
} from '@edx/brand'; // eslint-disable-line import/no-unresolved
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

import messages from './Footer.messages';

class SiteFooter extends React.PureComponent {
  // FIXME: Remove `footerLinks` in the next release, use getFooterLinks instead.
  //        According export in the brand-openedx component should be removed as well.
  constructor(props) {
    super(props);
    this.state = {
      getFooterLinks: null,
      footerLinks: [],
    };
  }

  componentDidMount() {
    import('@edx/brand') // eslint-disable-line import/no-unresolved
      .then((brand) => {
        this.setState({
          getFooterLinks: brand.getFooterLinks || null,
          footerLinks: brand.footerLinks || [],
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.warn('Failed to load @edx/brand:', error);
      });
  }

  render() {
    const { intl } = this.props;
    const { getFooterLinks, footerLinks } = this.state;
    const config = getConfig();
    const footerLinksList = typeof getFooterLinks === 'function' ? getFooterLinks(config) : footerLinks;

    return (
      <footer
        role="contentinfo"
        className="footer"
      >
        <div className="holder">
          <NavLinks footerLinks={footerLinksList} />
          <div className="footer-holder">
            {displayCreatedByBlock && (
              <div className="footer-support">
                <a
                  className="footer-support__edx"
                  href="https://open.edx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
                >
                  <img
                    src={
                      isFooterDark
                        ? 'https://files.edx.org/openedx-logos/open-edx-logo-tag-dark.png'
                        : 'https://files.edx.org/openedx-logos/open-edx-logo-tag.png'
                    }
                    alt={intl.formatMessage(messages['footer.logo.altText'])}
                  />
                </a>
                <a
                  className="footer-support__rg"
                  href="https://raccoongang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="release-name">Redwood</span>
                  by Raccoon Gang
                  <svg className={
                    isFooterDark
                      ? 'footer-support__logo'
                      : 'footer-support__logo footer-support__logo--is-modified'
                  }
                  >
                    <use href={`${svgSprite}#logoRaccoon`} />
                  </svg>
                </a>
              </div>
            )}
            <SocialLinks footerIcons={footerIcons} svgSprite={svgSprite} />
            <div className="footer-logo">
              <a href={`${config.LMS_BASE_URL}/`}>
                <img
                  src={footerLogo}
                  alt={intl.formatMessage(messages['footer.logo.altText'])}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SiteFooter);
