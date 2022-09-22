import Icon from "components/Icon";
import SearchBar from "components/SearchBar";
import React from "react";
import useSearchTerm from "utils/useSearchTerm";
import appList from "../../appList.json";

interface Props {
  inputSearchAppsRef: React.RefObject<HTMLInputElement>;
}

const Sidebar = ({ inputSearchAppsRef }: Props) => {
  const { query, handleChange } = useSearchTerm();

  const handleClick = (link: string) => () => {
    window.open(link, "_blank");
  };

  return (
    <aside className="apps h-screen bg-crust overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 p-4  backdrop-blur ">
        <SearchBar
          size="md"
          placeholder="Search apps..."
          onChange={handleChange}
          ref={inputSearchAppsRef}
        />
      </div>

      <ul className="flex flex-col gap-4 px-4 pb-4">
        {appList
          .filter((app) => app.name.toLowerCase().includes(query.toLowerCase()))
          .map((app, idx) => (
            <button
              type="button"
              className="flex gap-4 px-3 py-2 bg-surface0 text-subtext0 rounded-md cursor-pointer transition-all ease-linear hover:bg-surface1"
              key={idx}
              onClick={handleClick(app.link)}
            >
              <Icon name={app.icon} />
              <span>{app.name}</span>
            </button>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
