# 🌾 Crop Management Web App

A modern, responsive React application for managing agricultural crops with role-based access control and QR code functionality.

## ✨ Features

- **User Authentication**: Login and registration with role-based access
- **Role Management**: Support for Farmer, Retailer, Wholesaler, and Consumer roles
- **Crop Management**: Add, view, and delete crops with detailed information
- **Image Upload**: Support for crop images with preview functionality
- **QR Code Generation**: Role-specific QR codes with different information visibility
- **Responsive Design**: Modern UI built with TailwindCSS
- **Smooth Animations**: Beautiful transitions using Framer Motion

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **QR Codes**: React QRCode Logo
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with user menu
│   ├── CropCard.jsx        # Individual crop display card
│   ├── CropForm.jsx        # Modal form for adding crops
│   └── QRModal.jsx         # QR code display modal
├── pages/
│   ├── Login.jsx           # User login page
│   ├── Register.jsx        # User registration page
│   └── Dashboard.jsx       # Main dashboard with crop management
├── App.jsx                 # Main app component with routing
├── main.jsx                # App entry point
└── index.css               # Global styles and TailwindCSS imports
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎯 Usage Guide

### 1. User Registration
- Navigate to `/register`
- Fill in all required fields (name, mobile, email, password, role)
- Select your role from: Farmer, Retailer, Wholesaler, or Consumer
- Create your account

### 2. User Login
- Navigate to `/login`
- Enter your email and password
- Access your personalized dashboard

### 3. Adding Crops
- Click "Add Crop" button on the dashboard
- Fill in crop details:
  - Crop name and type
  - Soil type and pesticide information
  - Harvest and expiry dates
  - Upload crop image
- Submit the form

### 4. Managing Crops
- View all your crops in a responsive grid layout
- Each crop card shows:
  - Crop image with status indicator
  - Basic information (name, type, soil, dates)
  - Action buttons (QR Code, Delete)

### 5. QR Code Functionality
- Click "QR Code" button on any crop card
- View role-specific information:
  - **Farmer**: Full access to all crop details
  - **Consumer**: Basic crop information only
  - **Wholesaler**: Production details (no pesticide info)
  - **Retailer**: Quality information (soil + pesticide)

## 🎨 UI Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Modern Aesthetics**: Clean, professional interface with TailwindCSS
- **Smooth Animations**: Hover effects, modal transitions, and page animations
- **Status Indicators**: Visual cues for crop status (Active, Expiring Soon, Expired)
- **Interactive Elements**: Hover effects, focus states, and smooth transitions

## 🔐 Security Features

- **Role-Based Access**: Different information visibility based on user role
- **Form Validation**: Comprehensive client-side validation
- **Image Validation**: File type and size restrictions
- **Secure Routing**: Protected routes with authentication checks

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Features

- **Page Transitions**: Smooth fade-in effects
- **Modal Animations**: Scale and fade transitions
- **Hover Effects**: Subtle scaling and shadow changes
- **Loading States**: Smooth loading animations

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time crop monitoring
- [ ] Weather integration
- [ ] Crop analytics and reporting
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced search and filtering
- [ ] Export functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy Farming! 🌱**
