import Image from "next/image";
import StarRating from "./star-rating";

type TestimonialProps = {
  testimonial: Testimonial;
};

const TestimonialLayout2 = ({
  testimonial: { name, company, comment, image, rating },
}: TestimonialProps) => {
  return (
    <div className="flex flex-wrap gap-5 rounded-xl bg-white p-12 px-10 py-12 shadow-sm dark:bg-slate-850 lg:flex-nowrap">
      {(image || name || company) && (
        <>
          {image && (
            <Image
              src={image}
              alt={`Testimonial of ${name}`}
              className="w-28 shrink-0 self-start rounded-xl lg:w-auto"
              width={168}
              height={168}
            />
          )}
          <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-primary dark:border-slate-700 md:mb-0 md:w-16">
            <svg
              width="22"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white"
            >
              <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z"></path>
            </svg>
          </div>
          {name || company || rating || comment ? (
            <div className="testimonial__info">
              {rating && (
                <div className="mb-3">
                  <StarRating value={rating} />
                </div>
              )}
              {comment && <p className="mb-5 text-md">{comment}</p>}
              {name && (
                <span className="mb-0 block text-xs font-bold text-foreground dark:text-white">
                  {name}
                </span>
              )}
              {company && (
                <span className="text-[.8125rem] font-medium tracking-tight text-slate-400 dark:text-slate-300">
                  {company}
                </span>
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default TestimonialLayout2;
