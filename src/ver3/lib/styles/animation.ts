// export const customVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: "easeOut",
//     },
//   },
// };

export const customVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // 자식들 간 애니메이션 시간 간격
    },
  },
};

export const customChildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const customChildDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const rotateVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 자식들 간 애니메이션 시간 간격
    },
  },
};

export const rotateChildVariants = {
  hidden: { transform: "rotateX(0)" },
  visible: { transform: "rotateX(360deg)", transition: { duration: 1, ease: "easeOut" } },
};