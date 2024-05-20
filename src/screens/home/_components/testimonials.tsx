/* eslint-disable @next/next/no-img-element */
export const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ]

  return (
    <section className="py-14">
      <div>
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            See what others saying about us
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="rounded-xl bg-gray-100 p-4">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      alt={item.title}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <span className="block font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-600">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
