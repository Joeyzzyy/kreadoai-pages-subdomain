import { FaFacebook, FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <>
      <a 
        href="https://www.youtube.com/@kreadoai" 
        className="text-gray-400 hover:text-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">YouTube</span>
        <FaYoutube className="h-5 w-5" />
      </a>
      <a 
        href="https://x.com/kreadoai2023" 
        className="text-gray-400 hover:text-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">X (Twitter)</span>
        <FaXTwitter className="h-5 w-5" />
      </a>
      <a 
        href="https://www.facebook.com/kreadoai" 
        className="text-gray-400 hover:text-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Facebook</span>
        <FaFacebook className="h-5 w-5" />
      </a>
      <a 
        href="https://discord.com/invite/d9uu5STTwp" 
        className="text-gray-400 hover:text-gray-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Discord</span>
        <FaDiscord className="h-5 w-5" />
      </a>
    </>
  );
};

export default SocialIcons;