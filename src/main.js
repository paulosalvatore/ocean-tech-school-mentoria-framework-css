import './style.css'

document.querySelector('#app').innerHTML = `
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="mb-4 flex items-center justify-between py-4 md:py-8">
          <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              EcoTech Solutions
          </a>
          <nav class="hidden gap-12 lg:flex">
              <a href="#" class="text-lg font-semibold text-green-500">Home</a>
              <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">Services</a>
              <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">Sustainability</a>
              <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">About Us</a>
          </nav>
          <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Us</a>
          <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-green-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              Menu
          </button>
      </header>
      <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Green Technology" class="absolute inset-0 h-full w-full object-cover object-center" />
          <div class="absolute inset-0 bg-green-500 mix-blend-multiply"></div>
          <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p class="mb-4 text-center text-lg text-green-200 sm:text-xl md:mb-8">Empowering Sustainability</p>
              <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Innovative Green Technology Solutions</h1>
              <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                  <a href="#" class="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">Learn More</a>
                  <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Our Services</a>
              </div>
          </div>
      </section>
  </div>
  </div>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Services</h2>
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">At EcoTech Solutions, we offer a comprehensive range of green technology services designed to help businesses reduce their environmental impact and promote sustainability.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <!-- Service 1 -->
          <div class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Solar Panels" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Energy Solutions</span>
          </div>
          <!-- Service 2 -->
          <div class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Waste Management" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Waste Management</span>
          </div>
          <!-- Service 3 -->
          <div class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Green Product" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Eco-friendly Products</span>
          </div>
      </div>
  </div>
  </div>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Why Choose Us</h2>
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">EcoTech Solutions is dedicated to providing cutting-edge green technology solutions that are not only effective but also sustainable, helping businesses make a real impact on the environment.</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <!-- Advantage 1 -->
          <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
              </div>
              <div>
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Innovative Solutions</h3>
                  <p class="mb-2 text-gray-500">Leveraging the latest in green technology to offer sustainable solutions.</p>
                  <a href="#" class="font-bold text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Learn More</a>
              </div>
          </div>
          <!-- Advantage 2 -->
          <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M21 11.5a8.38 8.38 0 01-.879 3.387A8.499 8.499 0 0112.5 21h-1a8.499 8.499 0 01-8.121-5.113A8.38 8.38 0 012.5 12.5v-1a8.499 8.499 0 015.113-8.121A8.38 8.38 0 0111 2.5h2a8.499 8.499 0 018.121 5.113A8.38 8.38 0 0121 11.5z" />
                  </svg>
              </div>
              <div>
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Commitment to Sustainability</h3>
                  <p class="mb-2 text-gray-500">Our core mission is to help businesses operate more sustainably.</p>
                  <a href="#" class="font-bold text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Discover How</a>
              </div>
          </div>
          <!-- Advantage 3 -->
          <div class="flex gap-4 md:gap-6">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
              </div>
              <div>
                  <h3 class="mb-2 text-lg font-semibold md:text-xl">Expert Support</h3>
                  <p class="mb-2 text-gray-500">Our team of experts is here to guide you every step of the way.</p>
                  <a href="#" class="font-bold text-green-500 transition duration-100 hover:text-green-600 active:text-green-700">Get Support</a>
              </div>
          </div>
      </div>
  </div>
  </div>

  <footer class="bg-white">
  <div class="bg-green-500 py-6">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
              <div class="mb-3 text-center md:mb-0 md:text-left">
                  <span class="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
                  <p class="text-green-200">Stay updated with our latest green tech solutions</p>
              </div>
              <form class="flex w-full gap-2 md:max-w-md">
                  <input placeholder="Email" class="w-full flex-1 rounded border border-white bg-green-400 px-3 py-2 text-white placeholder-green-100 outline-none ring-green-300 transition duration-100 focus:ring" />
                  <button class="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-green-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-green-600 md:text-base">Subscribe</button>
              </form>
          </div>
      </div>
  </div>
  <div class="pt-12 lg:pt-16">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
              <div class="col-span-full lg:col-span-2">
                  <div class="mb-4 lg:-mt-2">
                      <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                          <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-5 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                          </svg>
                          EcoTech Solutions
                      </a>
                  </div>
                  <p class="mb-6 text-gray-500 sm:pr-8">Dedicated to providing innovative green technology solutions for a sustainable future.</p>
                  <div class="flex gap-4">
                      <!-- Social icons -->
                  </div>
              </div>
              <div>
                  <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Services</div>
                  <nav class="flex flex-col gap-4">
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Energy Solutions</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Waste Management</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Eco-friendly Products</a>
                  </nav>
              </div>
              <div>
                  <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>
                  <nav class="flex flex-col gap-4">
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">About Us</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Careers</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Contact</a>
                  </nav>
              </div>
              <div>
                  <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>
                  <nav class="flex flex-col gap-4">
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">FAQ</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Help Center</a>
                  </nav>
              </div>
              <div>
                  <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>
                  <nav class="flex flex-col gap-4">
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Privacy Policy</a>
                      <a href="#" class="text-gray-500 transition duration-100 hover:text-green-500 active:text-green-600">Terms of Service</a>
                  </nav>
              </div>
          </div>
          <div class="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present EcoTech Solutions. All rights reserved.</div>
      </div>
  </div>
  </footer>
`
