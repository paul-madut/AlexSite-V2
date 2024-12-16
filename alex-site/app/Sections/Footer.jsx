import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center sm:text-left mb-5 sm:mb-0">
                <h4 className="font-bold mb-4">About</h4>
                <p className="text-sm">Hi, I'm Alex, a certified fitness coach and passionate health enthusiast. I am dedicated to helping you reach your fitness goals.</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center sm:text-left mb-5 sm:mb-0">
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="/about" className="hover:text-gray-300">About Me</a></li>
                  <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                  <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center sm:text-left mb-5 sm:mb-0">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.facebook.com/yourhandle" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-sm">
              <p>&copy; 2023 Paul the Programmer inc. All rights reserved.</p>
            </div>
          </footer>
  )
}

export default Footer