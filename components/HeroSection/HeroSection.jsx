import { Button } from 'reactstrap'

export default function HeroSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">

          <div className="col-sm-12 col-md-6 mb-5">
            <img src="images/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6 m-auto">
            <h1>
              <b>
                rstorer.
              </b>
            </h1>
            <p className="lead">Brand you've always wanted to wear!</p>
            <Button size="sm" color="primary">Let's start buying!</Button>
          </div>
        </div>

      </div>
    </section>
  )
}
