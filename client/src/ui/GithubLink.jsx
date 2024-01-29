import Icon from "./Icon";
import { FaGithub } from "react-icons/fa6";

function GithubLink() {
  return (
    <a
      href="https://github.com/avanich28/mini-message-board.git"
      className="flex flex-col items-center gap-1 hover:text-red-700 transition-all"
    >
      <Icon className="text-[40px]">
        <FaGithub />
      </Icon>
      <p className="text-sm">&copy; Copyright by avanich28</p>
    </a>
  );
}

export default GithubLink;
