import React, { useState, useEffect } from 'react';

const ScrollAction = () => {
  const [toggle, setToggle] = useState(false);
  const [elPosition, setElPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const myPosition = window.pageYOffset;
    setScrollPosition(myPosition);
  };

  const elementOffset = (el) => {
    var screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    console.log(screenHeight);
    let rect = el.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop - screenHeight + 100;
  };

  useEffect(() => {
    setElPosition(elementOffset(document.querySelector('#myBox')));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='max-w-2xl mx-auto p-8'>
      <h2 className='sm:text-3xl sm:leading-snug font-semibold tracking-wide text-yellow-800 mb-6'>
        Tailwind Examples
      </h2>
      <hr />
      <section className='p-5 m-5'>
        <div
          className={`w-20 h-10 bg-emerald-600 shadow-lg origin-top-left`}
        ></div>
      </section>
      <hr />
      <section className='p-5 m-5'>
        <button
          onClick={() => setToggle(!toggle)}
          type='button'
          className='bg-blue-200 hover:bg-blue-800 hover:text-white rounded-md shadow-md py-2 px-4'
        >
          Click Here
        </button>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        excepturi odit fugit maiores sapiente maxime impedit eos. Et ab nemo
        commodi maiores vero numquam veniam sunt voluptates nesciunt autem
        ipsam, doloremque minima facilis, deleniti id expedita maxime quis dicta
        iure sint exercitationem. Doloribus ad tempore unde cum perferendis ex
        accusamus ducimus molestiae, rem, ipsa deserunt. Mollitia ducimus dicta
        exercitationem in nisi nam, dolor labore optio non? Iure deleniti illo
        quis delectus nihil nulla, esse sapiente nobis. Numquam in eaque
        corporis inventore ea quasi, exercitationem adipisci, aut maxime dolorum
        illum, magnam laudantium! Delectus adipisci, voluptatibus repudiandae
        iusto rerum nesciunt unde officia! Iure explicabo eos ducimus nesciunt
        rerum expedita delectus quibusdam voluptatem nostrum dolorem! Hic,
        dolore nihil ea magnam quisquam, cum eligendi assumenda ab neque
        corporis ratione amet repellat temporibus excepturi labore repellendus
        sequi quaerat accusantium obcaecati est ipsum! Sequi cupiditate, quae
        eligendi doloremque magnam labore blanditiis nemo dolor reprehenderit
        atque veritatis officia eveniet suscipit ducimus minima iusto a quisquam
        tempore! Perferendis, incidunt a? Amet rerum quidem autem iusto
        quibusdam cum impedit tempore repudiandae blanditiis labore excepturi
        neque corrupti incidunt necessitatibus inventore dolore hic obcaecati,
        quas natus? Sapiente temporibus fugiat autem nostrum sit. Doloremque
        officiis reprehenderit excepturi placeat tempora ducimus inventore
        veritatis facilis! Similique culpa odit nulla ea, enim autem dolor
        consequuntur temporibus aut dolore eligendi modi voluptates iusto
        dolores eaque. Tempora ullam ipsum nobis labore odio libero unde numquam
        rerum, quasi itaque aspernatur ducimus saepe delectus aliquid vero. Esse
        laboriosam iure error quidem ea earum, commodi, quasi quo aperiam
        soluta, maiores blanditiis. Animi unde, nostrum facere fuga, hic id
        consectetur laborum dolore asperiores, delectus dolorem quod?
        Consequatur ex laboriosam, ipsam necessitatibus asperiores earum maxime
        vero minima id, exercitationem quibusdam unde non obcaecati hic. Dicta
        eaque dolores fugiat, possimus tenetur reiciendis ipsa molestias illum
        assumenda quibusdam deserunt molestiae iusto repudiandae sed omnis
        obcaecati nobis dolor facilis unde sint similique! Sit, dicta, natus eos
        totam minima aliquam ducimus, facilis autem tempora animi libero.
        Exercitationem voluptatum, quis optio asperiores nulla autem dolorem
        officiis cupiditate. Reprehenderit odit porro eos adipisci sed ad ipsum
        error omnis delectus molestias fugiat minus, nisi animi officia!
        Provident non velit architecto dolorum aspernatur numquam a mollitia,
        eveniet ab quisquam, ipsam sequi qui placeat? Reprehenderit fuga magnam
        voluptas aliquam dolorum! Corporis consequuntur excepturi sequi quod
        aut? Ipsam praesentium, ab officia omnis sapiente mollitia! Incidunt
        labore nostrum aliquam. Asperiores eaque aspernatur voluptatem
        dignissimos aut quo a earum ab doloribus qui. Hic eum doloremque vero
        rerum eius. Cumque harum corporis, aliquam doloremque sapiente porro.
        Quo officia dignissimos inventore ratione velit cumque ipsa fugit
        expedita, magnam sapiente reiciendis iusto harum laboriosam totam
        dolorem accusantium odit itaque repellendus vitae exercitationem
        distinctio at hic. Rem, laboriosam. Non pariatur harum repellendus aut
        eius tempore, in iusto reprehenderit amet eum? Quae consequatur amet
        maiores nemo sint in perspiciatis magnam neque tenetur error, deserunt
        autem maxime nihil totam nesciunt corrupti et unde ratione recusandae
        atque. Quam distinctio nam, recusandae, fugit magni assumenda inventore
        provident pariatur, suscipit error perferendis. Labore recusandae
        reiciendis repellendus distinctio. Reprehenderit dolor rem error
        inventore possimus quisquam vero id qui, expedita sed officia vel
        explicabo quidem, ullam ipsam praesentium in nulla repellat quam
        eligendi quis debitis nisi. In earum quidem praesentium accusantium quas
        explicabo aliquam laborum quibusdam eius adipisci. Quis quisquam non
        officia quibusdam adipisci repellat maxime provident quae suscipit
        temporibus, ea modi corrupti fugiat ipsum. Necessitatibus, veritatis
        amet nemo ea et hic temporibus alias non, maiores sint, quis voluptates
        fuga ipsa eveniet. Hic, tempora omnis, esse corporis natus facere
        provident dolores sequi explicabo in ratione temporibus deleniti ipsa
        placeat vitae. Atque excepturi voluptates alias perferendis dicta?
        Voluptate dignissimos blanditiis, saepe quam aperiam accusantium odit
        quibusdam.
      </p>
      <section className='p-5 m-5'>
        <div
          id='myBox'
          className={`w-20 h-10 bg-emerald-600 shadow-lg origin-top-left ${
            scrollPosition > elPosition
              ? 'scale-x-500 transform duration-1000 ease-out'
              : 'scale-x-100 transform duration-1000 ease-out'
          }`}
        >
          {scrollPosition}
          {'    '}
          {elPosition}
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        excepturi odit fugit maiores sapiente maxime impedit eos. Et ab nemo
        commodi maiores vero numquam veniam sunt voluptates nesciunt autem
        ipsam, doloremque minima facilis, deleniti id expedita maxime quis dicta
        iure sint exercitationem. Doloribus ad tempore unde cum perferendis ex
        accusamus ducimus molestiae, rem, ipsa deserunt. Mollitia ducimus dicta
        exercitationem in nisi nam, dolor labore optio non?
      </p>
    </div>
  );
};

export default ScrollAction;
