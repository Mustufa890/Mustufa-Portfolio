"use client"
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  const projects = [
  {
    title: "Quiz App",
    description:
      "A responsive Todo Application Responsive Task add & delete",
    image: "/6.png",
    technologies: ["React", "Tailwind CSS", ],
    github: "https://github.com/Mustufa890/To-Do-App",
    live: "https://to-do-app-woad-nine-74.vercel.app/",
  },
  {
    title: "Music Search Application",
    description:
      "A Responsive Search Music WebApplication",
    image: "/7.png",
    technologies: ["Reactjs", "Tailwind CSS", "Axios"],
    github: "https://github.com/Mustufa890/Music-Web-App",
    live: "https://music-web-app-ruby.vercel.app/",
  },
  {
    title: "Book Search Web Application",
    description:
      "A responsive Book Search WebApplication",
    image: "/8.png" ,
    technologies: ["React.js", "Tailwind CSS", "Axios"],
    github: "https://github.com/Mustufa890/Book-Web-Application",
    live: "https://book-web-application.vercel.app/",
  },
];


  return (
    <>




     

      {/* HERO */}
      <section className="min-h-screen relative bg-white overflow-hidden
      
       
        bg-[size:24px_24px] px-4 py-20 sm:px-6 sm:py-24 flex items-center">

      
        <div className="relative mx-auto max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            
            <h3 className="text-2xl sm:text-3xl text-zinc-500 font-medium">Hello! I'm</h3>

            <h2 className="mt-1 text-5xl font-bold sm:text-6xl lg:text-7xl leading-tight">
              Ghulam{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Mustufa
              </span>
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400"></span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-700">
                MERN Stack <span className="text-black" >Developer</span>
              </h3>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
              Skilled in building responsive, visually appealing, and
              user-friendly web applications with modern technologies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/Resume.pdf.pdf"
                download="Resume.upt"
                className="group relative rounded-lg bg-blue-700 px-7 py-3 text-white font-medium shadow-lg shadow-blue-700/20 transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-700/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Resume Download
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-500"></span>
              </Link>

              <div className="flex items-center gap-3 justify-center">
                <Link
                  href="https://www.linkedin.com/in/mustufa-memon-2b5814321/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-700 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </Link>
                <Link
                  href="https://github.com/Mustufa890"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-700 transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:-translate-y-1 hover:-rotate-6 hover:shadow-lg hover:shadow-zinc-500/30"
                >
                  <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
              </div>
            </div>
          </div>
          

          {/* RIGHT — floating visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[420px]">

            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100"></div>

            <div className="relative w-100 h-100 rounded-full   flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-blue-500/30">
              <Image src="/5.png" loading="eager" alt="5" width={1000} height={1000} className="w-7xl " />
            </div>

          </div>
        </div>

        
      </section>
      

    


      {/* ABOUT */}
      <section id="About" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-widest">WHO I AM</span>
            <h3 className="mt-2 text-4xl font-bold sm:text-5xl">
              About <span className="text-blue-700">Me</span>
            </h3>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              MERN Stack Developer skilled in building responsive, visually
              appealing, and user-friendly web applications using modern
              technologies such as MongoDB, Express.js, React.js, Node.js,
              Next.js, and Tailwind CSS.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-3 transition-transform duration-500 hover:rotate-1"></div>
            <div className="relative bg-white border border-zinc-200 rounded-3xl shadow-xl p-6 w-full max-w-sm transition-transform duration-500 hover:-translate-y-2">
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <pre className="text-xs sm:text-sm text-zinc-700 leading-relaxed overflow-x-auto">
{`const dev = {
  name: "Ghulam Mustufa",
  role: "MERN Stack Developer",
  stack: ["MongoDB","Express",
          "React","Node"],
  passion: "clean UI"
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      

      {/* SKILLS */}
      <section id="Skills" className="relative py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-3">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-center text-zinc-500 mb-10">Technologies I work with every day</p>

          <div className="flex flex-wrap justify-center gap-3">
            {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS", "Git", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border border-blue-200 bg-white text-blue-700 font-medium text-sm shadow-sm hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-zinc-200 bg-white py-4">
          <div className="flex gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 text-zinc-300 text-2xl font-bold tracking-widest">
                <span>MERN STACK</span>
                <span>•</span>
                <span>REACT</span>
                <span>•</span>
                <span>NODE.JS</span>
                <span>•</span>
                <span>MONGODB</span>
                <span>•</span>
                <span>TAILWIND</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="Certifates" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-3">
            Certificate<span className="text-blue-500">s</span>
          </h2>
          <p className="text-center text-zinc-500 mb-10">Certifications I've earned along the way</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["/1.png", "/2.png", "/3.png", "/4.png"].map((src, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-2xl hover:shadow-blue-300/40 hover:-translate-y-2 hover:rotate-1 transition-all duration-500"
              >
                <Image
                  src={src}
                  alt={`certificate-${i + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View certificate
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="Project" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Here are some of the projects I have built using modern
            web technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-800 transition hover:bg-gray-100"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-800"
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}