export const DISCORD_LINK = "https://discord.com/invite/tHTVr3gf";

export const API_BASE_URL = process.env.NEXT_PUBLIC_APIBASEURL;

export const INDUSTRY_LEADERS = [
  {
    author: "Arpit Verma",
    avatar: "https://github.com/arpitv970.png",
    org: "Google",
    orgLogo: "/assets/icons/orgs/google.svg",
    designation: "SDE",
  },
  {
    author: "Arpit Verma",
    avatar: "https://github.com/arpitv970.png",
    org: "Google",
    orgLogo: "/assets/icons/orgs/amazon.svg",
    designation: "SDE",
  },
  {
    author: "Arpit Verma",
    avatar: "https://github.com/arpitv970.png",
    org: "Google",
    orgLogo: "/assets/icons/orgs/microsoft.svg",
    designation: "SDE",
  },
  {
    author: "Arpit Verma",
    avatar: "https://github.com/arpitv970.png",
    org: "Google",
    orgLogo: "/assets/icons/orgs/oracle.svg",
    designation: "SDE",
  },
];

export const BLOGS = [
  {
    tag: "Data Science",
    date: "15 Jan, 2024",
    author: "Admin",
    url: `/blogs/1`,
    title: `Linear Regression`,
    img: `/blog1.png`,
  },
  {
    tag: "Data Science",
    date: "15 Jan, 2024",
    author: "Admin",
    url: `/blogs/1`,
    title: `Logistic Regression`,
    img: `/blog1.png`,
  },
  {
    tag: "Data Science",
    date: "15 Jan, 2024",
    author: "Admin",
    url: `/blogs/1`,
    title: `Support Vector Machines`,
    img: `/blog1.png`,
  },
  {
    tag: "Data Science",
    date: "15 Jan, 2024",
    author: "Admin",
    url: `/blogs/1`,
    title: `Decision Tree Classifier`,
    img: `/blog1.png`,
  },
];

export const DISCORD_LINK_MESSAGE = "Join Our Discord Server!";

// Linear Regression, PCA, Regularization, Decision Trees

export const INTERVIEW_PREP_CATEGORIES = [
  {
    title: `Linear Regression`,
  },
  {
    title: `PCA`,
  },
  {
    title: `Regularization`,
  },
  {
    title: `Decision Trees`,
  },
];

export const INTERVIEW_PREP_LEVELS = [
  {
    title: `Easy`,
    eventKey: `first`,
  },
  {
    title: `Medium`,
    eventKey: `second`,
  },
  {
    title: `Hard`,
    eventKey: `third`,
  },
];

export const INTERVIEW_PREP_QA = [
  {
    question: `Why does L1 regularisation lead to sparsity?`,
    answer: `L1 regularization encourages sparsity by penalizing the absolute values of coefficients in a model. This penalty tends to shrink less important features towards zero, effectively removing them from the model and promoting a simpler, more interpretable solution.`,
  },
  {
    question: `Can R square be negative`,
    answer: `Yes, R-squared can be negative. This occurs when the model performs worse than a model that simply predicts the mean of the target variable. It indicates that the chosen model is not a good fit for the data and performs worse than a naive baseline model. Negative R-squared values typically indicate severe overfitting or a poorly chosen model.`,
  },
  {
    question: `What is curse of dimensionality?`,
    answer: `The curse of dimensionality refers to various problems that arise when dealing with high-dimensional data. As the number of features or dimensions increases, the volume of the space grows exponentially, leading to several challenges like sparse data, computation complexity, increased risk of overfitting and diminishing returns.`,
  },
];

export const NAV_ITEMS = [
  {
    href: "/",
    lable: "Home",
  },
  {
    href: "/about",
    lable: "About us",
  },
  {
    href: "/interviewprep",
    lable: "Interview Prep",
  },
  {
    href: "/course",
    lable: "Courses",
  },
  {
    href: "/blogs",
    lable: "Blogs",
  },
  {
    href: "/contact",
    lable: "Contact Us",
  },
];

export const SERVICES = [
  {
    icon: "/assets/icons/search.svg",
    title: "Industry Insights",
    para: "Real world cases with industry insights",
    cta: "#",
  },
  {
    icon: "/assets/icons/dpp.svg",
    title: "Daily Practice Problems",
    para: "To reinforce Previous Concepts!",
    cta: "#",
  },
  {
    icon: "/assets/icons/education.svg",
    title: "Tailored Course",
    para: "Your Unique Talents And Interested!",
    cta: "#",
  },
  {
    icon: "/assets/icons/interview-warning.svg",
    title: "Ace Your Interviews",
    para: "With Unlimited Mock Interviews!",
    cta: "#",
  },
];

export const COURSES = [
  {
    img: "/assets/images/course-img.svg",
    tag: "DATA SCIENCE",
    title: "Data Science And Analytics Foundation Course",
    url: "#",
    list: [
      {
        bullet: "Data Collection and Storage",
      },
      {
        bullet: "Data Cleaning and Preprocessing",
      },
    ],
  },
  {
    img: "/assets/images/course-img.svg",
    tag: "DATA SCIENCE",
    title: "Data Science And Analytics Foundation Course",
    url: "#",
    list: [
      {
        bullet: "Data Collection and Storage",
      },
      {
        bullet: "Data Cleaning and Preprocessing",
      },
    ],
  },
  {
    img: "/assets/images/course-img.svg",
    tag: "DATA SCIENCE",
    title: "Data Science And Analytics Foundation Course",
    url: "#",
    list: [
      {
        bullet: "Data Collection and Storage",
      },
      {
        bullet: "Data Cleaning and Preprocessing",
      },
    ],
  },
];

export const WELCOME = {
  header: "Welcome to DataPlay",
  subheader: "Your Compass On The Data Science Journey.",
  paras: [
    {
      para: `They say the younger generation keeps surpassing the last. Like Arjuna, who triumphed with the right guidance in the battle of Mahabharata, we know that success often comes from being pointed in the right direction.`,
    },
    {
      para: `We've realized that data science's diverse landscape lacks a one-size-fits-all approach, there is no single path in data science that leads you to the desired destination. We spent years gathering wisdom from different places mixing academic smarts with global real world know-how creating a unique hub, fueling wisdom with industry expertise.`,
    },
  ],
  cta: {
    title: "Meet our Founders",
    url: "#",
  },
};

export const BOOK_INTERVIEW = {
  header: "ONCE IN A LIFETIME DEAL",
  subheader: "Book Mock Interview ",
  paras: [
    {
      para: `Master the art of interviews: Expertly conducted mocks, real world simulations, and intensive focus on your weak points`,
    },
  ],
  cta: {
    title: "Book Now",
    url: "#",
  },
};

export const INTERVIEW_FEATURES = [
  {
    img: "/assets/icons/mock-interview/document.svg",
    title: "Resume Refactoring",
  },
  {
    img: "/assets/icons/mock-interview/viewer.svg",
    title: "Industry Insights",
  },
  {
    img: "/assets/icons/mock-interview/comment.svg",
    title: "Personalized Feedback",
  },
  {
    img: "/assets/icons/mock-interview/motivation.svg",
    title: "Clarity on Next Steps",
  },
];

export const MENTORS = [
  {
    img: "/assets/images/mentors/nishant.svg",
    name: "Nishant Gupta",
    designation: `Senior Data Scientist @ EXL &Ex Senior Data Scientist @ MediaCorp, Singapore`,
    bio: `With 8 years of experience, he excels at simplifying complex concepts, ensuring from the very roots.`,
    social: {
      linkedIn: `https://www.linkedin.com/in/nishantthewriter/`,
    },
  },
  {
    img: "/assets/images/mentors/mahima.svg",
    name: "Mahima Gupta",
    designation: `Senior Data Scientist @ EXL &Ex Senior Data Scientist @ MediaCorp, Singapore`,
    bio: `With 8 years of experience, he excels at simplifying complex concepts, ensuring from the very roots.`,
    social: {
      linkedIn: "https://www.linkedin.com/in/mahima-gupta1997/",
    },
  },
];

export const ABOUT_CONTENT = [
  `They say the younger generation keeps surpassing the last. Like Arjuna, who triumphed with the right guidance in the battle of Mahabharata, we know that success often comes from being pointed in the right direction.`,

  `We've realized that data science's diverse landscape lacks a one-size-fits-all approach, there is no single path in data science that leads you to the desired destination. We spent years gathering wisdom from different places mixing academic smarts with global real world know-how creating a unique hub, fueling wisdom with industry expertise.
  `,
  `We value your individuality, we believe success is personal. Just as fish find their flow and birds their flight, your learning journey is yours. At DataPlay, our mission remains focused. We are committed to guiding you towards goals that resonate and align perfectly with your skills and passions. We believe great triumphs are often the fruits of pursuing what you truly love.
  `,
  `We're not solely here to assist you in landing jobs at the most prominent companies, our commitment goes beyond, aiming for something much more valuable – nurturing you into a top-tier professional equipped to choose a workplace where your brilliance truly flourishes. Think of us as navigators on a journey to your best self, where satisfaction and success walk hand in hand.
  `,
  `This is where our DPPs (Daily Practice Problems) also come in. These aren't mere tools, they're your trusted companions aiding you to ask questions, collaborate with peers and mentors to solidify your understanding, and truly internalize concepts until it becomes second nature.
  `,
  `This is where our DPPs (Daily Practice Problems) also come in. These aren't mere tools, they're your trusted companions aiding you to ask questions, collaborate with peers and mentors to solidify your understanding, and truly internalize concepts until it becomes second nature.
  That's why we made a place where you can find what you need, no matter where you're starting from. Our doors are open to individuals of all levels and backgrounds. You are warmly welcome!
`,
  `So, come aboard. Let's sculpt YOUR path to success, YOUR way !`,
];

export const GALLERY = [
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-01.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-02.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-03.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-04.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-05.svg",
  },
  {
    data: "23 Jan 2024",
    img: "/assets/images/gallery/gallery-06.svg",
  },
];

export const COURSE_INCLUDE = [
  {
    img: `/assets/icons/courses/classroom.svg`,
    title: `Classroom`,
  },
  {
    img: `/assets/icons/courses/in-person.svg`,
    title: `In person teaching`,
  },
  {
    img: `/assets/icons/courses/dpp.svg`,
    title: `Daily Practice Problems`,
  },
  {
    img: `/assets/icons/courses/record-lecture.svg`,
    title: `Recorded lectures`,
  },
];
