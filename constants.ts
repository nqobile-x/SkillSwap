import { User, Skill, Conversation } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Alex Johnson',
  handle: '@alexj',
  location: 'San Francisco, CA',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0kWKbpG2C4saYzCu-WrXFLShLE6f5-lY_8jtw-wCd9yj-1IEdahc3BFaKTvm_z7wcuDPjabUzgEGPdwRJmuo_a0rA6YkA_YGvAPS4wjEE9NXKkv_GgTVJYB7EvG4n58TrIebnNM2fQQFPgQj9zEf26MlKCpDSZE-rfkc8LmFxGUsLY3Gq4g_qn9h3DBS1tEXoVB1pW-4w8Fv2ysOmW47aCp7bJ0Rk--Tr3EMHJKTTNoh-x7D1j18Pon-18lCfORS9ahYu7WYkv8Q',
  bio: 'Passionate learner and teacher.',
  rating: 4.9,
  reviewCount: 12,
  skillsOffered: [],
  skillsNeeded: []
};

export const MOCK_USERS: User[] = [
  {
    id: 'u2',
    name: 'Jane Doe',
    handle: '@janed',
    location: 'New York, NY',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLB_1zgTdaHCkJvT8ZnxdUSiU3XgmQbH0TKLHllKUZDJCJoRTRVOgINDXeRR1ZIjrIshLsSsOef5LaKpKox5_J5Ep1lPVapzVlPgi7BpKZgFVclwKPBLHMCICxMYzGpUnBJsbEeLB6L7j2eVnvJIZ8LjG6rMVNzt-Q2P-s2P5592CJSjzw9wNai-B7Q0CD2R4wuRRg1agpAdAVwh_K_362MVvb4WygyvUDtvYXwONCo18ttLvRh5IeXfnNU7zscLSct7Be3bnv9LM',
    bio: 'Guitarist for 10 years.',
    rating: 5.0,
    reviewCount: 45,
    skillsOffered: [],
    skillsNeeded: []
  },
  {
    id: 'u3',
    name: 'Eleanor Vance',
    handle: '@eleanorv',
    location: 'San Francisco, CA',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8M2rT0oQ8kyob2TCDkR9410DasllfW2CsdIZsAoHBijqLaCq64Mf744-JlTWeH0R-iPOdE4_q2Q9v4zi0qnW8AHFKfFbibCeIZCPvAE9NCvikrl378GSsTlCNvM3bQdG56ZsHZp4EFvxLllPklyW9ZRIef5ZunGWuH_yfGuaKxCEXxYuMjKjTv9mWCr9UY6EhzbJ-DGBE74XvoXtSeZowya2XVdPr0s3TLVd0k-Px59fT6YO4mFobo1lxE4oPV9HOvU6b6XIQTic',
    bio: 'Product designer and sourdough enthusiast.',
    rating: 4.8,
    reviewCount: 32,
    skillsOffered: [],
    skillsNeeded: []
  }
];

export const MOCK_SKILLS: Skill[] = [
  {
    id: 's1',
    title: 'Organic Gardening Basics',
    category: 'Home & Garden',
    description: 'Learn to grow your own vegetables without pesticides.',
    type: 'Offer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPuwcAS1ebKv-gIbhQVppYFSXhNvjWP-irQP8c93pvwjt9_yhwCZDrT80mRM_XorKQwqfePua5K5Sip6AxNl9q6zTdOIMqQy0mTov12UEynY-_FQWY_2feCvO8JbYJ8Ru-XDDzsrX4f2ah1mqQxJzjDGMmTiIKt-ohxsEaIyaVCuq4UHGssdtSA3LBnISsvoOQnN04XFvYrPWe8B6x0ZxzaSt9mMGSDg6mDqNlfrpGkdttGpxouXuJMhH8gohCunFKzlLSq-5sKDE',
    user: { ...MOCK_USERS[0], name: 'Maria S.' }
  },
  {
    id: 's2',
    title: 'Intro to Python',
    category: 'Technical',
    description: 'Get started with the world\'s most popular programming language.',
    type: 'Offer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbUUXoMwXrTr78CdvTPjVINX3wSqaCj5sSSzyRRiZ3VENyWJkprqRk3tEub6uRlh6J4ftX68SD-HaTZqwfseWnWfsyyh-hd3VefS50Mov5hGabDtFpJ_fP-l0KtPHkCu69TUJJZI4Pb9UJkaGHRc6Fp6e2kp_cSTkmoYShBgoi47LXXS0UzfC03UiYHawWOOUx7OiGmg8fFMzA7tQS1vjOoGRRhSA89gR2y2RW0aV0Ky87eLO5jAlFB3wISRsxIuavkewEG4dsJrw',
    user: { ...MOCK_USERS[0], name: 'David L.' }
  },
  {
    id: 's3',
    title: 'Sourdough Bread Baking',
    category: 'Creative',
    description: 'Master the art of baking delicious sourdough bread from scratch.',
    type: 'Offer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNSVUOCl_ZpXFldkIeSusPV-yJTgbnaFOMXr_xT-kU7PBFpS8s61snrGP-PRHTE59W7yuQGOTG9rrGxae0gxLB7v-5X452D_fNq9F_zZj4FMwyn7tVvtYDdjVjdULz4ciwhf-aMdmCz_xX_tD4q08DyKNQTk8s9MhJKt5LNoJFAahn1nRZruBdQ9ahYHPlisZcLOYuvUuPp6LXWtqW-6ob3afJQ_r8dzhAiino09l33A19wx12YuveGi9_dUO12rH4Fr18pJdhojI',
    user: MOCK_USERS[1]
  },
  {
    id: 's4',
    title: 'Beginner Guitar Lessons',
    category: 'Creative',
    description: 'Learn your first chords and songs on the acoustic guitar.',
    type: 'Offer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWennDA4TA-Gghi30JFn4umkVA397urAKg_pm9ihrUZxKE64dBXzp8g0MGyUyUUByPsTlyMQa01sYnMfKnjNNyIC5ERaVMeA-nCAk6VbfFA_haBNqYhLNVz91CTBKq3YIMohTqTnh7atXpViF6EMHIjPFZGza0Iiue2izwYXpBNH00FUbH9JuGjTAFNYLT1BrCGod9F1zqdcKyfLQ9t4TVA8wyDf_l8QdDp96rk_eP0nXawIZfGcM8jF1VEnhzCSvQ3RvuQe2yfb0',
    user: { ...MOCK_USERS[0], name: 'Alex P.' }
  }
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'c1',
    user: MOCK_USERS[0], // Jane Doe
    subject: 'Guitar Lessons for Baking',
    status: 'Active',
    lastMessage: {
      id: 'm1',
      senderId: 'u2',
      receiverId: 'u1',
      content: "Great! Let's schedule something for this weekend.",
      timestamp: '3:45 PM',
      isRead: true,
      type: 'text'
    }
  },
  {
    id: 'c2',
    user: { ...MOCK_USERS[1], name: 'Robert Smith', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKNfwwdztKQLONwn0GKvRqTncwRgCArXV0iOAIw8PgKD_ytCj9ysfQy83I6rsG8cHBZt82njwIb14TvVX7bVJhZlV59-Qo-x8WWcSicEIJsrYvJViwctmMtsSwAk4THomyeJQotJKeS_Hvg17OAWYoHtSwZn4T31NdAkLyw_YjxPHPIBCtNQ8uD_-VQj1-g1wsdAkjbw13piBhBvRqA7Vxt7LXA91KgSrIP_DFL19kIiulu3BxwypGxRIqJUtru2reztjTA0ipA54' },
    subject: 'Baking Lessons',
    status: 'Pending',
    lastMessage: {
      id: 'm2',
      senderId: 'u3',
      receiverId: 'u1',
      content: 'Hey, I saw your baking skill post.',
      timestamp: 'Yesterday',
      isRead: false,
      type: 'text'
    }
  }
];
