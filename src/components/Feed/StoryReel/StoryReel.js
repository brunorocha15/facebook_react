import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import pessoa1 from '../../../img/story/storyImage/imagem1.jpg';
import pessoa2 from '../../../img/story/storyImage/imagem2.jpg';
import pessoa3 from '../../../img/story/storyImage/imagem3.jpg';
import pessoa4 from '../../../img/story/storyImage/imagem4.jpg';
import pessoa5 from '../../../img/story/storyImage/imagem5.jpg';

// images (story)
import story1 from '../../../img/story/story1.jpg'
import story2 from '../../../img/story/story2.jpg'
import story3 from '../../../img/story/story3.jpg'
import story4 from '../../../img/story/story4.jpg'
import story5 from '../../../img/story/story5.jpg'


const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={story1}
                profileSrc={pessoa1}
                title="Neymar.jr"
            />
            <Story 
                image={story2}
                profileSrc={pessoa2}
                title="Tais Araujo"
            />
            <Story 
                image={story3}
                profileSrc={pessoa3}
                title="Mano Brown"
            />
            <Story 
                image={story4}
                profileSrc={pessoa4}
                title="Mr. Catra"
            />
            <Story 
                image={story5}
                profileSrc={pessoa5}
                title="Corinthians"
            />
        </div>
    )
}

export default StoryReel;
