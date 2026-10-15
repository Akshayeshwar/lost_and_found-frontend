export const INITIAL_ITEMS = [
  {
    id: 1,
    title: "Dell Inspiron 15 Laptop (Silver)",
    description: "Silver Dell laptop with a GitHub sticker on the lid. Left in the quiet study zone on the second floor.",
    category: "ELECTRONICS",
    type: "LOST",
    location: "Main Library - 2nd Floor Study Cubicle",
    reportDate: "2026-10-12",
    imageUrl: null,
    status: "OPEN",
    createdAt: "2026-10-12T14:30:00",
    user: {
      id: 6,
      name: "Akshay Eshwar",
      email: "akshay@campus.edu",
      role: "ROLE_STUDENT"
    }
  },
  {
    id: 2,
    title: "Blue Fastrack Backpack",
    description: "Dark blue college backpack containing a notebook, graphing calculator, and blue water bottle.",
    category: "BAGS_WALLETS",
    type: "FOUND",
    location: "Campus Cafeteria - Corner Table near Juice Counter",
    reportDate: "2026-10-13",
    imageUrl: null,
    status: "OPEN",
    createdAt: "2026-10-13T11:15:00",
    user: {
      id: 2,
      name: "Security Office Block A",
      email: "security@campus.edu",
      role: "ROLE_STAFF"
    }
  },
  {
    id: 3,
    title: "Student ID Card (24EG107D63)",
    description: "Computer Science Dept ID card belonging to Sai Siddharth. Handed over to security desk.",
    category: "ID_CARDS",
    type: "FOUND",
    location: "Engineering Block B - 1st Floor Corridor",
    reportDate: "2026-10-14",
    imageUrl: null,
    status: "OPEN",
    createdAt: "2026-10-14T09:45:00",
    user: {
      id: 4,
      name: "Rahul Varma",
      email: "rahul@campus.edu",
      role: "ROLE_STUDENT"
    }
  },
  {
    id: 4,
    title: "Casio Scientific Calculator fx-991EX",
    description: "Black scientific calculator with initials 'A.D.' engraved on the rear battery slide cover.",
    category: "BOOKS_STATIONERY",
    type: "LOST",
    location: "Mechanical Seminar Hall (Seminar 2)",
    reportDate: "2026-10-11",
    imageUrl: null,
    status: "OPEN",
    createdAt: "2026-10-11T16:20:00",
    user: {
      id: 6,
      name: "Akshay Eshwar",
      email: "akshay@campus.edu",
      role: "ROLE_STUDENT"
    }
  },
  {
    id: 5,
    title: "Set of 3 Bike Keys with Spiderman Keychain",
    description: "Two Honda keys and a padlock key on a red Spiderman rubber ring.",
    category: "KEYS",
    type: "FOUND",
    location: "Student Two-Wheeler Parking Lot (P-2)",
    reportDate: "2026-10-14",
    imageUrl: null,
    status: "OPEN",
    createdAt: "2026-10-14T08:30:00",
    user: {
      id: 7,
      name: "Campus Security Desk",
      email: "security.gate@campus.edu",
      role: "ROLE_STAFF"
    }
  },
  {
    id: 6,
    title: "Black Leather Bi-Fold Wallet",
    description: "Contains driving license and campus transit pass. No cash inside.",
    category: "BAGS_WALLETS",
    type: "LOST",
    location: "Sports Complex - Indoor Badminton Court",
    reportDate: "2026-10-09",
    imageUrl: null,
    status: "CLAIMED",
    createdAt: "2026-10-09T18:00:00",
    user: {
      id: 8,
      name: "Karthik Nair",
      email: "karthik@campus.edu",
      role: "ROLE_STUDENT"
    }
  }
];

export const CATEGORIES = [
  { value: "ALL", label: "All Categories" },
  { value: "ELECTRONICS", label: "Electronics & Gadgets" },
  { value: "ID_CARDS", label: "ID Cards & Documents" },
  { value: "BAGS_WALLETS", label: "Bags & Wallets" },
  { value: "KEYS", label: "Keys & Chains" },
  { value: "BOOKS_STATIONERY", label: "Books & Stationery" },
  { value: "CLOTHING", label: "Clothing & Accessories" },
  { value: "OTHER", label: "Other Belongings" }
];
