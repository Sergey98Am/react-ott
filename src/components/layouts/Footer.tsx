import { footerNav } from "@/constants";
import Container from "../ui/Container";
import { Separator } from "../ui/Separator";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import ctl from "@netlify/classnames-template-literals";

// When there is a class reusing, used ctl()

const footerItem = ctl(
  `space-y-4 
  sm:space-y-5
  2xl:space-y-6`,
);

const footerItemTitle = ctl(
  `text-base 
  !font-semibold 
  sm:text-lg 
  2xl:text-xl`,
);

const footerIconItem = ctl(
  `rounded-lg border 
  border-dark-black-15 
  bg-dark-black-10 
  p-3 
  2xl:p-4`,
);

const footerIcon = ctl(
  `h-5 
  w-5 
  2xl:h-6 
  2xl:w-6`,
);

const footerBelowItem = ctl(
  `text-sm 
  2xl:text-lg`,
);

const Footer = () => {
  return (
    <div className="bg-dark-black-06 pb-5 pt-12 sm:pb-10 sm:pt-20 2xl:pb-12 2xl:pt-24">
      <Container>
        <div className="grid gap-y-12 lg:gap-y-20 2xl:gap-y-24">
          <div className="grid grid-cols-2 gap-y-[30px] sm:grid-cols-4 sm:gap-5 lg:grid-cols-6 2xl:gap-[30px]">
            {/* Footer items */}
            {footerNav.map((item, index) => (
              <div key={index} className={footerItem}>
                <div className={footerItemTitle}>{item.title}</div>
                <ul className="space-y-2 sm:space-y-2.5 2xl:space-y-3.5">
                  {item.items.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-sm font-medium text-grey-grey-60 sm:text-base 2xl:text-lg"
                    >
                      <a href={link.href} target="_blank">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Icons */}
            <div className={`icons ${footerItem}`}>
              <div className={footerItemTitle}>Connect With Us</div>
              <div className="flex space-x-2.5 2xl:space-x-2.5">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className={footerIconItem}
                >
                  <Facebook className={footerIcon} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className={footerIconItem}
                >
                  <Twitter className={footerIcon} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className={footerIconItem}
                >
                  <LinkedIn className={footerIcon} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright items */}
          <div className="space-y-5 2xl:space-y-6">
            <Separator />
            <div className="flex flex-col space-y-5 text-grey-grey-60 sm:flex-row sm:justify-between sm:space-y-0">
              <div className={footerBelowItem}>
                ©{new Date().getFullYear()} streamvib, All Rights Reserved
              </div>
              <div className="flex items-center space-x-4 2xl:space-x-5">
                <div className={footerBelowItem}>
                  <a href="">Terms of Use</a>
                </div>
                <Separator orientation="vertical" />
                <div className={footerBelowItem}>
                  <a href="">Privacy Policy</a>
                </div>
                <Separator orientation="vertical" />
                <div className={footerBelowItem}>
                  <a href="">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
