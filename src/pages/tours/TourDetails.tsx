import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Navigation, Calendar, Users, Car, CheckCircle } from 'lucide-react';
import { tours, transportOptions, TransportOption } from '../../data/tour';
import { createBooking, Booking } from '../../lib/supabase';
interface TourDetailsProps {
  tourId: number;
  onBack: () => void;
}

export default function TourDetails({ tourId, onBack }: TourDetailsProps) {
  const tour = tours.find(t => t.id === tourId);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    numberOfPeople: 1,
    tourDate: '',
    transportation: '',
    specialRequests: ''
  });

  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);

  useEffect(() => {
    if (formData.transportation) {
      const transport = transportOptions.find(t => t.id === formData.transportation);
      setSelectedTransport(transport || null);
    } else {
      setSelectedTransport(null);
    }
  }, [formData.transportation]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Tour not found</p>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    let total = tour.price * formData.numberOfPeople;
    if (selectedTransport) {
      total += selectedTransport.price;
    }
    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.customerEmail || !formData.customerPhone ||
        !formData.tourDate || !formData.transportation) {
      alert('Please fill in all required fields');
      return;
    }

    setIsBooking(true);

    try {
      const booking: Booking = {
        tour_id: tour.id,
        customer_name: formData.customerName,
        customer_email: formData.customerEmail,
        customer_phone: formData.customerPhone,
        number_of_people: formData.numberOfPeople,
        tour_date: formData.tourDate,
        transportation: selectedTransport?.name || formData.transportation,
        special_requests: formData.specialRequests,
        total_amount: calculateTotal(),
        status: 'pending'
      };

      const result = await createBooking(booking);
      setSubmittedBooking(result);
      setBookingSubmitted(true);
    } catch (error) {
      alert('Failed to submit booking. Please try again.');
      console.error('Booking error:', error);
    } finally {
      setIsBooking(false);
    }
  };

  if (bookingSubmitted && submittedBooking) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600">Your booking has been successfully submitted</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-semibold">{submittedBooking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tour:</span>
                  <span className="font-semibold">{tour.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{new Date(submittedBooking.tour_date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of People:</span>
                  <span className="font-semibold">{submittedBooking.number_of_people}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transportation:</span>
                  <span className="font-semibold">{submittedBooking.transportation}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t">
                  <span>Total Amount:</span>
                  <span className="text-blue-600">₹{submittedBooking.total_amount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                <strong>Important:</strong> A confirmation email has been sent to {submittedBooking.customer_email}.
                Please check your inbox for further instructions and payment details.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-semibold"
              >
                Print Confirmation
              </button>
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Browse More Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tours
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">{tour.name}</h1>
            <div className="flex items-center text-white">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{tour.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{tour.duration}</p>
                </div>
                <div className="text-center">
                  <Navigation className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Distance</p>
                  <p className="font-semibold">{tour.distance}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-sm">{tour.bestTime}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{tour.fullDescription}</p>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Major Attractions</h3>
              <ul className="space-y-2">
                {tour.attractions.map((attraction, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transportation Options */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Transportation</h2>
              <div className="space-y-4">
                {transportOptions.map((transport) => (
                  <div key={transport.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <Car className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{transport.name}</h4>
                          <p className="text-sm text-gray-600">{transport.description}</p>
                          <p className="text-xs text-gray-500 mt-1">Capacity: {transport.capacity} people</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">₹{transport.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">per vehicle</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Tour</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of People *
                  </label>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="number"
                      required
                      min="1"
                      max="20"
                      value={formData.numberOfPeople}
                      onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tour Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.tourDate}
                    onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transportation *
                  </label>
                  <select
                    required
                    value={formData.transportation}
                    onChange={(e) => setFormData({ ...formData, transportation: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select transportation</option>
                    {transportOptions.map((transport) => (
                      <option key={transport.id} value={transport.id}>
                        {transport.name} - ₹{transport.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                  {selectedTransport && (
                    <p className="text-xs text-gray-500 mt-1">
                      Capacity: {selectedTransport.capacity} people
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requirements..."
                  />
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tour Price ({formData.numberOfPeople} {formData.numberOfPeople === 1 ? 'person' : 'people'})</span>
                      <span className="font-semibold">₹{(tour.price * formData.numberOfPeople).toLocaleString()}</span>
                    </div>
                    {selectedTransport && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Transportation ({selectedTransport.name})</span>
                        <span className="font-semibold">₹{selectedTransport.price.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>Total Amount</span>
                      <span className="text-blue-600">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isBooking}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {isBooking ? 'Processing...' : 'Confirm Booking'}
                  </button>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    By booking, you agree to our terms and conditions
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
