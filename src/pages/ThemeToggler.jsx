import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/reducers/ThemeSlice";
import { CiLight } from "react-icons/ci";
import { TiAdjustBrightness } from "react-icons/ti";
function ThemeToggler() {
  let theme = useSelector(state => state.ThemeReducer.darkMode)
  const dispatch = useDispatch()
  return (
    <button
    className="flex items-center gap-2 bg-gray-200 absolute right-10 text-black dark:bg-black dark:text-white text-xl px-4 top-1 py-1 rounded-2xl font-semibold shadow transition"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme ? <CiLight className="text-2xl" /> : <TiAdjustBrightness className="text-2xl" />}
      {theme ?  "Light": "Dark"}
    </button>
  );
}

export default ThemeToggler;