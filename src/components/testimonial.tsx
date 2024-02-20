import Image from "next/image";
import StarRating from "./star-rating";

type TestimonialProps = {
  testimonial: Testimonial;
};

const Testimonial = ({
  testimonial: { name, company, comment, image, rating },
}: TestimonialProps) => {
  return (
    <div className="h-full rounded-md bg-white px-10 py-12">
      {(image || name || company) && (
        <div className="mb-7 flex items-center">
          {image && (
            <Image
              src={image}
              alt={`Testimonial of ${name}`}
              className="mr-5 shrink-0"
              width={55}
              height={55}
            />
          )}
          {name || company ? (
            <div className="testimonial__info">
              {name && (
                <span className="mb-1 block text-md font-bold text-foreground">
                  {name}
                </span>
              )}
              {company && (
                <span className="block text-[0.875rem] text-slate-400">
                  {company}
                </span>
              )}
            </div>
          ) : null}
        </div>
      )}

      {comment || rating ? (
        <div>
          {comment && <p className="text-md">{comment}</p>}
          {rating && (
            <div className="mt-4">
              <StarRating value={rating} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Testimonial;
