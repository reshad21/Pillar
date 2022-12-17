// import Monitize from 'Monitize.css';
import React from 'react';
const Monitize = () => {
    const styles = {
        button: {
            position: 'absolute',
            left: 'auto',
            top: '0',
            right: '0',
            bottom: 'auto',
            display: 'block',
            height: '55px',
            padding: '12px 32px',
            border: '4px #d2d3f5',
            borderRadius: '0 999px 999px 0',
            backgroundColor: '#4624d6',
            outlineOffset: '0px',
            outline: 'transparent 1px',
            color: '#fff',
            fontSize: '16px',
            lineHeight: '1.4',
            fontWeight: '600',
            letterSpacing: '-.02em',
            textDecoration: 'none',
        },
        inputText: {
            // maxWidth: '100%',
            // width: '454px',
            height: '55px',
            marginBottom: '0',
            padding: '12px 16px 12px 84px',
            border: '1px solid #4624d6',
            borderRadius: '100px',
            backgroundColor: '#fff',
        },
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-32 justify-between">
                <div className="flex flex-col gap-5">
                    <h1 className='text-5xl font-bold'>Monetize Your <br /> <span className='text-primary'>Creativity</span></h1>
                    <p className='font-normal text-lg text-slate-700'>The creator business platform with the tools you need to achieve your goals.</p>

                    <div className="">
                        <div className="relative">
                            <input type="text" placeholder="username" className="input input-bordered w-full md:w-full lg:w-[454px]" style={styles.inputText} />

                            <div class="email-text-block absolute top-4 left-5 text-blue-700 font-bold">pillar.io/</div>

                            <button className="btn btn-primary" style={styles.button}>Claim</button>
                        </div>
                    </div>

                </div>
                <div className="">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, cumque est mollitia quis fuga perspiciatis nobis ab voluptates deserunt dolorum ut tempora voluptas illum ex consequatur autem sapiente eveniet corrupti possimus nostrum reiciendis iusto voluptate facere necessitatibus? Officiis odio cumque eum accusantium quasi beatae hic quis qui recusandae necessitatibus, repellat nihil vel exercitationem. Inventore amet quo dolores culpa totam alias fuga adipisci labore dolor, doloribus eveniet nostrum, ducimus nisi atque optio accusantium? Ex facilis non ipsa vel repudiandae, aspernatur corporis aliquam ad veniam totam, numquam voluptate aperiam nisi quas nesciunt. Dicta laborum nisi atque aliquid omnis ipsa accusamus dolorum possimus?</p>
                </div>
            </div>
        </div>
    );
};

export default Monitize;