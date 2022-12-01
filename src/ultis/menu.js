import icons from "./icons"

const { MdOutlineLibraryMusic, FaRegPlayCircle, AiOutlineLineChart, MdOutlineFeed } = icons

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <FaRegPlayCircle size={24} />
    },
    {
        path: 'zing-char',
        text: '#Zingchart',
        icons: <AiOutlineLineChart size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineFeed size={24} />
    },
]