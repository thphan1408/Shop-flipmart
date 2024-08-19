import React from 'react'
import Button from '../Button/Button'

interface INewsLettersProps {}

const NewsLetters: React.FC<INewsLettersProps> = () => {
  return (
    <div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small">
      <h3 className="section-title">Newsletters</h3>
      <div className="sidebar-widget-body outer-top-xs">
        <p>Sign Up for Our Newsletter!</p>
        <form>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Subscribe to our newsletter"
            />
          </div>
          <Button className="btn btn-primary" onClick={() => alert('Hello')}>
            Subscribe
          </Button>
        </form>
      </div>
      {/* /.sidebar-widget-body */}
    </div>
  )
}

export default NewsLetters
