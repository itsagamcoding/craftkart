
const allArtData = [
  {
    id: 400,
    title: "Krishnanveinu",
    artist: "Surya Pratap Samal",
    medium: "Acrylic On Paper",
    dimensions: "16.5 x 11.5 (inch)",
    price: 1000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishnanveinu_surya_pratap_samal__ACRYLIC_ON_PAPER_16.5x11.5_inch.jpg",
    artistInfo:
      "Surya Pratap Samal is a skilled artist known for his detailed and expressive paintings. His work often explores themes of spirituality and devotion, capturing the essence of his subjects with vibrant colors and intricate details.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 401,
    title: "Krishna Handpainted Original Painting & Wall Art",
    artist: "Akash Kumar",
    medium: "Acrylic On Paper",
    dimensions: "11 x 15 (inch)",
    price: 1800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna.jpg",
    artistInfo:
      "Akash Kumar is a contemporary artist whose work is characterized by its bold use of color and dynamic compositions. His paintings often depict scenes from mythology, bringing ancient tales to life with a modern twist.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 402,
    title: "Krishna Painting",
    artist: "Anuradha Saxena",
    medium: "Acrylic On Canvas Board",
    dimensions: "12 x 16 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_acrylic_painting_Anuradha_Saxena1687416510606.jpg",
    artistInfo:
      "Anuradha Saxena is a versatile artist whose works range from traditional to contemporary styles. She excels in capturing the emotional depth of her subjects, often using acrylics to create vibrant and textured pieces.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 403,
    title:
      "Krishna Tales Krishna With Flute Painting For Wall, Acrylic On Canvas Portrait Painting",
    artist: "Megha Chakraborty",
    medium: "Acrylic On Canvas",
    dimensions: "6.3 x 9.84 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/20210911_003741.jpg",
    artistInfo:
      "Megha Chakraborty is an emerging artist known for her delicate and expressive paintings. Her work often focuses on themes of devotion and spirituality, using soft colors and fluid lines to create a sense of serenity and peace.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 404,
    title: "Krishna",
    artist: "Nivedita Sharma",
    medium: "Undefined",
    dimensions: "24 x 18 (inch)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/9ed5995d-390a-4967-ae8b-144b35b6c0b3.jpeg",
    artistInfo:
      "Nivedita Sharma is an artist whose work spans a variety of mediums and styles. Her paintings often explore themes of mythology and spirituality, using a mix of traditional and contemporary techniques to create unique and captivating pieces.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 405,
    title: "Krishna With Yashoda",
    artist: "Priyanka Samanta",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 16 (inch)",
    price: 6500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna-with-Yashoda-Priyanka-Samanta-Acrylic-On-Canvas-12X16inch1691062095942.jpg",
    artistInfo:
      "Priyanka Samanta is known for her vibrant and emotive paintings. Her work often depicts scenes from Indian mythology, capturing the beauty and complexity of her subjects with rich colors and intricate details.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 406,
    title: "Krishna Raas Lila - Madhubani Art",
    artist: "Tapendra Jha",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "30 x 22 (inch)",
    price: 8000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_Raas_Lila_-_Madhubani_Art_ZymEKQA.jpg",
    artistInfo:
      "Tapendra Jha is a master of Madhubani art, known for his intricate and colorful paintings. His work often depicts scenes from Indian mythology, bringing to life the vibrant traditions and stories of his culture.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 407,
    title:
      "Krishna Flute Abstract Original Painting & Wall Art, The Music Of Krishna 01",
    artist: "Kankana Pal",
    medium: "Acrylic On Canvas",
    dimensions: "20 x 24 (inch)",
    price: 8000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/0047.JPG",
    artistInfo:
      "Kankana Pal is a contemporary artist known for her abstract and expressive paintings. Her work often explores themes of music and spirituality, using bold colors and dynamic compositions to create a sense of movement and energy.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 408,
    title: "Krishna Painting",
    artist: "Babita Ahuja",
    medium: "Acrylic On Canvas",
    dimensions: "8 x 14 (inch)",
    price: 1500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1689912532775.jpg",
    artistInfo:
      "Babita Ahuja is a talented artist whose work is characterized by its vibrant colors and bold compositions. Her paintings often depict scenes from Indian mythology, capturing the essence of her subjects with a modern and contemporary style.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 409,
    title: "Krishna And Radha Luxury Original Handpainted Painting For Home",
    artist: "Aishwarya Nair",
    medium: "Acrylic On Canvas",
    dimensions: "10 x 12 (inch)",
    price: 3000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_and_Radha_Aishwarya_Nair_Acrylic_On_Canvas_10x12_inch_1CE7pRy.jpg",
    artistInfo:
      "Aishwarya Nair is an emerging artist known for her delicate and expressive paintings. Her work often focuses on themes of love and devotion, using soft colors and fluid lines to create a sense of serenity and peace.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 410,
    title: "Krishna Abstract Modern Art Handpainted Painting For Home",
    artist: "Jagdishchandra Patel",
    medium: "Acrylic On Canvas",
    dimensions: "10 x 10 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/cd4df56a-b1de-4519-9a4d-d5a5feccdab1.jpeg",
    artistInfo:
      "Jagdishchandra Patel is an artist whose work spans a variety of mediums and styles. His paintings often explore themes of mythology and spirituality, using a mix of traditional and contemporary techniques to create unique and captivating pieces.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 411,
    title: "Krishna With Flute Original Painting & Wall Art",
    artist: "Anjani Golconda",
    medium: "Watercolor On Paper",
    dimensions: "9 x 12 (inch)",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_Ankani_Golconda.jpg",
    artistInfo:
      "Anjani Golconda is a talented watercolor artist known for her delicate and expressive paintings. Her work often focuses on themes of devotion and spirituality, capturing the beauty and tranquility of her subjects with soft colors and fluid lines.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 412,
    title: "Krishna Kerala Mural",
    artist: "Pallavi Gellaboina",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 18 (inch)",
    price: 5500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1689069614687.jpg",
    artistInfo:
      "Pallavi Gellaboina is a versatile artist whose works range from traditional to contemporary styles. She excels in capturing the emotional depth of her subjects, often using acrylics to create vibrant and textured pieces.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 413,
    title: "Krishna With Ducks Handpainted Painting & Wall Art",
    artist: "Pushpa More",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 16.5 (inch)",
    price: 7000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_with_ducks.jpg",
    artistInfo:
      "Pushpa More is known for her vibrant and emotive paintings. Her work often depicts scenes from Indian mythology, capturing the beauty and complexity of her subjects with rich colors and intricate details.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 414,
    title:
      "Krishna Flute Handpainting Abstract Painting, Wall Art The Music Of Krishna 02",
    artist: "Kankana Pal",
    medium: "Acrylic On Canvas",
    dimensions: "20 x 24 (inch)",
    price: 8000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/The_Music_of_Krishna_02_KANKANA_PAL_20x24.jpg",
    artistInfo:
      "Kankana Pal is a contemporary artist known for her abstract and expressive paintings. Her work often explores themes of music and spirituality, using bold colors and dynamic compositions to create a sense of movement and energy.",
    artType: "RadhakrishnaArt",
  },
  {
    id: 1000,
    title:
      "People, Human Modern Contemporary Handpainted Painting For Home Ektara 2",
    artist: "Pritam Sarkar",
    artistInfo:
      "Pritam Sarkar's artworks, like People, Human Modern Contemporary, blend contemporary themes with vibrant colors. Using tempera on board, his paintings capture everyday life with artistic flair.",
    medium: "Tempera On Board",
    dimensions: "16 x 12 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Picsart_22-10-29_08-37-44-936-02.jpeg",
    artType: "PattachitraArt",
  },
  {
    id: 1001,
    title: "People Modern Art Handpainted Painting For Home Ektara 1",
    artist: "Pritam Sarkar",
    artistInfo:
      "Pritam Sarkar's People Modern Art Handpainted Painting, like Ektara 1, showcases vibrant colors and contemporary themes. Using acrylic on canvas, his artworks bring a modern twist to traditional artistic forms.",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 12 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Picsart_22-11-04_00-37-37-510-01.jpeg",
    artType: "PattachitraArt",
  },
  {
    id: 1002,
    title: "Dance Form In Pattachitra",
    artist: "Subhalaxmi Chintak",
    artistInfo:
      "Subhalaxmi Chintak's Dance Form In Pattachitra demonstrates her mastery in depicting cultural themes through acrylic on acrylic sheet. Her artworks reflect the traditional art form's richness and storytelling.",
    medium: "Acrylic On Acrylic Sheet",
    dimensions: "24 x 12 (inch)",
    price: 11000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Danceform_in_Pattachitra_Subhalaxmi_Chintak.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1003,
    title: "Lord Jagannath With Dasa Avatar",
    artist: "Subhalaxmi Chintak",
    artistInfo:
      "Subhalaxmi Chintak's Lord Jagannath With Dasa Avatar captures the divine essence through acrylic on acrylic sheet. Her artworks portray spiritual themes with intricate details and vibrant colors.",
    medium: "Acrylic On Acrylic Sheet",
    dimensions: "48 x 24 (inch)",
    price: 18000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Lord_Jagganath_with_dasa_avatar_Shubhalaxmi_Chintak.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1004,
    title:
      "Radha Krishna Handpainted Natural Color Tradition Painting & Wall Art",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Radha Krishna Handpainted Natural Color Tradition Painting & Wall Art uses natural colors on paper to depict traditional stories with artistic finesse. His artworks celebrate cultural heritage and spiritual narratives.",
    medium: "Natural Color On Paper",
    dimensions: "22 x 29.5 (inch)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/20.radha_krishna_pattachitra29.5x22_image__xLbtcwZ.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1005,
    title: "Pankhir Biye",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Pankhir Biye showcases traditional motifs and vibrant colors on paper. His artworks, using natural colors, depict cultural narratives and celebratory themes.",
    medium: "Natural Colour On Paper",
    dimensions: "22 x 29.5 (inch)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/19.pankhir_biea_pattachitra29.5x22_2_0fyDLhP.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1006,
    title: "Mansa Mangal 2",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Mansa Mangal 2 depicts cultural festivities with natural colors on handmade paper. His artworks capture traditional stories and rituals with vivid detail.",
    medium: "Natural Color On Handmade Paper",
    dimensions: "22 x 28 (inch)",
    price: 15500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/18.mansa_mangal_pattachitra_color28x22_bvx3xoC.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1007,
    title: "Mansa Mangal",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Mansa Mangal portrays traditional ceremonies and cultural celebrations on handmade paper. His artworks, using natural colors, capture the essence of community life and festivities.",
    medium: "Natural Color On Handmade Paper",
    dimensions: "22 x 28 (inch)",
    price: 11000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/17.mansa_mangal_pattachitra28x22_wv7BQRC.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1008,
    title: "Ramayan 2",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Ramayan 2 narrates epic tales through traditional Pattachitra techniques. Using natural colors on paper, his artworks bring to life mythological stories with cultural reverence.",
    medium: "Natural Colour On Paper",
    dimensions: "22 x 28 (inch)",
    price: 11000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/16.ramayan2_pattachitra28x22_3_JQzgZmi.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1009,
    title: "Fish Marriage",
    artist: "Sahajan Chitrakar",
    artistInfo:
      "Sahajan Chitrakar's Fish Marriage portrays cultural rituals and narratives with natural colors on handmade paper. His artworks celebrate community traditions and festive occasions.",
    medium: "Natural Color On Handmade Paper",
    dimensions: "22 x 29 (inch)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/14.Pattchitra_fish_marriage22x29_pwFrzU3.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1010,
    title: "Gautam",
    artist: "Pritam Sarkar",
    artistInfo:
      "Pritam Sarkar's Gautam combines acrylic on paper with vibrant colors and intricate details. His artworks capture spiritual themes with a contemporary artistic touch.",
    medium: "Acrylic On Paper",
    dimensions: "27 x 20 (inch)",
    price: 11000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Gautam.png",
    artType: "PattachitraArt",
  },
  {
    id: 1011,
    title: "Dancing Lord Ganesh Patachitra Painting For Wall",
    artist: "Sucheta Meher",
    artistInfo:
      "Sucheta Meher's Dancing Lord Ganesh Patachitra Painting portrays divine themes on acrylic on Tussor silk cloth. Her artworks capture spiritual narratives with artistic finesse and cultural reverence.",
    medium: "Acylic On Tussor Silk Cloth",
    dimensions: "19 x 21 (inch)",
    price: 15000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/20210802_221356_9PD2PRB.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1012,
    title: "Dancing Gopies Pattachitra Painting For Wall",
    artist: "Sucheta Meher",
    artistInfo:
      "Sucheta Meher's Dancing Gopies Pattachitra Painting captures cultural festivities on acrylic on Tussor silk. Her artworks depict traditional themes with vibrant colors and intricate detailing.",
    medium: "Acrylic On Tussor Silk",
    dimensions: "20 x 37 (inch)",
    price: 25000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/20210806_200427_gtHt3cY.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1013,
    title: "Chaitanya",
    artist: "Ria Mukherjee",
    artistInfo:
      "Ria Mukherjee's Chaitanya portrays spiritual themes on acrylic on paper. Her artworks capture divine narratives with artistic flair and intricate details.",
    medium: "Acrylic On Paper",
    dimensions: "15.35 x 22.24 (inch)",
    price: 15000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/chaitanya_WcVEW8E_ckBTPE4.jpg",
    artType: "PattachitraArt",
  },
  {
    id: 1014,
    title: "Radha Krishna Rasa Leela Handpainted Traditional Painting For Wall",
    artist: "Subhalaxmi Chintak",
    artistInfo:
      "Subhalaxmi Chintak's Radha Krishna Rasa Leela Handpainted Traditional Painting captures divine love on fabric colors on silk cloth. Her artworks depict mythological narratives with cultural richness.",
    medium: "Fabric Colors On Silk Cloth",
    dimensions: "7.87 x 7.09 (inch)",
    price: 8010,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/RADHA_KRISHA_RASA_LILA.png",
    artType: "PattachitraArt",
  },
  {
    id: 1,
    title: "Peacock Mandala Painting",
    artist: "Sravya Jagirdar",
    artistInfo:
      "Sravya Jagirdar specializes in intricate Mandala paintings that often feature peacocks, symbolizing beauty and spirituality. Her artworks blend traditional Mandala patterns with vibrant colors, creating mesmerizing compositions that evoke a sense of harmony and balance.",
    medium: "Acrylic on Canvas",
    dimensions: "65 x 50 cm",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1699942508837.jpg",
    artType: "MandalaArt",
  },
  {
    id: 2,
    title: "Mandala Art",
    artist: "Shahina Imam",
    artistInfo:
      "Shahina Imam is known for her intricate Mandala artworks that reflect a deep spiritual connection. Her pieces often explore geometric symmetry and symbolism, creating meditative and visually captivating compositions.",
    medium: "Ink on Paper",
    dimensions: "8.3 x 11.7 inches",
    price: 1300,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1687238532697.jpg",
    artType: "MandalaArt",
  },
  {
    id: 3,
    title: "Freedom",
    artist: "Urvashi Bapna",
    artistInfo:
      "Urvashi Bapna's Mandala artworks are characterized by intricate patterns and a free-flowing style. Her pieces often convey a message of freedom and creativity, using Mandala as a medium to explore personal expression and spirituality.",
    medium: "Ink on Paper",
    dimensions: "11.4 x 16.5 inches",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Freedom_Urvashi_Bapna_ink_on_paper_11.5x16.5_inch_frame.jpg",
    artType: "MandalaArt",
  },
  {
    id: 4,
    title: "Radha Krishana Love",
    artist: "Syamala Rakoti",
    artistInfo:
      "Syamala Rakoti's Mandala artworks often depict themes of love and devotion, drawing inspiration from Indian mythology and culture. Her intricate designs and careful detailing reflect a deep appreciation for traditional art forms.",
    medium: "Ink on Paper",
    dimensions: "12 x 16.5 inches",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/4232663e-809f-4a69-9bf4-6ecd5d449308_HLr31Ni.jpeg",
    artType: "MandalaArt",
  },
  {
    id: 5,
    title: "Shiv Shakti Mandala Art",
    artist: "Rohit Sharma",
    artistInfo:
      "Rohit Sharma's Mandala artworks often explore themes of divine energy and spirituality. His pieces combine traditional Mandala patterns with symbols of Hindu mythology, creating harmonious and visually stunning compositions.",
    medium: "Ink on Paper",
    dimensions: "11.6 x 16.5 inches",
    price: 3000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Bhole_Riya_Ria1687234916557.jpeg",
    artType: "MandalaArt",
  },
  {
    id: 6,
    title: "Kurnja Art",
    artist: "Rohit Sharma",
    artistInfo:
      "Rohit Sharma's Kurnja Art is inspired by traditional Madhubani paintings, characterized by intricate patterns and vibrant colors. His artworks often depict scenes from nature and daily life, celebrating the rich cultural heritage of India's folk art.",
    medium: "Ink on Paper",
    dimensions: "11.6 x 16.5 inches",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Kurnja_art_Riya_Ria1687152870557.jpeg",
    artType: "MandalaArt",
  },
  {
    id: 7,
    title: "Ganesha",
    artist: "Ishita Singh",
    artistInfo:
      "Ishita Singh's Mandala artworks often feature Lord Ganesha, symbolizing wisdom and auspiciousness. Her intricate designs and spiritual themes reflect a deep reverence for Hindu mythology and cultural traditions.",
    medium: "Ink on Paper",
    dimensions: "42 x 29.7 cm",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1692860372972.jpg",
    artType: "MandalaArt",
  },
  {
    id: 8,
    title: "Mystic Hues: A Spiritual Connection II",
    artist: "Tanvi Parekh",
    artistInfo:
      "Tanvi Parekh's Mandala artworks explore spiritual themes and inner peace through intricate patterns and vibrant colors. Her pieces are inspired by ancient Mandala traditions, aiming to evoke a sense of tranquility and mindfulness.",
    medium: "Acrylic on Canvas",
    dimensions: "30 x 30 inches",
    price: 95000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Mystic_hues_a_spiritual_Connection_Tanvi_Parekh.jpg",
    artType: "MandalaArt",
  },
  {
    id: 9,
    title: "Radha Krishna Mirror Mandala Art",
    artist: "Rohit Sharma",
    artistInfo:
      "Rohit Sharma's Mirror Mandala Art combines traditional Mandala patterns with reflective surfaces, creating dynamic and visually striking compositions. His artworks often depict themes of love and devotion from Hindu mythology.",
    medium: "Ink on Paper",
    dimensions: "11.6 x 16.5 inches",
    price: 7000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1687234763166.jpg",
    artType: "MandalaArt",
  },
  {
    id: 10,
    title: "Lady Mandala Art | Wall Hanging",
    artist: "Rohit Sharma",
    artistInfo:
      "Rohit Sharma's Lady Mandala Art is characterized by delicate patterns and feminine themes. His artworks often serve as decorative wall hangings, blending traditional Mandala techniques with contemporary design.",
    medium: "Ink on Paper",
    dimensions: "8.2 x 11.6 inches",
    price: 2600,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Mandala_Riya_Ria_INK_ON_PAPER_8.2x11.6inch.jpeg",
    artType: "MandalaArt",
  },
  {
    id: 11,
    title: "Gopala",
    artist: "Chetan Katigar",
    artistInfo:
      "Chetan Katigar's Mandala artworks often depict themes from Hindu mythology, portraying divine figures such as Lord Krishna. His pieces combine intricate Mandala patterns with spiritual symbolism, creating artworks that inspire devotion and contemplation.",
    medium: "Acrylic on Canvas",
    dimensions: "22 x 22 inches",
    price: 24000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/ca834dfc-720f-4aab-a40e-adb258a9ae1c.jpeg",
    artType: "MandalaArt",
  },
  {
    id: 150,
    title: "Krishna Raas Lila - Madhubani Art",
    artist: "Tapendra Jha",
    artistInfo:
      "Tapendra Jha's Madhubani artworks, like Krishna Raas Lila, are celebrated for their intricate detailing and vibrant colors. Using fabric colors on handmade paper, he brings to life mythological narratives and cultural stories.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "30 x 22 (inch)",
    price: 8000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna_Raas_Lila_-_Madhubani_Art_ZymEKQA.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 151,
    title: "Madhubani Painting Peacock",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha is renowned for her mastery in Madhubani art, as seen in the vibrant Madhubani Painting Peacock. Using fabric colors on handmade paper, she captures the essence of nature and cultural motifs in her artworks.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22.5 x 15 (inch)",
    price: 6000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/ODPL99121686978361866.JPG",
    artType: "MadhubaniArt"
  },
  {
    id: 152,
    title: "Wildlife Madhubani Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Wildlife Madhubani Painting showcases her talent in portraying animals and nature with intricate Madhubani motifs. Using fabric colors on handmade paper, her artworks reflect the richness of Madhubani tradition.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "7.5 x 22.5 (inch)",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/ABYT2796.JPG",
    artType: "MadhubaniArt"
  },
  {
    id: 153,
    title: "Radha Krishna - Madhubani Art",
    artist: "Chanda Kumari",
    artistInfo:
      "Chanda Kumari's Madhubani artworks, such as Radha Krishna, are known for their spiritual themes and intricate Madhubani detailing. Using fabric colors on handmade paper, she captures the divine love of Radha and Krishna.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22 x 30 (inch)",
    price: 8740,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Raas_Lila_Radha-Krishna_Madhubani_Painting-Chanda_Kumari_22x30.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 154,
    title: "Van - Madhubani Elephant And Fishes Art",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Van - Madhubani Elephant And Fishes Art exemplifies her expertise in depicting animals and nature in the Madhubani style. Using fabric colors on handmade paper, her artworks showcase cultural richness and storytelling.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22 x 30 (inch)",
    price: 8950,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Elephant_and_Tree_Madhubani_Art.png",
    artType: "MadhubaniArt"
  },
  {
    id: 155,
    title: "People, Human Modern Contemporary Handpainted Painting For Home Ektara 2",
    artist: "Pritam Sarkar",
    artistInfo:
      "Pritam Sarkar's artworks, like People, Human Modern Contemporary, are characterized by their contemporary themes and vibrant colors. Using tempera on board, his paintings bring a modern twist to traditional artistic forms.",
    medium: "Tempera On Board",
    dimensions: "16 x 12 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Picsart_22-10-29_08-37-44-936-02.jpeg",
    artType: "MadhubaniArt"
  },
  {
    id: 156,
    title: "Vriksha Or Fishes/Matsya Madhubani Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Vriksha Or Fishes/Matsya Madhubani Painting showcases her talent in portraying nature and aquatic life in the Madhubani style. Using fabric colors on handmade paper, her artworks depict the harmony between flora and fauna.",
    medium: "Fabric Colour On Handmade Paper",
    dimensions: "15.5 x 22.5 (inch)",
    price: 11200,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Vriksha_Madhubani_Painting_Bandana_Jha_15.5X22.5.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 157,
    title: "Krishna Handpainted Original Painting & Wall Art",
    artist: "Akash Kumar",
    artistInfo:
      "Akash Kumar's Krishna Handpainted Original Painting & Wall Art captures the essence of Indian mythology and spiritualism. Using acrylic on paper, his artworks bring the divine stories of Krishna to life with vibrant colors and intricate details.",
    medium: "Acrylic On Paper",
    dimensions: "11 x 15 (inch)",
    price: 1800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Krishna.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 158,
    title: "Wildlife Madhubani Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Wildlife Madhubani Painting captures the beauty of nature through intricate Madhubani motifs. Using fabric colors on handmade paper, her artworks depict animals and their habitats with cultural significance.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "15 x 22.5 (inch)",
    price: 6000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/DWAV18911686978444434.JPG",
    artType: "MadhubaniArt"
  },
  {
    id: 159,
    title: "Village Lady Madhubani Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Village Lady Madhubani Painting portrays everyday life in rural India with vibrant Madhubani colors and motifs. Using fabric colors on handmade paper, her artworks celebrate the cultural heritage and traditions of Indian villages.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "7.5 x 22.5 (inch)",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/KTBP49191686978277289.JPG",
    artType: "MadhubaniArt"
  },
  {
    id: 160,
    title: "Fish Madhubani Painting And Artwork",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Fish Madhubani Painting And Artwork showcases her skill in depicting aquatic life and cultural motifs in the Madhubani style. Using fabric colors on handmade paper, her artworks reflect the traditional art forms of Bihar.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22 x 30 (inch)",
    price: 8900,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Bandana_Jha_Fish_Madhubani_painting_20000_Acrylic_on_canvas_18x24.jpg",
    artType:"MadhubaniArt"
  },
  {
    id: 161,
    title: "Jaal - Madhubani Art Fish And Trees Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's Jaal - Madhubani Art Fish And Trees Painting portrays the harmony between aquatic life and nature in the Madhubani style. Using fabric colors on handmade paper, her artworks celebrate cultural narratives and environmental themes.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22 x 30 (inch)",
    price: 8900,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Fish_Tree_Madhubani_Bandana_Jha_Fabric_color_on_handmade_paper_22x30.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 162,
    title: "Modern Luxury Women Painting For Home, Suhane Pal",
    artist: "Anil Kumar",
    artistInfo:
      "Anil Kumar's Modern Luxury Women Painting, like Suhane Pal, combines traditional themes with contemporary artistic styles. Using oil on canvas board, his artworks depict modern women in settings that reflect elegance and grace.",
    medium: "Oil On Canvas Board",
    dimensions: "24 x 30 (inch)",
    price: 30000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/IMG_20221119_105503_AuQkUeK.jpg",
    artType: "MadhubaniArt"
  },
  {
    id: 163,
    title: "People Modern Art Handpainted Painting For Home Ektara 1",
    artist: "Pritam Sarkar",
    artistInfo:
      "Pritam Sarkar's People Modern Art Handpainted Painting, like Ektara 1, showcases contemporary themes and vibrant colors. Using acrylic on canvas, his artworks bring a modern twist to traditional artistic forms, capturing the essence of everyday life.",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 12 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Picsart_22-11-04_00-37-37-510-01.jpeg",
    artType: "MadhubaniArt"
  },
  {
    id: 164,
    title: "Madhubani Women Playing Vena, Handpainted Painting For Home, Veena Vadini",
    artist: "Akash Kumar",
    artistInfo:
      "Akash Kumar's Madhubani Women Playing Vena, like Veena Vadini, celebrates the cultural richness and musical traditions of India. Using acrylic on canvas, his artworks portray women in artistic settings that highlight their grace and traditional roles.",
    medium: "Acrylic On Canvas",
    dimensions: "19 x 27 (inch)",
    price: 10000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Veena_Vadini_Akash_Kumar.jpg",
    artType: "MadhubaniArt"
  },

  {
    id: 100,
    title: "Feeding (Abhijit Banerjee)",
    artist: "Abhijit Banerjee",
    artistInfo:
      "Abhijit Banerjee's artwork 'Feeding' captures the delicate balance of nature through vibrant acrylic strokes on canvas.",
    medium: "Acrylic On Canvas",
    dimensions: "60 x 36 (inch)",
    price: 1500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1688370893004.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 101,
    title: "Bird Flamingo Vastu, Handpainted Painting For Wall",
    artist: "Ankita Patel",
    artistInfo:
      "Ankita Patel's 'Bird Flamingo Vastu' brings a splash of color to any wall, blending acrylic hues to depict the grace of flamingos.",
    medium: "Acrylic On Canvas",
    dimensions: "38.5 x 67 (cm)",
    price: 700,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Bird_flamingo_Handpainted_painting_for_wall_Ankita_Patel_Acrylic_On_Canvas_15X26inch1686811987766.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 102,
    title: "Hunting Eagle",
    artist: "Monika Bharti",
    artistInfo:
      "Monika Bharti's 'Hunting Eagle' captures the majesty of the eagle in acrylic on canvas, showcasing its prowess and beauty.",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 11 (inch)",
    price: 3000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Hunting_eagle_Monika_Bharti_Acrylic_On_Canvas_11x12_inch.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 103,
    title: "Jaal - Madhubani Art Fish And Trees Painting",
    artist: "Bandana Jha",
    artistInfo:
      "Bandana Jha's 'Jaal' is a vibrant Madhubani art piece on handmade paper, depicting the harmony of fish and trees in fabric colors.",
    medium: "Fabric Color On Handmade Paper",
    dimensions: "22 x 30 (inch)",
    price: 8900,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Fish_Tree_Madhubani_Bandana_Jha_Fabric_color_on_handmade_paper_22x30.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 104,
    title: "Project #56",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Project #56' is a captivating acrylic on paper artwork that explores themes of imagination and creativity.",
    medium: "Acrylic On Paper",
    dimensions: "22 x 28 (inch)",
    price: 2000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Project56_Surya_Pratap_Samal.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 105,
    title:
      "4 Macaw Bird | Handpainted 4 Macaw Birds, Colorful Parrots, Acrylic Paintings On Canvas",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's '4 Macaw Bird' captures the vivid colors of parrots in acrylic on canvas, adding vibrancy to any space.",
    medium: "Acrylic On Canvas",
    dimensions: "30 x 24 (inch)",
    price: 1800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/4_Macaw_Bird_Surya_Pratap_Samal.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 106,
    title:
      "Jelly Fish | Fish Paintings, Jellyfish Art Acrylic On Canvas Portrait Painting For Your Living Room",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Jelly Fish' is a mesmerizing acrylic portrait of marine life, perfect for enhancing your living space with aquatic beauty.",
    medium: "Acrylic On Canvas",
    dimensions: "18 x 24 (inch)",
    price: 1000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Jelly_FIsh_Surya_Prathap_Samal_GjnrRg5.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 107,
    title: "Tiger, Nature Wildlife Handpainted Painting For Home Roar",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Tiger' embodies the fierce beauty of wildlife in acrylic, making it a striking addition to any home.",
    medium: "Acrylic On Canvas",
    dimensions: "20 x 21 (inch)",
    price: 1000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/ROOAR_Size-_20_inch_by_20_inch.jpg_1652867332647",
    artType: "WildlifeArt",
  },
  {
    id: 108,
    title: "The Cuckooshrike In Kanha",
    artist: "Sonali Shah",
    artistInfo:
      "Sonali Shah's 'The Cuckooshrike In Kanha' captures the serene beauty of nature with oil on canvas, showcasing the bird in its natural habitat.",
    medium: "Oil On Canvas",
    dimensions: "18 x 12 (inch)",
    price: 2200,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/01bad5aa-7e8e-48db-a147-9f297eaf133e_wzLL4wj_QkdY1ER_2h7u1ax.jpeg",
    artType: "WildlifeArt",
  },
  {
    id: 109,
    title: "Colors Of Nature",
    artist: "Aleksandra Shamina",
    artistInfo:
      "Aleksandra Shamina's 'Colors Of Nature' in acrylic on canvas captures the essence of natural beauty in a compact, expressive form.",
    medium: "Acrylic On Canvas",
    dimensions: "8 x 8 (inch)",
    price: 600,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Colors_of_nature_Aleksandra_Shamina_Acrylic_On_Canvas_8x8_inch.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 110,
    title: "The Deer",
    artist: "Wall -B",
    artistInfo:
      "Wall -B's 'The Deer' captures the grace and poise of a deer in acrylic on canvas, perfect for nature enthusiasts.",
    medium: "Acrylic On Canvas",
    dimensions: "27 x 32 (inch)",
    price: 1250,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/The_deer_Wall_b_Acrylic_On_Canvas__27x32_inch_3mQNiIY.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 111,
    title: "Project #184",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Project #184' is an acrylic on paper creation that invites viewers into a world of imaginative exploration and color.",
    medium: "Acrylic On Paper",
    dimensions: "28 x 22 (inch)",
    price: 1460,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1688704517073.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 112,
    title: "Forest Lane",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Forest Lane' in acrylic on canvas invites viewers to wander through a tranquil woodland scene, rich with color and detail.",
    medium: "Acrylic On Canvas",
    dimensions: "24 x 24 (inch)",
    price: 1460,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Forest_Lane_SuryaPratap_Samal.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 113,
    title: "Jaisalmer | Camel Handpainted Painting & Artwork",
    artist: "Mrinal Dutt",
    artistInfo:
      "Mrinal Dutt's 'Jaisalmer' captures the spirit of the desert with mixed media on canvas, depicting the iconic camels of Rajasthan.",
    medium: "Mixed Media On Canvas",
    dimensions: "30 x 34 (inch)",
    price: 603,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/523C9E48-201E-48EA-AD3A-F753522F7963.jpeg_1653112558630",
    artType: "WildlifeArt",
  },
  {
    id: 114,
    title: "Beautiful Nature Kingfisher Handpainted Painting For Home",
    artist: "Surya Pratap Samal",
    artistInfo:
      "Surya Pratap Samal's 'Beautiful Nature Kingfisher' brings the beauty of a kingfisher to life in acrylic on canvas, perfect for home decor.",
    medium: "Acrylic On Canvas",
    dimensions: "24 x 18 (inch)",
    price: 1000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Kingfisher_Surya_Prathap_Samal.jpg",
    artType: "WildlifeArt",
  },
  {
    id: 300,
    title: "Crooked Ceramic Pottery | Showpiece",
    artist: "Prashant Kumar",
    artistInfo:
      "Prashant Kumar specializes in ceramic art, creating unique pieces like Crooked Ceramic Pottery that blend aesthetic appeal with functional design. His artworks reflect creativity and craftsmanship.",
    medium: "Ceramic",
    dimensions: "10 x 22.5 (cm)",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1696445481724.jpg",
    artType: "SculptureArt",
  },
  {
    id: 301,
    title: "Struggle Ceramic Showpiece",
    artist: "Prashant Kumar",
    artistInfo:
      "Prashant Kumar's Struggle Ceramic Showpiece showcases his mastery in ceramic artistry. With intricate details and emotional depth, his sculptures capture the essence of human experience.",
    medium: "Ceramic",
    dimensions: "18 x 26 x 18 (cm)",
    price: 15000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1695810726576.jpg",
    artType: "SculptureArt",
  },
  {
    id: 302,
    title: "Peacock Mural",
    artist: "Aarti Dubey",
    artistInfo:
      "Aarti Dubey's Peacock Mural exemplifies her skill in clay sculpture. Her artworks, like this vibrant peacock, showcase her artistic vision and dedication to capturing natural beauty.",
    medium: "Clay",
    dimensions: "8 x 12 x 1 (inch)",
    price: 6000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694233516282.jpg",
    artType: "SculptureArt",
  },
  {
    id: 303,
    title: "Soapstone Lord Krishna Statue | Home Decor | Table Decor",
    artist: "B K Stone Carving Industrial Co Operative Society Ltd",
    artistInfo:
      "The B K Stone Carving Industrial Co Operative Society Ltd specializes in soapstone sculptures, like the Soapstone Lord Krishna Statue. Their artworks blend spiritual reverence with exquisite craftsmanship.",
    medium: "Soap Stone",
    dimensions: "6 x 15 x 3 (cm)",
    price: 5500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694753917665.jpg",
    artType: "SculptureArt",
  },
  {
    id: 304,
    title: "Handcrafted Garden Duck Statue",
    artist: "Laxmikant Das",
    artistInfo:
      "Laxmikant Das's Handcrafted Garden Duck Statue reflects his expertise in black stone sculpting. His sculptures, like this charming duck, add aesthetic charm to garden spaces.",
    medium: "Black Stone",
    dimensions: "15 x 18 x 10 (inch)",
    price: 25000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693554127078.jpg",
    artType: "SculptureArt",
  },
  {
    id: 305,
    title: "Black Stone Ganesha Statue | Ganesha Murty",
    artist: "Laxmikant Das",
    artistInfo:
      "Laxmikant Das's Black Stone Ganesha Statue, or Ganesha Murty, showcases his skill in creating divine sculptures. His artworks embody spiritual devotion and artistic excellence.",
    medium: "Black Stone",
    dimensions: "22 x 36 x 15 (inch)",
    price: 67000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693555335162.jpg",
    artType: "SculptureArt",
  },
  {
    id: 306,
    title: "Lord Buddha Bhumisparsha Mudra | Soapstone",
    artist: "B K Stone Carving Industrial Co Operative Society Ltd",
    artistInfo:
      "B K Stone Carving Industrial Co Operative Society Ltd specializes in soapstone sculptures, capturing spiritual themes like Lord Buddha's Bhumisparsha Mudra. Their artworks reflect cultural reverence and fine craftsmanship.",
    medium: "Soap Stone",
    dimensions: "9 x 15 x 2.5 (cm)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/buddha-21693912095107.jpg",
    artType: "SculptureArt",
  },
  {
    id: 307,
    title: "Dinosaur",
    artist: "Vijay Kumar Prasad",
    artistInfo:
      "Vijay Kumar Prasad's Dinosaur sculpture, carved from guava tree wood, highlights his passion for creating lifelike forms from natural materials. His artworks blend creativity with natural beauty.",
    medium: "Guava Tree Wood",
    dimensions: "18.5 x 11.5 x 11.5 (inch)",
    price: 50000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Dinosaur.png",
    artType: "SculptureArt",
  },
  {
    id: 308,
    title: "Struggle Ceramic Showpiece",
    artist: "Prashant Kumar",
    artistInfo:
      "Prashant Kumar's Struggle Ceramic Showpiece combines terracotta with ceramic to depict emotive themes. His sculptures, like this piece, evoke introspection and artistic expression.",
    medium: "Teracotta With Ceramic",
    dimensions: "21 x 46.5 x 16 (cm)",
    price: 20000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1695618524630.jpg",
    artType: "SculptureArt",
  },
  {
    id: 309,
    title: "Customizable Cold Porcelain Clay Couple Photo Frame",
    artist: "Snigdha Sweta",
    artistInfo:
      "Snigdha Sweta specializes in fiber art, creating customizable cold porcelain clay sculptures like this Couple Photo Frame. Her artworks blend personalization with artistic craftsmanship.",
    medium: "Fiber",
    dimensions: "9 x 11 x 2 (inch)",
    price: 4000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694601595681.jpg",
    artType: "SculptureArt",
  },
  {
    id: 310,
    title:
      "Maa Saraswati Statue In Soapstone | Vindhyavasini | Table Decor | Study Table",
    artist: "B K Stone Carving Industrial Co Operative Society Ltd",
    artistInfo:
      "The B K Stone Carving Industrial Co Operative Society Ltd specializes in soapstone sculptures, like the Maa Saraswati Statue. Their artworks blend cultural reverence with fine craftsmanship, ideal for home and study decor.",
    medium: "Soap Stone",
    dimensions: "5 x 15.3 x 3 (cm)",
    price: 5500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694752727619.jpg",
    artType: "SculptureArt",
  },
  {
    id: 311,
    title: "Lord Shiva Statue Crafted In Soapstone | Home Decor | Table Decor",
    artist: "B K Stone Carving Industrial Co Operative Society Ltd",
    artistInfo:
      "B K Stone Carving Industrial Co Operative Society Ltd specializes in soapstone sculptures, creating divine pieces like the Lord Shiva Statue. Their artworks combine spiritual symbolism with expert craftsmanship.",
    medium: "Soap Stone",
    dimensions: "5.3 x 15 x 4 (cm)",
    price: 5500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694173544033.jpg",
    artType: "SculptureArt",
  },
  {
    id: 312,
    title: "Lord Ganesha Fine Crafted Black Stone Statue | Ganapati Bappa Idol",
    artist: "Laxmikant Das",
    artistInfo:
      "Laxmikant Das's Lord Ganesha Fine Crafted Black Stone Statue, or Ganapati Bappa Idol, showcases his mastery in black stone sculpting. His artworks embody cultural symbolism and artistic finesse.",
    medium: "Black Stone",
    dimensions: "26 x 36 x 15 (inch)",
    price: 92000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693553893224.jpg",
    artType: "SculptureArt",
  },
  {
    id: 313,
    title: "Soapstone Ganpati Murti For Home Decor | Table Decor",
    artist: "B K Stone Carving Industrial Co Operative Society Ltd",
    artistInfo:
      "The B K Stone Carving Industrial Co Operative Society Ltd specializes in soapstone sculptures, like the Soapstone Ganpati Murti. Their artworks blend cultural reverence with exquisite craftsmanship.",
    medium: "Soap Stone",
    dimensions: "8 x 15 x 3 (cm)",
    price: 5000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1694241655843.jpg",
    artType: "SculptureArt",
  },
  {
    id: 314,
    title: "Passion Of Life",
    artist: "Pramit Shit",
    artistInfo:
      "Pramit Shit's Passion Of Life ceramic sculpture reflects his exploration of life's emotional depths. His artworks blend artistic expression with profound themes, capturing viewers' imagination.",
    medium: "Ceramic",
    dimensions: "10 x 20 x 10 (inch)",
    price: 60000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Passion_of_life_2.jpg",
    artType: "SculptureArt",
  },
  {
    id: 201,
    title: "Dhokra Brass Showpiece For Home Decor & Gifting",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "Plitsy Handmade Collections specializes in creating Dhokra brass artworks, known for their intricate craftsmanship and cultural significance. Each piece is meticulously handmade using traditional techniques, preserving the ancient art of Dhokra metal casting.",
    medium: "Brass And Wood",
    dimensions: "7.2 x 7.5 (inch)",
    price: 1500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/21706694756699.jpg",
    artType: "DokraCraft",
  },
  {
    id: 202,
    title: "Dhokra Wooden Brass Book & Napkin Holder",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "This Dhokra Wooden Brass Book & Napkin Holder by Plitsy Handmade Collections blends the traditional art of Dhokra with practical utility. Crafted from brass and wood, it showcases the intricate Dhokra motifs and craftsmanship, making it ideal for both home decor and gifting.",
    medium: "Brass And Wood",
    dimensions: "6.5 x 4.5 (inch)",
    price: 2000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/51706687409875.jpg",
    artType: "DokraCraft",
  },
  {
    id: 203,
    title: "Dhokra Pen Stand | Home Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Dhokra Pen Stand by Plitsy Handmade Collections is a testament to the exquisite Dhokra artistry. Crafted from brass, this piece features intricate patterns and designs that reflect the rich cultural heritage of Dhokra metal casting, perfect for enhancing your home decor.",
    medium: "Brass",
    dimensions: "3 x 3.5 (inch)",
    price: 1490,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/31706617188102.jpg",
    artType: "DokraCraft",
  },
  {
    id: 204,
    title:
      "Handcrafted Dhokra Art Brass Cow And Calf For Home Decor And Gifting",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "This handcrafted Dhokra Art Brass Cow and Calf by Plitsy Handmade Collections embodies the rustic charm of Dhokra craftsmanship. Made from brass, it depicts a traditional motif symbolizing prosperity and cultural heritage, making it an ideal choice for home decor and gifting.",
    medium: "Brass",
    dimensions: "8 x 6.5 (inch)",
    price: 10500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1706615877048.jpg",
    artType: "DokraCraft",
  },
  {
    id: 205,
    title:
      "Authentic Brass Metal Tribal Dhokra Elephant | Bronze Statue | Home Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Authentic Brass Metal Tribal Dhokra Elephant by Plitsy Handmade Collections showcases the intricate Dhokra art form. Crafted from metal, this piece features tribal motifs and designs, reflecting the cultural richness and artistic legacy of Dhokra craftsmanship.",
    medium: "Metal",
    dimensions: "6 x 4.5 (inch)",
    price: 1430,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693998268742.jpg",
    artType: "DokraCraft",
  },
  {
    id: 206,
    title:
      "Dhokra Tribal Dancing Group | Home Decor (5 Pcs Set)| Vintage Home Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Dhokra Tribal Dancing Group by Plitsy Handmade Collections celebrates the vibrancy of tribal life through Dhokra art. Crafted from metal, this set of five pieces captures the essence of traditional dance forms, making it a unique addition to any vintage home decor collection.",
    medium: "Metal",
    dimensions: "7 x 6.5 (inch)",
    price: 2150,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693213917270.jpg",
    artType: "DokraCraft",
  },
  {
    id: 207,
    title:
      "Fully Handcrafted Dhokra Peacock Boat Carrying Three Men | Dokra Art | Showpiece | Vintage Home Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "This Fully Handcrafted Dhokra Peacock Boat by Plitsy Handmade Collections is a masterpiece of Dhokra artistry. Crafted from metal, it depicts a peacock-themed boat with three men, showcasing the intricate detailing and cultural significance of Dhokra craftsmanship in vintage home decor.",
    medium: "Metal",
    dimensions: "7 x 4.2 (inch)",
    price: 1500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693213962705.jpg",
    artType: "DokraCraft",
  },
  {
    id: 208,
    title: "Dhokra Brass Showpiece For Home Decor & Gifting",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "Plitsy Handmade Collections offers a range of Dhokra Brass Showpieces that blend traditional craftsmanship with modern aesthetics. Crafted from brass and wood, these pieces are ideal for enhancing your home decor or as unique gifts that showcase the timeless appeal of Dhokra art.",
    medium: "Brass And Wood",
    dimensions: "7.2 x 7.5 (inch)",
    price: 1800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/31706695630569.jpg",
    artType: "DokraCraft",
  },
  {
    id: 209,
    title: "Dhokra Brass Showpiece For Home Decor & Gifting",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "Enhance your home decor with Dhokra Brass Showpieces by Plitsy Handmade Collections. Crafted from brass and wood, these pieces combine traditional Dhokra art with functional elegance, making them perfect for gifting or adding a touch of cultural heritage to your living space.",
    medium: "Brass And Wood",
    dimensions: "7.2 x 7.5 (inch)",
    price: 1700,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/31706688270881.jpg",
    artType: "DokraCraft",
  },
  {
    id: 210,
    title: "Dhokra Bull Shaped Pen Stand",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Dhokra Bull Shaped Pen Stand by Plitsy Handmade Collections is a unique blend of functionality and Dhokra artistry. Crafted from brass, it features a bull-shaped design with intricate Dhokra motifs, making it an ideal choice for both office decor and gifting.",
    medium: "Brass",
    dimensions: "3 x 5 (inch)",
    price: 1450,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/11706676332323.jpg",
    artType: "DokraCraft",
  },
  {
    id: 211,
    title: "Dhokra Bull Shaped Pen Stand",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "Add a touch of traditional craftsmanship to your workspace with the Dhokra Bull Shaped Pen Stand by Plitsy Handmade Collections. Crafted from brass, this piece showcases intricate Dhokra motifs in a bull-shaped design, combining functionality with artistic elegance.",
    medium: "Brass",
    dimensions: "5 x 4 (inch)",
    price: 1470,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/11706616508899.jpg",
    artType: "DokraCraft",
  },
  {
    id: 212,
    title: "Handmade Brass Dhokra Art Nandi | Decorative Showpiece",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Handmade Brass Dhokra Art Nandi by Plitsy Handmade Collections is a decorative showpiece that embodies the essence of Dhokra craftsmanship. Crafted from brass and wood, it features intricate detailing and cultural motifs, making it a striking addition to your home decor.",
    medium: "Brass And Wood",
    dimensions: "7 x 6.5 (inch)",
    price: 8500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/11706601600024.jpg",
    artType: "DokraCraft",
  },
  {
    id: 213,
    title: "Fine Crafted Dokra Bullock Cart | Home Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Fine Crafted Dokra Bullock Cart by Plitsy Handmade Collections is a masterpiece of Dhokra artistry. Crafted from metal, it features intricate designs and detailing, capturing the rustic charm and cultural heritage of Dhokra craftsmanship in home decor.",
    medium: "Metal",
    dimensions: "4.4 x 4.5 (inch)",
    price: 3580,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693302360203.jpg",
    artType: "DokraCraft",
  },
  {
    id: 214,
    title: "Authentic Radha Krishna Dokra Showpiece | Home & Office Decor",
    artist: "Plitsy Handmade Collections",
    artistInfo:
      "The Authentic Radha Krishna Dokra Showpiece by Plitsy Handmade Collections celebrates the divine love of Radha and Krishna through Dhokra art. Crafted from metal, it showcases intricate Dhokra motifs and cultural symbolism, making it a meaningful addition to home and office decor.",
    medium: "Metal",
    dimensions: "4.2 x 6 (inch)",
    price: 1500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/compressed1693213940460.jpg",
    artType: "DokraCraft",
  },
  {
    id: 51,
    title: "Gond Art Tree | Tribal Art Painting",
    artist: "Mamta Kumari",
    artistInfo:
      "Mamta Kumari is known for her intricate patterns and vibrant colors in Gond Art. Her works often depict nature and tribal life, showcasing the rich cultural heritage of the Gond community.",
    medium: "Acrylic On Paper",
    dimensions: "11 x 15 (inch)",
    price: 3500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/The-tree-Mamta-Kumari1689920629655.jpeg",
    artType: "GondArt",
  },
  {
    id: 52,
    title: "Deer Duo | Gond Art | Tribal Folk Art",
    artist: "Shubha Shrivastava",
    artistInfo:
      "Shubha Shrivastava's art reflects the storytelling traditions of the Gond tribe. Using acrylic on canvas, her works are a vibrant display of tribal folklore and nature.",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 24 (inch)",
    price: 7000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Deers_Shubha_shrivastava_Acrylic_On_Canvas_12x24_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 53,
    title: "Elephant | Tribal Art | Gond Painting",
    artist: "Bhajju Shyam",
    artistInfo:
      "Bhajju Shyam is a renowned Gond artist known for his vibrant and detailed depictions of animals and nature. His art often reflects the spiritual and cultural beliefs of the Gond community.",
    medium: "Acrylic On Canvas",
    dimensions: "18 x 24 (inch)",
    price: 9500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Elephant_bhajju_Shyam_Acrylic_On_Canvas_18x24_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 54,
    title: "Birds | Gond Art | Indian Tribal Painting",
    artist: "Venkat Raman Singh Shyam",
    artistInfo:
      "Venkat Raman Singh Shyam's artworks often depict birds and nature in a vibrant and dynamic style typical of Gond art. His paintings are known for their intricate patterns and vivid colors.",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 20 (inch)",
    price: 8200,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Birds_Venkat_Raman_Singh_Shyam_Acrylic_On_Canvas_16x20_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 55,
    title: "Tribal Couple | Gond Art | Indian Folk Art",
    artist: "Durga Bai",
    artistInfo:
      "Durga Bai's art is characterized by its bold lines and vibrant colors. Her paintings often depict scenes from tribal life and mythology, showcasing the rich cultural heritage of the Gond community.",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 18 (inch)",
    price: 6500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Tribal_Couple_Durga_Bai_Acrylic_On_Canvas_12x18_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 56,
    title: "Peacock | Gond Art | Indian Tribal Painting",
    artist: "Ram Singh Urveti",
    artistInfo:
      "Ram Singh Urveti's art is known for its intricate detailing and vibrant colors. His paintings often depict birds and animals in a lively and expressive style typical of Gond art.",
    medium: "Acrylic On Canvas",
    dimensions: "14 x 18 (inch)",
    price: 7800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Peacock_Ram_Singh_Urveti_Acrylic_On_Canvas_14x18_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 57,
    title: "Fish | Gond Art | Tribal Indian Painting",
    artist: "Bhuri Bai",
    artistInfo:
      "Bhuri Bai's art is characterized by its simplicity and vibrant colors. Her paintings often depict fish and other elements of nature, showcasing the deep connection with the environment in tribal life.",
    medium: "Acrylic On Canvas",
    dimensions: "10 x 14 (inch)",
    price: 4800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Fish_Bhuri_Bai_Acrylic_On_Canvas_10x14_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 58,
    title: "Dancing Peacock | Gond Art | Indian Folk Painting",
    artist: "Suresh Kumar Dhurve",
    artistInfo:
      "Suresh Kumar Dhurve's art is known for its energetic and dynamic portrayal of peacocks and nature. His paintings capture the essence of movement and life in Gond art.",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 16 (inch)",
    price: 6000,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Dancing_Peacock_Suresh_Kumar_Dhurve_Acrylic_On_Canvas_12x16_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 59,
    title: "Warli Art | Tribal Painting | Indian Folk Art",
    artist: "Jivya Soma Mashe",
    artistInfo:
      "Jivya Soma Mashe is credited with revitalizing Warli art, a traditional tribal art form of Maharashtra. His paintings depict scenes of village life and nature using simple geometric shapes and patterns.",
    medium: "Acrylic On Canvas",
    dimensions: "14 x 14 (inch)",
    price: 5800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Warli_Art_Jivya_Soma_Mashe_Acrylic_On_Canvas_14x14_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 60,
    title: "Mithila Art | Madhubani Painting | Indian Folk Art",
    artist: "Sita Devi",
    artistInfo:
      "Sita Devi is renowned for her intricate Madhubani paintings, a traditional art form from Bihar. Her artworks often depict mythological themes and daily life, characterized by intricate patterns and vibrant colors.",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 20 (inch)",
    price: 7200,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Mithila_Art_Sita_Devi_Acrylic_On_Canvas_16x20_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 61,
    title: "Pattachitra Art | Indian Traditional Painting",
    artist: "Bhaskar Mohapatra",
    artistInfo:
      "Bhaskar Mohapatra specializes in Pattachitra art, a traditional form of scroll painting from Odisha. His artworks often depict mythological themes and religious narratives, using natural colors and intricate detailing.",
    medium: "Natural Colors On Cloth",
    dimensions: "18 x 24 (inch)",
    price: 8800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Pattachitra_Art_Bhaskar_Mohapatra_Natural_Colors_On_Cloth_18x24_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 62,
    title: "Kalamkari Art | Indian Folk Art | Traditional Painting",
    artist: "Srikalahasti Artists",
    artistInfo:
      "Kalamkari is a traditional art form from Andhra Pradesh known for its intricate hand-painted motifs. Artists from Srikalahasti specialize in Kalamkari, depicting mythological stories and intricate patterns.",
    medium: "Natural Dyes On Cloth",
    dimensions: "12 x 18 (inch)",
    price: 6500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Kalamkari_Art_Srikalahasti_Artists_Natural_Dyes_On_Cloth_12x18_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 63,
    title: "Thangka Painting | Tibetan Buddhist Art",
    artist: "Traditional Tibetan Artists",
    artistInfo:
      "Thangka paintings are traditional Tibetan Buddhist artworks, often depicting deities, mandalas, and spiritual symbols. These intricate paintings are created using mineral pigments and gold on cotton canvas.",
    medium: "Mineral Pigments On Cotton Canvas",
    dimensions: "20 x 30 (inch)",
    price: 10500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Thangka_Painting_Tibetan_Artists_Mineral_Pigments_On_Cotton_Canvas_20x30_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 64,
    title: "Gond Art | Tribal Art Painting | Indian Folk Art",
    artist: "Ram Singh Urveti",
    artistInfo:
      "Ram Singh Urveti's art is known for its intricate detailing and vibrant colors. His paintings often depict birds and animals in a lively and expressive style typical of Gond art.",
    medium: "Acrylic On Canvas",
    dimensions: "16 x 20 (inch)",
    price: 8200,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Gond_Art_Ram_Singh_Urveti_Acrylic_On_Canvas_16x20_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 65,
    title: "Tribal Couple | Gond Art | Indian Folk Painting",
    artist: "Durga Bai",
    artistInfo:
      "Durga Bai's art is characterized by its bold lines and vibrant colors. Her paintings often depict scenes from tribal life and mythology, showcasing the rich cultural heritage of the Gond community.",
    medium: "Acrylic On Canvas",
    dimensions: "12 x 18 (inch)",
    price: 6500,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Tribal_Couple_Durga_Bai_Acrylic_On_Canvas_12x18_inch.jpg",
    artType: "GondArt",
  },
  {
    id: 66,
    title: "Peacock | Gond Art | Indian Tribal Painting",
    artist: "Venkat Raman Singh Shyam",
    artistInfo:
      "Venkat Raman Singh Shyam's artworks often depict birds and nature in a vibrant and dynamic style typical of Gond art. His paintings are known for their intricate patterns and vivid colors.",
    medium: "Acrylic On Canvas",
    dimensions: "14 x 18 (inch)",
    price: 7800,
    imageUrl:
      "https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Peacock_Venkat_Raman_Singh_Shyam_Acrylic_On_Canvas_14x18_inch.jpg",
    artType: "GondArt",
  },
];

export default allArtData;
