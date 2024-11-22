import { LiaTelegramPlane } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";


export default function Social({ className }) {
  const socialIcons = [
    {
      name: 'telegram',
      icon: <LiaTelegramPlane/>,
      url: 'https://t.me/preztsolana'
    },
    {
      name: 'twitter',
      icon: <FaXTwitter />,
      url: 'https://x.com/PreztSolana'
    },
  ];
  return (
    <ul className={`social-list flex items-center flex-wrap gap-4 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" className="social-link border-2 border-black flex items-center justify-center">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}