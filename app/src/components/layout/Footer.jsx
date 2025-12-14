import siteConfig from "../../config/siteConfig.json"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ===== DESKTOP VIEW (unchanged layout, dynamic data) ===== */}
        <div className="hidden md:flex justify-between items-start flex-wrap gap-10">
          
          {/* About Us */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-6">About Us</h3>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href={siteConfig.footer.about.ourStory} className="hover:text-[#E67E22]">Our Story</a></li>
              <li><a href={siteConfig.footer.about.queryForm} className="hover:text-[#E67E22]">User Query Form</a></li>
              <li>
                Contact Us
                <ul className="mt-1 space-y-1">
                  <li>
                    Email:
                    <a
                      href={`mailto:${siteConfig.footer.about.contactEmail}`}
                      className="ml-1 text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.about.contactEmail}
                    </a>
                  </li>
                  <li>
                    Call:
                    <a
                      href={`tel:${siteConfig.footer.about.contactPhone}`}
                      className="ml-1 text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.about.contactPhone}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center flex-1">
            <h3 className="text-2xl font-bold mb-6">Connect with Us</h3>
            <div className="flex justify-center gap-6 mb-4 text-2xl">
              <a href={siteConfig.socialLinks.facebook} className="text-[#E67E22] hover:text-white">
                <FaFacebookF size={26}/>
              </a>
              <a href={siteConfig.socialLinks.instagram} className="text-[#E67E22] hover:text-white">
                <FaInstagram size={25}/>
              </a>
              <a href={siteConfig.socialLinks.twitter} className="text-[#E67E22] hover:text-white">
                <FaXTwitter size={25}/>
              </a>
              <a href={siteConfig.socialLinks.youtube} className="text-[#E67E22] hover:text-white">
                <FaYoutube size={29}/>
              </a>
            </div>
            <p className="text-base font-bold">© 2025 {siteConfig.siteName} – All Rights Reserved</p>
          </div>

          {/* Help */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-6">Help</h3>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href={siteConfig.footer.help.supportPage} className="hover:text-[#E67E22]">Support Page</a></li>
              <li><a href={siteConfig.footer.help.faq} className="hover:text-[#E67E22]">FAQ</a></li>
              <li>
                Support Contacts
                <ul className="mt-1 space-y-1">
                  <li>
                    Email:
                    <a
                      href={`mailto:${siteConfig.footer.help.supportEmail}`}
                      className="ml-1 text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.help.supportEmail}
                    </a>
                  </li>
                  <li>
                    Call:
                    <a
                      href={`tel:${siteConfig.footer.help.supportPhone}`}
                      className="ml-1 text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.help.supportPhone}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== MOBILE VIEW (new layout, dynamic data) ===== */}
        <div className="grid grid-cols-2 gap-8 text-center md:hidden">
          
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href={siteConfig.footer.about.ourStory} className="hover:text-[#E67E22]">Our Story</a></li>
              <li><a href={siteConfig.footer.about.queryForm} className="hover:text-[#E67E22]">User Query Form</a></li>
              <li>
                Contact Us
                <ul className="mt-1 space-y-1">
                  <li>
                    <a
                      href={`mailto:${siteConfig.footer.about.contactEmail}`}
                      className="text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.about.contactEmail}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.footer.about.contactPhone}`}
                      className="text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.about.contactPhone}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href={siteConfig.footer.help.supportPage} className="hover:text-[#E67E22]">Support Page</a></li>
              <li><a href={siteConfig.footer.help.faq} className="hover:text-[#E67E22]">FAQ</a></li>
              <li>
                Support Contacts
                <ul className="mt-1 space-y-1">
                  <li>
                    <a
                      href={`mailto:${siteConfig.footer.help.supportEmail}`}
                      className="text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.help.supportEmail}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.footer.help.supportPhone}`}
                      className="text-[#E67E22] font-bold hover:text-white"
                    >
                      {siteConfig.footer.help.supportPhone}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Social (full width row) */}
          <div className="col-span-2 mt-6">
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <div className="flex justify-center gap-6 mb-4 text-2xl">
              <a href={siteConfig.socialLinks.facebook} className="text-[#E67E22] hover:text-white">
                <FaFacebookF size={26}/>
              </a>
              <a href={siteConfig.socialLinks.instagram} className="text-[#E67E22] hover:text-white">
                <FaInstagram size={25}/>
              </a>
              <a href={siteConfig.socialLinks.twitter} className="text-[#E67E22] hover:text-white">
                <FaXTwitter size={25}/>
              </a>
              <a href={siteConfig.socialLinks.youtube} className="text-[#E67E22] hover:text-white">
                <FaYoutube size={29}/>
              </a>
            </div>
            <p className="text-sm font-bold">© 2025 {siteConfig.siteName} – All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
