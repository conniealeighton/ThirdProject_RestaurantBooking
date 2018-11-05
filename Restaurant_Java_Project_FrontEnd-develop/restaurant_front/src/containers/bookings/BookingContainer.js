import React, {Component} from 'react';
import BookingList from './BookingList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: [], searchDate: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    fetch('/bookings')
    .then((res) => res.json())
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  handleChange(targetDate){
    this.setState({searchDate: targetDate})
  }

  handleClick(){
    this.setState({searchDate: null})
  }

  render() {
    return (
      <div className="booking-sort">
        <div>
          <DatePicker className="date-picker" selected={this.state.date} onChange={this.handleChange} placeholderText="View bookings by date:"/>
          {/* </div>
            <br/>
          <div> */}
          <button className="booking-button" onClick={this.handleClick}>Show all bookings</button>
        </div>

        <BookingList bookings={this.state.bookings} searchDate={this.state.searchDate}/>
      </div>
    )
  }

}

export default BookingContainer;
