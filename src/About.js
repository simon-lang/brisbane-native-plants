export default function About() {
  return (
    <div className="flex items-center justify-center h-screen fixed top-0 bg-white bg-opacity-90">
      <div className="rounded-lg border shadow-lg p-10 w-1/2 space-y-4 bg-white text-lg">
        <h1 className="text-2xl">About</h1>
        <p>
          This is not an official website. I have nothing to do with Brisbane
          City Council, and all these images are just copied from google
          results.
        </p>
        <p>
          This website has no ads or tracking software. I made this because I
          wanted a visual way to decide which native plants I wanted to get for
          my garden. I hope you find it useful.
        </p>
        <div>
          <a
            className="btn"
            _target="blank"
            href="https://github.com/simon-lang/brisbane-native-plants"
          >
            {/* <WorkIcon></WorkIcon> */}
            github: simon-lang/brisbane-native-plants
          </a>
        </div>
      </div>
    </div>
  )
}
