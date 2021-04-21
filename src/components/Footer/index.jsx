import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {/*<SocialLogo to='/'>Special meat</SocialLogo>*/}
             <SocialLogo to='/'></SocialLogo>
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'  rel='noopener noreferrer'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/' target='_blank' aria-label='Instagram'  rel='noopener noreferrer'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter' rel='noopener noreferrer' >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
