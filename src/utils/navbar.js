import NamozHaqidaPage from "../pages/NamozHaqida";
import NamozOqiymizPage from "../pages/NamozOqiymiz";
import NamozVaqtlariPage from "../pages/NamozVaqtlari";

export const navbar = [
    {
        id: 1,
        title: 'Namoz haqida',
        path: '/namoz-haqida',
        Element: <NamozHaqidaPage/>,
        private: false,
    },
    {
        id: 2,
        title: 'Namoz vaqtlari',
        path: '/namoz-vaqtlari',
        Element: <NamozVaqtlariPage/>,
        private: false,
    },
    {
        id: 3,
        title: "Namoz o'qishni o'rganamiz",
        path: '/namoz-oqish',
        Element: <NamozOqiymizPage/>,
        private: false,
    }
]