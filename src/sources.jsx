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
} from "react-icons/fa6";
import { FaFacebookSquare, FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

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

export const projects = [
  {
    id: 1,
    title: "گالری آثار هنری",
    image: "https://example.com/gallery-image.jpg",
    category: "پورتفولیو",
    description: `طراحی و توسعه یک گالری آنلاین برای نمایش آثار هنری، با قابلیت‌های شخصی‌سازی و تعامل آسان برای نمایش و فروش آثار هنری.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Photoshop",
        icon: <FaAdobe />,
        iconColor: "blue",
      },
      {
        name: "Illustrator",
        icon: <FaAdobe />,
        iconColor: "orange",
      },
    ],
  },
  {
    id: 2,
    title: "پورتفولیوی دیجیتال",
    image: "https://example.com/portfolio-image.jpg",
    category: "پورتفولیو",
    description: `ایجاد پورتفولیوی دیجیتال زیبا و کاربرپسند برای نمایش پروژه‌ها و آثار هنری، با طراحی مدرن و قابلیت‌های بهینه‌سازی برای جلب توجه مشتریان و علاقه‌مندان.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 3,
    title: "نقاشی‌های سفارشی",
    image: "https://example.com/custom-art-image.jpg",
    category: "سفارشی",
    description: `پروژه‌ای برای ایجاد بستر آنلاین جهت سفارش و نمایش نقاشی‌های سفارشی، با امکان مشاهده نمونه کارها و تعامل مستقیم با هنرمند.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Adobe XD",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 4,
    title: "آثار هنری تعاملی",
    image: "https://example.com/interactive-art-image.jpg",
    category: "تعاملی",
    description: `طراحی یک اپلیکیشن برای نمایش آثار هنری تعاملی، که به کاربران امکان مشاهده و تعامل با آثار هنری به صورت دیجیتال را می‌دهد.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Procreate",
        icon: <FaApple />,
        iconColor: "black",
      },
    ],
  },
  {
    id: 5,
    title: "آثار هنری ویدیویی",
    image: "https://example.com/video-art-image.jpg",
    category: "ویدیویی",
    description: `ایجاد طراحی رابط کاربری برای نمایش آثار هنری ویدیویی، با تمرکز بر تجربه کاربری و تعامل آسان با ویدیوهای هنری.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "After Effects",
        icon: <FaAdobe />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 6,
    title: "نمایشگاه هنری مجازی",
    image: "https://example.com/virtual-exhibition-image.jpg",
    category: "نمایشگاه",
    description: `پروژه‌ای برای ایجاد یک نمایشگاه هنری مجازی، با امکان مشاهده و تعامل با آثار هنری از طریق یک بستر آنلاین، مناسب برای نمایشگاه‌های دیجیتال و تعامل با بازدیدکنندگان.`,
    demoLink: "https://example.com/",
    stack: [
      {
        name: "Blender",
        icon: <FaBlender />,
        iconColor: "blue",
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
