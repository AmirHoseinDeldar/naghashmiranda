import client1 from "./assets/client-1.jpg";
import client2 from "./assets/client-2.jpg";
import client3 from "./assets/client-3.jpg";
import client4 from "./assets/client-4.jpg";
import client5 from "./assets/client-5.jpg";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent, MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLaptopCode,
  FaBlender,
} from "react-icons/fa6";
import { FaApple, FaFacebookSquare, FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

import { CgFigma } from "react-icons/cg";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

export const tabs = [
  { name: "درباره من", id: "about" },
  { name: "مهارت‌ها", id: "skill" },
  { name: "خدمات", id: "services" },
  { name: "پروژه‌ها", id: "projects" },
  { name: "نظرات مشتریان", id: "testimonials" },
];

export const whyChooseMe = [
  {
    title: "تخصص محلی بی‌نظیر",
    icon: <GrUserExpert />,
    link: "",
  },
  {
    title: "تحلیل جامع بازار",
    icon: <IoMdAnalytics />,
    link: "",
  },
  {
    title: "پشتیبانی اختصاصی مشتری",
    icon: <MdOutlineSupportAgent />,
    link: "",
  },
  {
    title: "استراتژی‌های بازاریابی نوآورانه",
    icon: <RiExchange2Fill />,
    link: "",
  },
];

export const services = [
  {
    name: "طراحی پورتفولیوی هنری",
    icon: <FaPaintBrush />,
    description: `ایجاد پورتفولیوهای زیبا و شخصی‌سازی‌شده که مسیر هنری شما را برجسته می‌کند، از نمایش آثار دقیق تا روایت فرآیند خلاقیت شما.`,
  },
  {
    name: "توسعه وب‌سایت",
    icon: <FaLaptopCode />,
    description: `ساخت یک وب‌سایت واکنش‌گرا و حرفه‌ای که به عنوان گالری آنلاین آثار هنری شما عمل می‌کند، با ارائه دسترسی آسان و تجربه کاربری روان برای مشتریان و علاقه‌مندان به هنر.`,
  },
  {
    name: "تولید محتوا و روایت‌پردازی",
    icon: <TfiWrite />,
    description: `خلق محتوای جذاب که داستان پشت هر اثر هنری را به اشتراک می‌گذارد، بازدیدکنندگان را با دیدگاه هنری منحصربه‌فرد شما درگیر کرده و ارتباطات عمیق‌تری با مخاطبان ایجاد می‌کند.`,
  },
];

export const skills = [
  {
    title: "مهارت‌های هنری",
    data: [
      {
        skill: "رنگ‌آمیزی",
        level: "باتجربه",
      },
      {
        skill: "طراحی با مداد",
        level: "متوسط",
      },
      {
        skill: "نقاشی دیجیتال",
        level: "متوسط",
      },
      {
        skill: "نقاشی ذغال",
        level: "متوسط",
      },
    ],
  },
  {
    title: "تکنیک‌های نقاشی",
    data: [
      {
        skill: "آبرنگ",
        level: "باتجربه",
      },
      {
        skill: "اکریلیک",
        level: "باتجربه",
      },
      {
        skill: "نقاشی روغنی",
        level: "متوسط",
      },
      {
        skill: "نقاشی با رنگ‌های پوستی",
        level: "متوسط",
      },
    ],
  },
  {
    title: "ابزار و تکنیک‌ها",
    data: [
      {
        skill: "مداد رنگی",
        level: "باتجربه",
      },
      {
        skill: "پاستل",
        level: "متوسط",
      },
      {
        skill: "برس‌های نقاشی",
        level: "باتجربه",
      },
      {
        skill: "کارتون و کولاژ",
        level: "متوسط",
      },
    ],
  },
];

export const activeProjects = [
  {
    id: 1,
    title: "گالری آثار هنری",
    image:
      "https://www.100honar.com/content/images/paint/%D8%B3%D9%84%D9%81-%D9%BE%D8%B1%D8%AA%D8%B1%D9%87-%D8%AF%D8%B1-%D9%86%D9%82%D8%A7%D8%B4%DB%8C/%D8%B3%D9%84%D9%81-%D9%BE%D8%B1%D8%AA%D8%B1%D9%87-%D9%84%D9%88%D8%B3%DB%8C%D9%86-%D9%81%D8%B1%D9%88%DB%8C%D8%AF.jpg",
    category: "پورتفولیو",
    description: `طراحی و توسعه یک گالری آنلاین برای نمایش آثار هنری، با قابلیت‌های شخصی‌سازی و تعامل آسان برای نمایش و فروش آثار هنری.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop />,
        iconColor: "blue",
      },
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 2,
    title: "پورتفولیوی دیجیتال",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMhLJ9NuW6e_zsz57XG1pm6LEJMzHsoE3qQ&s",
    category: "پورتفولیو",
    description: `ایجاد پورتفولیوی دیجیتال زیبا و کاربرپسند برای نمایش پروژه‌ها و آثار هنری، با طراحی مدرن و قابلیت‌های بهینه‌سازی برای جلب توجه مشتریان و علاقه‌مندان.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop />,
        iconColor: "blue",
      },
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 3,
    title: "نقاشی‌های سفارشی",
    image:
      "https://artang.ir/wp-content/uploads/2019/12/self-portrait-vincent-van-gogh.jpeg",
    category: "سفارشی",
    description: `پروژه‌ای برای ایجاد بستر آنلاین جهت سفارش و نمایش نقاشی‌های سفارشی، با امکان مشاهده نمونه کارها و تعامل مستقیم با هنرمند.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Adobe XD",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 4,
    title: "آثار هنری تعاملی",
    image:
      "https://www.100honar.com/content/images/paint/%D8%B3%D9%84%D9%81-%D9%BE%D8%B1%D8%AA%D8%B1%D9%87-%D8%AF%D8%B1-%D9%86%D9%82%D8%A7%D8%B4%DB%8C/%D8%B3%D9%84%D9%81-%D9%BE%D8%B1%D8%AA%D8%B1%D9%87-%D8%A7%D8%AF%D9%88%D8%A7%D8%B1%D8%AF-%D9%85%D9%88%D9%86%D8%B4.jpg",
    category: "تعاملی",
    description: `طراحی یک اپلیکیشن برای نمایش آثار هنری تعاملی، که به کاربران امکان مشاهده و تعامل با آثار هنری به صورت دیجیتال را می‌دهد.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 5,
    title: "آثار هنری ویدیویی",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH1rMQW37CrAF0Dglicgk4-1ciUUTVuxHzUUia0e9bTXrhsOp9EVGV6zuDfmUO0rJ0KQ&usqp=CAU",
    category: "ویدیویی",
    description: `ایجاد طراحی رابط کاربری برای نمایش آثار هنری ویدیویی، با تمرکز بر تجربه کاربری و تعامل آسان با ویدیوهای هنری.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop />,
        iconColor: "blue",
      },
    ],
  },
  {
    id: 6,
    title: "نمایشگاه هنری مجازی",
    image:
      "https://static2.bartarinha.ir/servev2/zI0NTgxM2RhN/5Uwvb7W7Zm0,/file.jpg",
    category: "نمایشگاه",
    description: `پروژه‌ای برای ایجاد یک نمایشگاه هنری مجازی، با امکان مشاهده و تعامل با آثار هنری از طریق یک بستر آنلاین، مناسب برای نمایشگاه‌های دیجیتال و تعامل با بازدیدکنندگان.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
      },
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
      {
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
        iconColor: "red",
      },
    ],
  },
];

export const clients = [
  {
    image: client1,
    name: "فاطمه صفری",
    review: `کار کردن با این تیم تجربه‌ای فوق‌العاده بود. طراحی و اجرای پروژه به سرعت و با دقت بالا انجام شد. از توجه ویژه‌ای که به جزئیات داشتند بسیار راضی‌ام و نتایج نهایی کاملاً فراتر از انتظارم بود.`,
  },
  {
    image: client2,
    name: "مریم فراهانی",
    review: `تجربه همکاری با این تیم بسیار مثبت بود. طراحی‌ها زیبا و کاربردی هستند و روند کار بسیار حرفه‌ای بود. همچنین، تعامل و پشتیبانی از طرف تیم بسیار عالی و سریع بود.`,
  },
  {
    image: client3,
    name: "سارا احمدی",
    review: `خدمات این تیم به شدت رضایت‌بخش بود. طراحی‌های منحصر به فرد و خلاقانه‌ای ارائه دادند و همه انتظارات من را برآورده کردند. واقعاً از همکاری با این تیم لذت بردم و نتایج کار فوق‌العاده است.`,
  },
  {
    image: client4,
    name: "نازنین شریفی",
    review: `پروژه‌ای که با این تیم انجام دادیم به خوبی پیش رفت. تیم به تمام نیازهای ما توجه کرد و با دقت و حرفه‌ای‌گری بالا کار کرد. کیفیت نهایی بسیار عالی است و از نتیجه کار بسیار راضی‌ام.`,
  },
  {
    image: client5,
    name: "آرزو حسینی",
    review: `همکاری با این تیم یک تجربه مثبت و موفق بود. طراحی‌های فوق‌العاده‌ای داشتند و در طول پروژه همیشه آماده پاسخگویی بودند. از کارشان بسیار راضی هستم و مطمئناً در پروژه‌های آینده نیز با آنها همکاری خواهم کرد.`,
  },
];

export const contactOptions = [
  {
    title: "ایمیل",
    value: "mradinuba@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "شماره تلفن",
    value: "+98 912 345 6789",
    icon: <IoCallOutline />,
  },
  {
    title: "آدرس",
    value: "تهران، خیابان ولیعصر، شماره 123",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare />,
    link: "",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@AmirHoseinDeldar",
  },
];

export const footer = [
  {
    title: "جستجو",
    routes: [
      { name: "درباره من", id: "about" },
      { name: "مهارت‌ها", id: "skill" },
    ],
  },
  {
    title: "اطلاعات معتبر",
    routes: [
      { name: "خدمات", id: "services" },
      { name: "پروژه‌ها", id: "projects" },
      { name: "نظرات مشتریان", id: "testimonials" },
    ],
  },
  {
    title: "سایر",
    routes: [
      { name: "سیاست‌های حفظ حریم خصوصی" },
      { name: "شرایط و مقررات" },
      { name: "سیاست‌های کوکی" },
    ],
  },
];
