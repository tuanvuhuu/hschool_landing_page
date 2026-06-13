// Thông tin trung tâm của trang — chỉnh ở đây để cập nhật toàn site.
export const site = {
  name: "HSchool",
  fullName: "Mầm non song ngữ HSchool",
  slogan: "Greatness Starts From Here",
  hotline: "032 990 3869",
  hotlineTel: "0329903869",
  zalo: "https://zalo.me/0329903869",
  email: "hello@hschool.edu.vn",
};

export const programs = [
  {
    icon: "🧸",
    title: "Nhà trẻ",
    age: "18 – 36 tháng",
    desc: "Làm quen nề nếp, phát triển vận động và ngôn ngữ đầu đời trong vòng tay yêu thương.",
    featured: false,
  },
  {
    icon: "🌈",
    title: "Mẫu giáo",
    age: "3 – 5 tuổi",
    desc: "Học song ngữ qua trò chơi, nghệ thuật, STEAM và các dự án khám phá thế giới.",
    featured: true,
  },
  {
    icon: "🎓",
    title: "Tiền tiểu học",
    age: "5 – 6 tuổi",
    desc: "Trang bị kỹ năng, tư duy và sự tự tin để bé sẵn sàng bước vào lớp 1.",
    featured: false,
  },
];

export const tuition = [
  {
    title: "Nhà trẻ",
    age: "18 – 36 tháng",
    price: "3.500.000",
    featured: false,
    perks: [
      "Chăm sóc & bán trú cả ngày",
      "Phát triển vận động, ngôn ngữ",
      "Sĩ số nhỏ, chăm sóc cá nhân hóa",
      "Báo cáo cho phụ huynh mỗi ngày",
    ],
  },
  {
    title: "Mẫu giáo",
    age: "3 – 5 tuổi",
    price: "4.200.000",
    featured: true,
    perks: [
      "Chương trình song ngữ & STEAM",
      "Học qua trò chơi, nghệ thuật, dự án",
      "Sự kiện trải nghiệm hằng tháng",
      "Tiếng Anh với giáo viên mỗi ngày",
    ],
  },
  {
    title: "Tiền tiểu học",
    age: "5 – 6 tuổi",
    price: "4.800.000",
    featured: false,
    perks: [
      "Chuẩn bị hành trang vào lớp 1",
      "Rèn tư duy, kỹ năng & sự tự tin",
      "Làm quen chữ & số theo phương pháp",
      "Tăng cường tiếng Anh học thuật",
    ],
  },
];

export const events = [
  {
    img: "/assets/event-circus.jpeg",
    tag: "Sự kiện đặc biệt",
    title: "Gala Xiếc & Ảo thuật Ba Miền",
    desc: "Cùng các bé đi xem gala xiếc và ảo thuật đặc sắc — rèn luyện sự tự tin, kết nối bạn bè và lưu giữ những kỷ niệm đáng nhớ.",
  },
  {
    img: "/assets/event-icecream.jpeg",
    tag: "Trải nghiệm",
    title: "Welcome to Ice Cream Town",
    desc: "Bé hóa thân thành những người thợ làm kem tí hon, tự tay khám phá nguyên liệu và thưởng thức thành quả ngọt ngào.",
  },
  {
    img: "/assets/event-304.jpeg",
    tag: "Ngày lễ lớn",
    title: "Chào mừng Ngày Giải phóng miền Nam 30/4",
    desc: "Hoạt động trải nghiệm giúp các bạn nhỏ H-School hiểu thêm về ngày lễ lịch sử, nuôi dưỡng lòng tự hào dân tộc.",
  },
  {
    img: "/assets/event-outdoor.jpeg",
    tag: "Vận động",
    title: "Hoạt động vui chơi ngoài trời",
    desc: "Bé thỏa sức khám phá, vận động và hòa mình cùng thiên nhiên qua các trò chơi ngoài trời bổ ích.",
  },
];

export const gallery = [
  { src: "/assets/event-circus.jpeg", caption: "Gala Xiếc & Ảo thuật Ba Miền", cls: "gallery-item--wide" },
  { src: "/assets/event-icecream.jpeg", caption: "Welcome to Ice Cream Town", cls: "" },
  { src: "/assets/event-outdoor.jpeg", caption: "Hoạt động vui chơi ngoài trời", cls: "" },
  { src: "/assets/event-304.jpeg", caption: "Chào mừng Ngày Giải phóng miền Nam 30/4", cls: "gallery-item--tall" },
  { src: "/assets/logo.jpeg", caption: "HSchool — Greatness Starts From Here", cls: "" },
];

export const whyUs = [
  { icon: "🎨", title: "Chương trình đặc sắc", desc: "Hoạt động trải nghiệm phong phú, sáng tạo mỗi tháng." },
  { icon: "⭐", title: "Rèn luyện tự tin", desc: "Bé mạnh dạn thể hiện bản thân và giao tiếp song ngữ." },
  { icon: "🤝", title: "Kết nối bạn bè", desc: "Môi trường thân thiện giúp bé phát triển kỹ năng xã hội." },
  { icon: "🎁", title: "Kỷ niệm đáng nhớ", desc: "Mỗi khoảnh khắc tại trường đều là một kỷ niệm đẹp." },
];
