function showModal(index) {
    // Show the modal
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalImage = document.getElementById('modal-image');

    // Set the content and image based on which hexagon was clicked
    switch(index) {
        case 1:
            modalText.innerText = "One of the story from Pakistan...\n\nSajida Batool from Sindh, Pakistan, lost her home and disrupted her education in last year’s devastating floods, illustrating how climate change disproportionately affects women. The UN estimates that 80% of those displaced by climate-related disasters are women, who also face challenges like lack of healthcare, menstrual hygiene products, and increased gender-based violence. Despite these hardships, women worldwide are leading climate justice efforts. Activists like Komal Narayan from Fiji and climate journalist Zaidi in Pakistan advocate for gender-sensitive climate policies and empower women to build resilient communities. Their resilience highlights the critical need to support women through education, economic opportunities, and leadership to achieve a sustainable and equitable future.";
            modalImage.src = "https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/press_release_feature/public/AZ_PAK_UNICEF_2022Floods_146.jpg.webp?itok=fYlzUC0M"; // Replace with actual image path
            break;
        case 2:
            modalText.innerText = "One of the story from India...\n\n In August 2017, severe floods in Bihar, India, displaced nearly 900,000 people and killed 815. While the widespread devastation was acknowledged, the increased violence and insecurity faced by women and girls went largely unnoticed. Women like Hema Devi were forced into vulnerable situations, such as abusive marriages and economic dependence, exacerbated by annual flooding and societal pressures like dowries. Displaced women in crowded shelters also face constant harassment, highlighting the urgent need for better support systems and protections to address these gender-specific challenges amid rising climate-induced disasters.";
            modalImage.src = "https://dialogue.earth/content/uploads/2022/01/20220106_Woman-wades-through-floodwater-Bihar_McNaughton_Alamy_2CJDFD8-1400x885.jpg"; // Replace with actual image path
            break;
        case 3:
            modalText.innerText = "One of the story from Bangladesh...\n\n Rajena Boiragi, a 55-year-old woman from Holdibunia, Bagerhat, Bangladesh, endured severe hardship when Cyclone Aila struck in May 2009, destroying her home and fish pond and leaving her homeless. Determined to rebuild, Rajena began collecting crab and shrimp with her son, doubling her pre-cyclone income through support from organizations like BRAC and UN Women. These groups provided her with livelihood skills and training, enhancing her resilience against future disasters. Rajena now plans to expand her business and supports other women in her community to do the same. Across Bangladesh, over 1,600 women have improved their livelihoods through similar initiatives, contributing to national strategies on disaster risk reduction and climate change adaptation. Despite government policies recognizing the need to integrate women into these efforts, gaps remain in addressing the specific impacts on women’s income sources. Rajena’s story, shared at a high-level meeting in Dhaka, underscores the importance of timely support and empowerment programs in helping women overcome climate-induced challenges and build resilient lives.";
            modalImage.src = "https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/Stories/2015/Bangladesh_PC_BRAC_FeedingDucks_1_400x267.jpg?la=en"; // Replace with actual image path
            break;
        case 4:
            modalText.innerText = "One of the story of  Kenya...\n\nClimate change in Kenya is intensifying severe weather events like floods and droughts, which significantly impact the agricultural sector—the primary source of income for 75% of Kenyans. These environmental stresses exacerbate intimate partner violence (IPV) as financial strain and emotional stress increase tensions at home. Research using data from the Demographic Health Survey and Emergency Events Database found that women whose spouses work in agriculture are more likely to experience IPV, and areas affected by severe weather events saw a 60% rise in IPV cases.Extreme weather disrupts farming, leading to income loss and food insecurity, which heightens family stress and the likelihood of violence. Additionally, increased alcohol consumption during economic hardships further contributes to domestic abuse. Women are particularly vulnerable as they bear the brunt of household responsibilities without adequate support, making them more susceptible to both economic and physical dangers during climate crises.Efforts to address these issues must integrate gender-sensitive approaches into climate adaptation and disaster risk reduction strategies. Supporting women through economic empowerment, education, and legal protections is crucial to mitigating the rise in IPV linked to climate-induced stresses. This research underscores the urgent need to consider the social costs of climate change, especially on vulnerable women, to build resilient and equitable communities in Kenya and beyond.";
            modalImage.src = "https://fullerproject.org/wp-content/uploads/2022/11/Kenya_2-2048x1365.jpg"; // Replace with actual image path
            break;
        case 5:
            modalText.innerText = "One of the story from Fiji...\n\nIn the Pacific, women face some of the highest rates of gender-based violence worldwide, with 72% of Fijian women affected compared to the global average of 35%. They are also underrepresented in leadership, holding only 10 of 560 parliamentary seats. The climate emergency further exacerbates these challenges, prompting Pacific women to demand greater involvement in climate decision-making.Activists like Komal Narayan, AnnMary Raduva, and Varanisese Maisamoa are leading the charge for climate justice and gender equality. Narayan advocates for women's roles in the climate movement, Raduva leads mangrove planting initiatives to combat climate change, and Maisamoa empowers market vendors through resilient infrastructure projects. Despite facing discrimination, these women are transforming their communities with support from organizations like UN Women and BRAC.Their efforts highlight the critical need to integrate women into disaster risk reduction and climate adaptation strategies, demonstrating that empowering women is essential for building resilient and equitable societies in the face of climate change.";
            modalImage.src = "https://www.unaids.org/sites/default/files/fijiPicture3_960-2.png"; // Replace with actual image path
            break;
        case 6:
            modalText.innerText = "One of the story from Nepal...\n\nNepal is highly vulnerable to climate change, with frequent floods and droughts affecting livelihoods, especially in Madhesh province. Many families rely on male labor migration to earn remittances for climate adaptation, such as building stronger homes and purchasing essential items. However, this leaves women to manage households alone, increasing their vulnerability to environmental risks and social stigma. Women face limited mobility, higher debt from loans taken to support migration, and the challenges of handling disasters without support. Organizations like DIIS and the Red Cross are working to support these women through skills training and financial aid. The situation highlights the need for gender-sensitive climate resilience strategies to empower women and reduce their dependency on remittances.";
            modalImage.src = "https://reliefweb.int/sites/default/files/styles/small/public/previews/e0/6d/e06de018-e1b2-4fc4-9088-05ed361b6ec0.png.webp?2558099-1-0"; // Replace with actual image path
            break;
        default:
            modalText.innerText = "No details available.";
            modalImage.src = ""; // Default or empty image
    }

    // Display the modal
    modal.style.display = 'flex';
}

function closeModal() {
    // Hide the modal
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
