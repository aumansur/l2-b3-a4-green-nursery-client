import Container from "@/components/Container";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 overflow-auto text-white py-10">
      <Container>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Green Nursery</h2>
              <p>Your one-stop shop for all your plant needs.</p>
              <p>
                &copy; {new Date().getFullYear()} Green Nursery. All rights
                reserved.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <p>123 Green Street, Plant City</p>
              <p>Email: info@greennursery.com</p>
              <p>Phone: (123) 456-7890</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96zm4.29 10.74h-2.03c0 2.23-1.84 4.06-4.1 4.06s-4.1-1.83-4.1-4.06c0-.68.18-1.31.48-1.87l1.43 1.43c-.01.14-.02.28-.02.43 0 1.53 1.24 2.77 2.77 2.77s2.77-1.24 2.77-2.77c0-.14-.01-.28-.02-.43l1.43-1.43c.3.56.48 1.19.48 1.87 0 .11-.01.22-.02.33z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M22.54 6.42c-.77.35-1.6.59-2.47.7.88-.52 1.56-1.34 1.88-2.33-.82.49-1.73.83-2.7 1.03-.78-.83-1.9-1.34-3.14-1.34-2.37 0-4.3 1.92-4.3 4.3 0 .33.04.65.11.96-3.58-.18-6.75-1.9-8.87-4.52-.37.64-.58 1.38-.58 2.18 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.49 3.84 3.46 4.24-.36.1-.74.15-1.14.15-.28 0-.54-.03-.8-.07.55 1.73 2.14 2.98 4.03 3.02-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.7-.02-1.04-.06 1.91 1.23 4.18 1.94 6.62 1.94 7.94 0 12.28-6.58 12.28-12.28 0-.19 0-.38-.01-.57.84-.61 1.56-1.37 2.13-2.24z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.64 9.06 8.44 9.93.62.12.84-.27.84-.6v-2.19c-3.44.75-4.17-1.54-4.17-1.54-.56-1.41-1.36-1.78-1.36-1.78-1.12-.77.09-.76.09-.76 1.23.09 1.87 1.27 1.87 1.27 1.1 1.87 2.9 1.33 3.61 1.02.11-.8.43-1.33.78-1.63-2.75-.31-5.65-1.37-5.65-6.09 0-1.35.48-2.44 1.27-3.29-.13-.31-.56-1.56.11-3.24 0 0 1.04-.33 3.4 1.25 1-.28 2.08-.42 3.15-.43 1.06.01 2.14.15 3.14.43 2.36-1.58 3.4-1.25 3.4-1.25.67 1.68.24 2.93.11 3.24.79.85 1.27 1.94 1.27 3.29 0 4.74-2.91 5.77-5.68 6.07.44.38.83 1.12.83 2.26v3.35c0 .33.22.73.85.61 4.8-.87 8.44-4.96 8.44-9.93 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
