import FeedbackCarousel from "./FeedbackCarousel";

const testimonials = [
  {
    id: 1,
    image: "/testimonial/img1.webp",
    name: "John Doe",
    designation: "Senior Software Engineer",
    reviewText:
      "This platform has significantly improved my productivity. The tools are intuitive, and the support team is incredibly responsive. Highly recommended!",
    star: 5,
    quotePng: "/testimonial/quote.png",
  },
  {
    id: 2,
    image: "/testimonial/img2.webp",
    name: "Jane Smith",
    designation: "Product Manager",
    reviewText:
      "I've been able to streamline our workflows thanks to the comprehensive features offered. The user experience is top-notch and the customer service is exceptional.",
    star: 4,
    quotePng: "/testimonial/quote2.png",
  },
  {
    id: 3,
    image: "/testimonial/img3.webp",
    name: "Emily Johnson",
    designation: "UX Designer",
    reviewText:
      "The attention to detail and commitment to user satisfaction is evident. This service has been a game-changer for our team.",
    star: 5,
    quotePng: "/testimonial/quote3.png",
  },
];

const CustomerFeedback = () => {
  return (
    <div>
      <FeedbackCarousel items={testimonials} />
    </div>
  );
};

export default CustomerFeedback;
