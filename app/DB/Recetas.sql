insert into Receta(nombre, tiempo, proceso) values ('Southern Biscuits', 52, 'Preheat oven to 425°F. In a bowl combine dry ingredients. Cube butter and add to dry ingredients. Mix butter with hands or fork until a cornmeal consistency is achieved. Add milk and mix until homogeneous. Roll biscuits out to approx. 3/4 of an inch thick. Use a mug, cup, or cookie cutter to cut out rounds of dough. Arrange rounds in a cast iron pan. Bake for 12 to 15 minutes. Remove from oven and eat hot. Will keep on counter or in a brisker.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 1, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 2, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 3, 110);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 4, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 5, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 6, 90);
insert into tipoReceta(idReceta, tipo) values (1, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Ginataang Kalabasa', 10, 'Remove the seeds from your squash, then peel it and chop it up into large cubes, then set aside.. Chop your onion and garlic and cook in an oiled stock pot until translucent.. Once your onions are translucent add both cans of coconut milk to the pot along with your cubes of squash. Let simmer until squash is soft.. When your squash is soft take a potato masher and mash about half of your squash leaving the rest of it as cubes.. Take off heat and serve over rice..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (2, 7, 21);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (2, 8, 44);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (2, 9, 33);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (2, 10, 100);
insert into tipoReceta(idReceta, tipo) values (2, 'Filipino');


insert into Receta(nombre, tiempo, proceso) values ('Brown Sauce', 25, 'Chop and sauté the onions and put the aside for a while. Melt the butter on a pan and add the flour to it. Brown the flour on medium heat until the mixture is dark brown. Add the bouillon in small batches while stirring with a whisker. Let the sauce boil and thicken for few minutes. Add the onions and ground some pepper in the sauce. (optional) Add preferred meat to the sauce or use as is.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (3, 9, 90);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (3, 11, 230);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (3, 12, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (3, 13, 55);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (3, 14, 100);
insert into necesitar(idReceta, idElectro) values (3, 10);
insert into tipoReceta(idReceta, tipo) values (3, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Chimichanga', 120, 'Dice peppers, tomatoes, and onions and saute. Add in meat. Season and cook until browned or fully cooked through. Warm your tortilla and place small layer of yogurt, cheese, and filling on the bottom half of the tortilla. Wrap by folding bottom over filling, folding sides in, and then rolling.. Fry using your preferred method.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 15, 200);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 9, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 16, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 17, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 18, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 19, 90);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 20, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (4, 21, 7);
insert into necesitar(idReceta, idElectro) values (4, 4);
insert into necesitar(idReceta, idElectro) values (4, 2);
insert into necesitar(idReceta, idElectro) values (4, 8);
insert into tipoReceta(idReceta, tipo) values (4, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Tabouleh', 15, 'Soak the cracked wheat in the hot water until the water is absorbed, about 30 minutes.. Drain any excess water, if necessary, and squeeze dry.. Combine the salad ingredients (all but the oil, lemon juice, salt and pepper dressing ingredients) in a medium bowl.. Mix the dressing ingredients together and stir into the salad mix. Serve chilled or at room temperature..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 22, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 23, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 24, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 25, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 26, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 27, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 28, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 29, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 30, 15);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 31, 15);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 32, 90);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (5, 33, 40);
insert into tipoReceta(idReceta, tipo) values (5, 'Mediterranean');


insert into Receta(nombre, tiempo, proceso) values ('Greek Yogurt', 1000, 'bring the milk to 45°C (113°F). pour the yogurt into the milk. wisk well. bring the milk to 45°C (113°F) again. boil some water (about 100ml) and use it to wash the thermos from inside. let the water out and pour the milk into the thermos. leave the thermos in the oven(or in any other place without airflow) for 12h. pour the newly obtained yogurt into the cheesecloth.. hang the cheesecloth for 30 minutes to 4 hours, depending on the desired density. store in the fridge.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (6, 34, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (6, 35, 200);
insert into necesitar(idReceta, idElectro) values (6, 1);
insert into necesitar(idReceta, idElectro) values (6, 2);
insert into tipoReceta(idReceta, tipo) values (6, 'Greek');


insert into Receta(nombre, tiempo, proceso) values ('Classic béchamel sauce', 100, 'Put your butter in your pot and let is slowly melt on medium to low heat.. Once the butter is fully melted add the flour and stir it in to make a roux.. Keep stirring your roux on medium low heat until it gets lightly golden brown and starts smelling a bit nutty.. Add about a glass of your whole milk and stir until combined, repeat this process until you have a thick sauce in your pan and new milk you add easily combines. Never stop stirring.. At this point you can add the rest of your milk, if you skip the previous step you will end up with lumps of roux that are hard to get out.. Lower your heat to low and keep stirring do not forget to get in the corners of the pot because your sauce will burn easily.. Once your sauce has the desired thickness give it a taste and add your salt and pepper until it is to your liking. A pinch of nutmeg, preferably freshly grated, will also go a long way..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 36, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 12, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 6, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 33, 80);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 32, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (7, 37, 5);
insert into tipoReceta(idReceta, tipo) values (7, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Butter-based biscuit and cookies', 10, 'Prepare the dough. Let it sit. Cooking the dough.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (8, 11, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (8, 12, 80);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (8, 2, 200);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (8, 38, 111);
insert into necesitar(idReceta, idElectro) values (8, 2);
insert into necesitar(idReceta, idElectro) values (8, 1);
insert into tipoReceta(idReceta, tipo) values (8, 'Varies');


insert into Receta(nombre, tiempo, proceso) values ('Shrimp and Chicken Jambalaya', 20, 'Preheat the oven to 350 degrees F. Mix together the seasoning mix (herbs, salt, pepper).. Mix together the Holy Trinity (onion, celery, bell pepper).. In a Cast Iron Durch Oven, melt the butter over medium heat, add the Andouille and cook until it starts to brown.. Add 1/2 of the Holy Trinity, cook until the vegetables are tender.. Add the diced tomatoes and cook for one minute. Add the tomato sauce and cook for another minute.. Add the rice and cook for 2 minutes, stirring constantly.. Add the stock, remaining Holy Trinity, seasoning mix, Worcestershire, and the garlic.. Taste the broth for seasoning, particularly salt.. Add the chicken, stir well and put the pot in the preheated oven. Bake uncovered for 25 minutes.. Stir in the raw shrimp, parsley, and green onions - place back into oven for another 10 minutes (or until the shrimp is cooked through)..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 39, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 40, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 4,  100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 41, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 42, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 43, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 14, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 36, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 44, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 45, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 46, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 47, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 48, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 49, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 50, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 51, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 52, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 53, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 54, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 55, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 56, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (9, 26, 100);
insert into necesitar(idReceta, idElectro) values (9, 2);
insert into tipoReceta(idReceta, tipo) values (9, 'Cajun');


insert into Receta(nombre, tiempo, proceso) values ('Cream Cheese', 1740, 'Mix the yogurt, the milk, the cream, the salt, and the sugar into a bowl.. Heat the bowl to 80°C while stirring.. Once the temperature has been reached, add the citric acid and mix well.. Heat up to 90°C, then let it cool down until it reaches room temperature.. Pour the cheese into the cheesecloth and let the whey drip.. Store in the fridge..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 57, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 58, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 59, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 60, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 35, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 61, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 62, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (10, 63, 50);
insert into necesitar(idReceta, idElectro) values (10, 5);
insert into necesitar(idReceta, idElectro) values (10, 1);
insert into tipoReceta(idReceta, tipo) values (10, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Marinated pork steaks', 62, 'Mix olive oil, soy sauce, honey and lime juice until you have an even marinade. Add pepper and crushed garlic.. Add the pork steaks to the marinade and leave in room temperature for 30 minutes or a bit longer.. Preheat your grill/frying pan. Add marinated steaks, grill for 2 minutes, flip, repeat until you have grilled them for 10 minutes total. Towards the last minutes pour the remaining marinade over the steaks.. Let the steaks rest for 10 minutes before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 31, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 64, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 65, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 66, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 29, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (11, 67, 40);
insert into necesitar(idReceta, idElectro) values (11, 11);
insert into tipoReceta(idReceta, tipo) values (11, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Cacio e Pepe', 32, 'Cook your chosen amount of spaghetti 3-4 minutes under the time on the package according to the directions on the package or however you usually do it.. Meanwhile place the peppercorns on a cutting board and mash them with a pestle.. Place half of the peppercorns in a pan and toast them at medium heat.. Drain the pasta, place it in the pan and save the boiling water for later use.. Add the pasta with the pepper with 2 spoons of the water previously saved.. Prepare the Pecorino by putting half of it a bowl with a spoon of the pasta water you saved; continue mixing the cheese with the water until a cream is formed.. When the pasta is almost cooked, add the cream and mix (you can add more water if the pasta is too dry).. Serve on a plate with the Pecorino left before on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (12, 68, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (12, 69, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (12, 70, 60);
insert into tipoReceta(idReceta, tipo) values (12, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Farcies tomatoes', 80, 'Heat the oven to 200C.. Slice the top to the tomatoes and place them in the oven tray.. Empty the tomatoes using a spoon and reserve the interior of the tomatoes in a bowl.. Mix the interior of the tomatoes with the rest of the ingredients.. Restuff the tomatoes.. Optionally add a thin layer of butter on top of the tomatoes.. Put the ''lid'' on the tomatoes.. Bake for 40 minutes in the oven.. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 25, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 71, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 72, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 73, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 31, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 74, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 75, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (13, 11, 20);
insert into necesitar(idReceta, idElectro) values (13, 2);
insert into tipoReceta(idReceta, tipo) values (13, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Japanese Noodle Soup', 58, 'For the broth, add 700ml of chicken stock to a large boiling pot with the garlic, ginger, soy sauce, chinese five spice, chili, and 300ml of water.. Bring this to the boil, then turn the heat to low and simmer for around 5 mins.. Add a pinch of sugar and more soy sauce to taste. Fry the pork chops until cooked (My Sticky Pork Chops recipe works really well with this dish). Hard boil 4 eggs.. Cook the ramen noodles as per packet descriptions.. Strain the stock into another pan, then reheat.. Divide ramen between 4 bowls, then top with 1 sliced pork chop, 1/4 of the spinach (if applicable) sweetcorn, and one boiled egg (halved).. Divide the stock into the bowls, then sprinkle over sesame seeds, shredded nori and the spring onion..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 51, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 76, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 77, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 78, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 64, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 52, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 79, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 80, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 81, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 82, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 83, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 84, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 85, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 86, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 87, 3);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (14, 88, 100);
insert into tipoReceta(idReceta, tipo) values (14, 'Japanese');


insert into Receta(nombre, tiempo, proceso) values ('Smoked Turkey', 225, 'Mix garlic powder into the whipped butter.. Remove giblets and other materials from the turkey cavity.. Rinse the turkey and pat dry with a towel.. Liberally coat the turkey with the whipped butter mixture. Ensure the entire surface is coated.. Place turkey in a foil baking pan with mixed vegetables. If available, use a rack to elevate the turkey from the bottom of the pan.. Add chicken broth until it coats the bottom of the pan.. Cover the pan in foil.. Ignite the charcoal grill; arrange the coals for indirect cooking. Try to maintain a temperature of 300-400°F.. Place the turkey in pan on the grill and cook indirectly for 1 hour.. Remove the foil, and continue cooking over indirect heat.. Periodically (every 15-30 minutes) baste the turkey with its own juices. If the bottom of the pan is dry, add chicken broth and reduce heat.. Remove when the turkey reaches an internal temperature of 160°F in the breast.. Allow to rest for 10 minutes before carving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (15, 90, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (15, 89, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (15, 91, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (15, 92, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (15, 93, 60);
insert into necesitar(idReceta, idElectro) values (15, 11);
insert into tipoReceta(idReceta, tipo) values (15, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Roasted chicken breast', 110, 'Fill a large bowl with enough water to submerge the chicken. Add salt to the water until it is fully saturated. Put the chicken under the water and let it sit for 20-40 minutes at room temperature.. Preheat the oven to 230°C / 450°F.. Remove the chicken from the water. Rinse it. Dry it. Put it in a roasting pan.. Brush the chicken with melted butter. For best results, brush all sides of the chicken breast.. Season with pepper and any optional seasoning. Season with salt last.. Insert the thermometer probe into the thickest part of the smallest breast.. Bake until the internal temperature reaches 68°C / 155°F.. Remove from the oven and immediately cover with foil leaving the probe inserted. Let the chicken sit for 10 minutes at room temperature.. Serve.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (16, 94, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (16, 11, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (16, 95, 30);
insert into necesitar(idReceta, idElectro) values (16, 2);
insert into tipoReceta(idReceta, tipo) values (16, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Perfect Potato Salad', 75, 'Place potatoes in a pot and just cover with water. Partially lid and bring to a boil. Reduce heat and simmer partially covered just until potatoes are tender.. Meanwhile in a large bowl, stir yogurt with mayonnaise, horseradish, salt, and pepper. Stir in radishes, celery, green onions, parsley, and dill until mixed.. Add warm potatoes and stir to combine. Refrigerate at least 1 hour before serving. Taste and adjust seasonings if desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 96, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 97, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 98, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 99, 7);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 100, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 101, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 26, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 102, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (17, 103, 10);
insert into necesitar(idReceta, idElectro) values (17, 1);
insert into tipoReceta(idReceta, tipo) values (17, 'american');


insert into Receta(nombre, tiempo, proceso) values ('Hellfire Steak', 15, 'Rub a generous amount of salt all over the steak. Coat the entire steak with mustard powder. Pour Tabasco Sauce onto both sides of the steak, do not be afraid to put more on than you think you might otherwise be comfortable with the salt will cancel out a lot of the spice while grilling.. Grill over low heat until steak is cooked to your preference..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (18, 104, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (18, 4, 90);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (18, 105, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (18, 106, 10);
insert into necesitar(idReceta, idElectro) values (18, 11);
insert into tipoReceta(idReceta, tipo) values (18, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Babas Feta Pasta', 30, 'Get a small deepish pan and heat it to low-medium temperature. Add a good amount of virgin olive oil and place one of the small onion pieces into the pan. Wait until it starts to sizzle and add the rest of the onion. Mix well and make sure the temperature is not too high as it can damage ingredients. Optional: You can sprinkle some sugar over the onion to make it sweeter. Then after a few minutes, when the onion has browned/softened, add in the garlic and wait 1-2 minutes, then you can turn off heat and put it to the side for later.. Get a medium-large sized deepish pan, heat with oil and then add in the olives, courgettes and mushrooms. Sprinkle salt every now and then to enhance taste. After a few minutes when they are soft and are around the same color, then add in the onion and garlic from the smaller pan.. Wait a couple minutes and then add the broccoli and tomato slices to the mix. Wait 2-3 more minutes and then get your rinsed feta and melt it in the pan (chop to speed up).. Start cooking the pasta.. When the feta has nearly finished melting, add in the stock to the mix. Turn the pan temperature down slightly and then let it bubble for 5 mins (add a timer). Make sure to add the cover to the pan to keep in the flavor.. After the 5 mins timer is up, add the overfilled tablespoon creme cheese to the main mix, stir, then re-add lid.. Wait 2-3 more minutes and then you can test the sauce if you want. If you feel there is some missing, add more mixed spice or herbs such as parsley to it.. Turn down the main mix again slightly and add the 1/3 Mug of Whole milk to the mix.. Strain and serve your pasta and cover with the sauce. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 107, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 108, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 2, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 109, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 110, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 111, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 112, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 113, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 114, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 115, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 51, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 116, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 117, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 118, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (19, 6, 50);
insert into tipoReceta(idReceta, tipo) values (19, 'Greek');


insert into Receta(nombre, tiempo, proceso) values ('Spinach-Rice Casserole', 10, 'Saute onions and garlic with salt in butter. When onions are soft, add spinach. Cook 2 minutes.. Combine with all ingredients except sunflower seeds and paprika.. Spread into buttered casserole dish and sprinkle sunflower seeds and paprika on top.. Bake, covered, 35 minutes at 350F..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 119, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 83, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 9, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 11, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 29, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 38, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 34, 50);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 120, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 121, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 122, 5);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 33, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 123, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 37, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 39, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (20, 124, 10);
insert into necesitar(idReceta, idElectro) values (20, 2);
insert into tipoReceta(idReceta, tipo) values (20, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Mazurek', 170, 'Put flour and butter in a bowl.. Cut the butter into tiny pieces, mixing with the flour.. Add egg yolks, sugar, sour cream, and a pinch of salt.. Knead well and form into a ball. Wrap in plastic wrap and let chill in fridge for about an hour.. Roll out flat and place in large baking sheet on top of parchment paper.. Make little holes with fork in the dough.. Bake for 15-20 minutes in 200°C (395°F).. Let cool before spreading topping.. Decorate with nuts or other toppings..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 12, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 125, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 11, 100);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 127, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 126, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 128, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 129, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 130, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 131, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (21, 132, 30);
insert into necesitar(idReceta, idElectro) values (21, 2);
insert into necesitar(idReceta, idElectro) values (21, 1);
insert into tipoReceta(idReceta, tipo) values (21, 'Polish');


insert into Receta(nombre, tiempo, proceso) values ('Arroz Chaufa', 40, 'Cut the chicken into pieces and fry it. Do not forget the salt.. Cook scrambled eggs. Do not forget the salt.. Cook the rice. If it is yesterday is rice better, preferably without salt.. Cut the welsh onion and bell pepper into small squares.. Mix everything over low heat, adding soy sauce.. Optional: Add bacon, sesame oil.. If everything is salty, you can reduce it with just a teaspoon of sugar, especially if you cook the rice with salt..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 133, 35);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 33, 210);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 17, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 134, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 38, 45);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 64, 23);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (22, 135, 22);
insert into tipoReceta(idReceta, tipo) values (22, 'Peruvian-Chinese');


insert into Receta(nombre, tiempo, proceso) values ('Zarangollo', 31, 'Cut onion in julienne (a third or half of an onion ring). Cut the eggplant in slices or chunks that can fit in a teaspoon. Add oil to a pan until it barely covers the vegetables. Cook and stir in medium heat until they are tender, caramelized and translucent. Kick up the heat to give them a crispy touch, but not for long. (Optional) Turn off the heat and crack open an egg on top. (Optional) Let the residual heat cook the egg. If it breaks just scramble it, the recipe does nott call for anything fancy. You can serve the dish with that oil (provided it is not burnt) or keep it for cooking other stuff.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (23, 136, 65);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (23, 137, 23);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (23, 31, 90);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (23, 138, 10);
insert into tipoReceta(idReceta, tipo) values (23, 'Spanish');


insert into Receta(nombre, tiempo, proceso) values ('Flammkuchen', 31, 'Start by flattening the dough using a bottle between two pieces of parchment paper. It should be 1-2 mm thick.. Place the flattened dough on baking tray and preheat oven.. Distribute the sour cream evenly over the dough.. Cut the onion and bacon into small pieces and distribute them evenly on top.. Bake in preheated oven for 10 minutes until slightly brown.. Season with salt and pepper..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (24, 139, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (24, 9, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (24, 140, 45);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (24, 141, 30);
insert into necesitar(idReceta, idElectro) values (24, 2);
insert into tipoReceta(idReceta, tipo) values (24, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Dried tomato and plum bread spread', 12, 'Put plums in hot water from kettle for a couple of minutes, in order to make them softer.. After that put plums (without the water) and rest of the ingredients into blender and mix it until you are satisfied.. If you want to make it more liquid you can add water from the plums..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (25, 142, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (25, 143, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (25, 144, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (25, 145, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (25, 146, 70);
insert into necesitar(idReceta, idElectro) values (25, 3);
insert into tipoReceta(idReceta, tipo) values (25, 'undefined');


insert into Receta(nombre, tiempo, proceso) values ('Lemon and oregano chicken traybake', 60, 'Heat oven to 220C/200C with fan/gas 7. While oven is heating up cut the new potatoes into 0.5cm - 1cm slices and tip them into a roasting tray. Drizzle 1tbsp of olive oil on the sliced potatoes, season well and toss to ensure a good coating. Then put the roasting tray into the oven for 20 minutes, or however long until the potatoes start to crisp.. In a separate, temporary, tray place the chicken thighs and season them. Cut up the shallots into 1/8 parts, then the lemons into 1/4 wedges. Once this is done, take out the roasting tray and transfer the chicken, challots, lemon wedges and bacon lardons into it, with a final drizzle of 1tbsp of olive oil over the trays items. Cook for another 20 minutes.. Prepare the chicken stock and wine to take out the roasting tray for the last time before serving. Pour 200ml of chicken stock and 100ml of white wine over the trays contents and return it to the oven for a final 20 minutes of cooking..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 147, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 148, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 149, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 150, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 151, 20);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 152, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 51, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (26, 153, 0);
insert into necesitar(idReceta, idElectro) values (26, 2);
insert into tipoReceta(idReceta, tipo) values (26, 'Mediterranean');


insert into Receta(nombre, tiempo, proceso) values ('Party Mimosa', 5, 'Stir together apricot nectar, pineapple juice, water, and orange juice concentrate in a large pitcher until combined. Pour in bottle of sparkling wine just before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (27, 154, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (27, 155, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (27, 156, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (27, 157, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (27, 158, 40);
insert into tipoReceta(idReceta, tipo) values (27, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Tenders Airfried', 41, 'In a plate, mix a little over a table spoon of spices into your flour.. Dip the chicken into the flour one strip at a time coating the entire surface.. Dip the floured chicken into the eggwash.. Press the chicken into the breadcrumbs trying to pick up as much as possible.. Repeat until all strips have been floured egged and breaded.. Coat both sides of the tenders with a light amount of olive oil.. Place the tenders into your airfryer, do not layer them on top of each other.. Set your airfryer to chicken mode and cook for 20 minutes at 360 degrees Fahrenheit.. Serve with honey mustard for maximum effect..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 159, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 160, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 161, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (28, 162, 0);
insert into necesitar(idReceta, idElectro) values (28, 8);
insert into tipoReceta(idReceta, tipo) values (28, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Carbonara', 45, 'Crack the eggs in a bowl but only add the yolks. Add about 35g of grated cheese.. Fill a pot with water and salt it, cook the pasta one minute less than advised.. Fry the guanciale or smoked pancetta until crisp.. Beat the eggs manually using a fork until entirely liquid.. Combine pasta with eggs, then add guanciale and fats remaining in the pan.. Plate and optionally garnish with grated cheese and black pepper..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (29, 68, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (29, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (29, 163, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (29, 164, 0);
insert into tipoReceta(idReceta, tipo) values (29, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Slow-cooked Lamb with Lemon', 1715, 'Mix up some olive oil, the juice of half a lemon, the oregano, the rosemary, and some salt and pepper. Rub this mixture into the meat and leave it in the fridge overnight to marinate.. Heat the oven to 375°F/190°C/gas mark 5.. Break apart the garlic. Chop the carrots, leek, onion, the remaining lemon, and the potatoes into chunks.. Arrange the meat in the pot with the vegetables underneath and around it. Pour in any marinating juices, as well as a cup of water.. Cook for 2½ – 3 hours. Halfway through it is a good idea to check and see if it needs some more water to keep things from burning.. Remove the lid and let the meat brown for a few minutes if you think it needs it.. Pull the meat apart and serve, with yoghurt and fresh bread. You can use the juices as a gravy..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 165, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 166, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 168, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 152, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 170, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 171, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (30, 172, 0);
insert into necesitar(idReceta, idElectro) values (30, 2);
insert into necesitar(idReceta, idElectro) values (30, 1);
insert into tipoReceta(idReceta, tipo) values (30, 'Mediterranean');


insert into Receta(nombre, tiempo, proceso) values ('Tomato Flavored Hamburger and Macaroni', 107, 'Season the meat with the paprika, sage, thyme, marjoram, rosmary leaves, oregano leaves, and black pepper.. Saute the onion and the bell pepper until they become soft.. Cook stirring for about 7-8 minutes.. Drop ground beef and pork into the cooked vegetables on low-medium heat, breaking the lumps into smaller pieces.. Cook for about 15 minutes at medium heat.. Add the tomato sauce to the pot and stir.. Add the Better than Bouillon to the pot and stir.. Add a 1/2 cup of water to the large pot and cook and stir until the water has evaporated.. Adjust the stove to lowest heat.. Cook the macaroni according to linked pasta recipe.. Stir everything together, make sure the hamburger gets evenly distributed in the macaroni. Make sure to stir right to the bottom so the sauce can reach there too..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 173, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 174, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 175, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 176, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 17, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 177, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 178, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 179, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (31, 180, 0);
insert into necesitar(idReceta, idElectro) values (31, 5);
insert into tipoReceta(idReceta, tipo) values (31, 'American');


insert into Receta(nombre, tiempo, proceso) values ('French mustard sauce porkchops', 54, 'Cut the shallots into small dices.. Cut the gherkins into long strips.. Sear the porkchops on high heat on cast iron or stainless steel pan until golden brown on each side, and cook them through on lower heat.. Once the porkchops are cooked, set them aside in a warm environment.. Sweat the shallots in the same pan.. Deglaze with white wine, let it reduce until there is about two teaspoons left.. Add the stock.. Add the gherkins.. Mix in the mustard.. Let the sauce reduce until it gets a coating consistency.. Mix in a knob a butter.. Put the chops back in, flip them to coat them in sauce, warm them up for 30 seconds..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 181, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 150, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 182, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 153, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 183, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 184, 60);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (32, 31, 0);
insert into tipoReceta(idReceta, tipo) values (32, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Colcannon Bake', 90, 'Place the potatoes into a large pot and cover with salted water.... Preheat oven to 350F. Grease a 2-quart casserole dish.. Heat the remaining butter in a skillet over medium heat.... Crush the bouillon cubes into the cabbage mixture.... Bake in the preheated oven for 40 minutes, top with cheddar cheese....');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 20, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 185, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 186, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 187, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (33, 188, 0);
insert into necesitar(idReceta, idElectro) values (33, 2);
insert into tipoReceta(idReceta, tipo) values (33, 'Irish');


insert into Receta(nombre, tiempo, proceso) values ('No-knead Bread', 780, 'Mix the dry ingredients then add the hot water. It should come out as a firm dough.. Leave the dough at room temperature for 12 hours. You can then keep the dough in the fridge for up to 48 hours before cooking.. Preheat oven and pan to 450 F (230 C).. Bake for 30 minutes covered (e.g. aluminum foil), then 20 minutes uncovered..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (34, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (34, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (34, 189, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (34, 190, 0);
insert into necesitar(idReceta, idElectro) values (34, 2);
insert into tipoReceta(idReceta, tipo) values (34, 'Generic');


insert into Receta(nombre, tiempo, proceso) values ('Banana Pancakes', 28, 'Combine flour, sugar, baking powder and a little bit of salt in a large mixing bowl.. Whisk milk and egg into the flour mixture until no clumps remain in the resulting batter.. Add mashed bananas and mix well.. Add some butter to a medium warm frying pan.. Make smaller or bigger pancakes. Wait until tiny air bubbles form on top (2 to 5 minutes), turn and continue frying until the bottom is browned. Repeat..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (35, 192, 0);
insert into tipoReceta(idReceta, tipo) values (35, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Stuffed Round Squash', 50, 'Cook the rice. Then cut the onion into cubes, grate the carrot, cut and scoop the squash.. Strain the rice and cool. Cook onion, carrot, and squash core on an oiled pan.. Place squash halves on a metal griddle in the oven. Add rice to vegetables and cook.. Stuff the squash with cheese and vegetables, then bake.. Serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (36, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (36, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (36, 194, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (36, 133, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (36, 195, 0);
insert into necesitar(idReceta, idElectro) values (36, 2);
insert into tipoReceta(idReceta, tipo) values (36, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Mayonnaise or aioli', 8, 'Place egg, vinegar, mustard, and a pinch of salt and pepper in a beaker or narrow and tall container. Add diced garlic for aioli.. Add oil as the very last ingredient.. Place hand blender at the very bottom. Do not start it yet.. Use full power, and work your way upwards slowly until all the oil is mixed in.. Feel free to taste and mix in extra spices and vinegar afterwards..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 196, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 197, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 198, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 199, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (37, 200, 0);
insert into tipoReceta(idReceta, tipo) values (37, 'Various');


insert into Receta(nombre, tiempo, proceso) values ('Turmeric Flatbread', 20, 'Combine flour, turmeric, salt and baking powder.. Stir in 1/3 cup water and the olive oil.. Knead until smooth. Cover and set aside 15 minutes.. Cut the dough into 4 pieces; flatten each into a 6-inch round.. Cook one at a time in an oiled skillet over medium-high heat, flip when browned..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (38, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (38, 202, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (38, 4, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (38, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (38, 31, 0);
insert into tipoReceta(idReceta, tipo) values (38, 'Turkish');


insert into Receta(nombre, tiempo, proceso) values ('Grostoli', 40, 'Add sugar, flour, baking powder, salt and mix all these dry ingredients.. Add eggs, grease, liquor, milk and mix it.. Knead it in a table until it is homogenous.. Divide the dough into smaller pieces and roll them with a pin on the table.. Sprinkle the flour and finally, cut the dough into rectangles.. Make a vertical cut in the middle, and twist the sides.. Fry it in lard until it browns and sprinkle it on sugar and cinnamon..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 203, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 204, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (39, 34, 0);
insert into tipoReceta(idReceta, tipo) values (39, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Cinque Pi', 0, 'Start cooking the pasta. Mix the cream with the tomato paste and bring to a boil. Turn the heat down to medium and add as much grated parmigiano as you like. Let it cook on medium to low heat until the pasta is done. Add chopped parsley and pepper. You can either add the sauce to the pasta or serve separately. Serve with some additional parmigiano and a leaf of parsley.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (40, 205, 340);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (40, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (40, 207, 340);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (40, 208, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (40, 121, 340);
insert into necesitar(idReceta, idElectro) values (40, 5);
insert into tipoReceta(idReceta, tipo) values (40, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Tofu and Cashew Chow Mein', 15, 'Loosen the precooked noodles by soaking in a bowl of hot water for 2-3 minutes, then drain and set aside.. Mix together the soy sauce, oyster sauce, sesame oil and 2 Tbsp water in a bowl.. Heat a wok or large frying pan over a high heat, add the oil and stir-fry the carrot and broccoli for 2 minutes.. Add the tofu and stir-fry for 4 minutes.. Add the garlic and ginger and stir-fry for a minute.. Stir through the noodles and then add the sauce mixture and cashews and mix until thoroughly combined and heated through..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 209, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 210, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 211, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 212, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 213, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 193, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 214, 70);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (41, 216, 0);
insert into tipoReceta(idReceta, tipo) values (41, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Lobster bisque', 20, 'Finely dice the onions, carrots, shallots and garlic and set aside for later.. Blanche the lobster in boiling water for 2 minutes, remove from the water and let it leak.. Cut it down the middle and remove the meat from the shell, set the meat aside for later.. Place a stockpot on medium high heat and heat up enough oil to cover the bottom of the pan, add the lobster shells and cook them until they are bright red.. Remove the oil from the pan and discard it, add your butter to the shells.. Add all diced vegetables and let it sauté for 2 minutes, add a dash of cognac and flambé, lower the heat to medium low.. Roughly dice the tomatoes and add them together with the tomato puree, once again let it sauté for 2 minutes.. Add the flour and give it all a stir, let it dry up in the pan.. Deglaze the pan with the white wine and once the wine has dried up a bit add the fish stock.. Tie up your herbs using kitchen twine and add them to your pot.. Let it simmer on low heat for 30 minutes, while the soup is boiling take the lobster meat and dice it into bite-sized pieces.. After the soup is done boiling run it through a fine sieve.. Bring the strained soup back to a light boil and add the diced lobster pieces.. Let the soup boil for 4 more minutes to heat up the lobster and serve, add pepper and salt to taste.. Finish off in the plate with a bit of heavy cream..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 217, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 218, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 219, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 220, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 221, 80);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 222, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 223, 80);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 224, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 102, 80);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 225, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (42, 11, 0);
insert into tipoReceta(idReceta, tipo) values (42, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Fajitas', 20, 'Combine lime juice, olive oil, garlic, soy sauce, salt, liquid smoke, cayenne pepper, and black pepper in a resealable container, add chicken/steak, cover, and refrigerate.. Combine water, remaining soy sauce and lime juice, and a dash of salt and pepper - set aside.. Grill meat over medium-high flame until cooked through.. Cut meat into thin strips - set aside and keep warm.. In a large skillet, cook onion and peppers until brown - remove from heat and pour reserved liquid mixture over the veggies.. Toss together meat, onions, and peppers..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 226, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 227, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 14, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 229, 45);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 231, 45);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 232, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 233, 45);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (43, 234, 0);
insert into necesitar(idReceta, idElectro) values (43, 11);
insert into necesitar(idReceta, idElectro) values (43, 1);
insert into tipoReceta(idReceta, tipo) values (43, 'Mexican');

insert into Receta(nombre, tiempo, proceso) values ('Fajitas poblanas', 20, 'Combine lime juice, olive oil, garlic, soy sauce, salt, liquid smoke, cayenne pepper, and black pepper in a resealable container, add chicken/steak, cover, and refrigerate.. Combine water, remaining soy sauce and lime juice, and a dash of salt and pepper - set aside.. Grill meat over medium-high flame until cooked through.. Cut meat into thin strips - set aside and keep warm.. In a large skillet, cook onion and peppers until brown - remove from heat and pour reserved liquid mixture over the veggies.. Toss together meat, onions, and peppers..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 226, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 227, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (44, 14, 0);
insert into necesitar(idReceta, idElectro) values (44, 11);
insert into necesitar(idReceta, idElectro) values (44, 1);
insert into tipoReceta(idReceta, tipo) values (44, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Ravioli', 156, 'The basic rule of thumb I use for pasta is 100g, 1 egg per person. For this recipe you can go two ways, the old school ''well'' method or a kitchen aid mixer (skip to step 7). For the well method, pile the flour onto the counter and with your hand carve a hole or a well in the center. Crack the eggs into the center of the well, and drizzle a bit of olive oil into the center. With a fork, begin slowly breaking up, mixing, and incorporating the egg into the flour until there is no longer any loose egg that can escape the outer well border. At this point use your hands to bring the sandy mixture together and knead the dough for about 5-10 minutes or until the dough is smooth. For the stand mixer method just throw all the ingredients into the mixer with a dough hook and set it to level 4 for about 3-5 minutes and it will be done. You might need to scrape the sides down and maybe hand knead the dough a bit longer after it is done to make it into a nice smooth ball. Cover the dough with plastic wrap and let it rest in the fridge a bit so it is easier to roll out (15-30 mins). While the dough is resting, make the filling by first mixing the ricotta and egg into a bowl. Zest and juice a lemon peel into the bowl. Optionally add seafood ingredients at this point. Grate the Pecorino into the bowl, add salt and pepper to taste, and mix to distribute the ingredients evenly. Take out the dough and cut it into 4 pieces, keeping the ones not currently being worked on covered so they do not dry out. Roll the dough out with a pasta machine down to the point where you can just barely see your hand through it (setting 2-3 out of 7) or roll it out with a rolling pin into a long sheet, maybe like 16 x 8 inches or so. At this point you can either cut the sheet in half and make two sheets, a top and bottom, or one sheet, where you will fold the dough over and use the folded seam as one side of the ravioli Lobster Ravioli. Using a teaspoon, evenly space out the ricotta filling onto the sheets, leaving a few inches on each side for the seams. As stated in step 16, either take the 2nd sheet and place it over top or fold over the dough and press down firmly, forcing out any air and making sure the two pieces of dough stick. You may need to brush some water onto the dough if it is too heavily floured and not sticking. Using a fancy pasta cutter, a knife, or even a pizza cutter, cut evenly between the seams of the raviolis to separate them. If you used a pasta cutter, you are now done, store the raviolis on a floured wax paper sheet or freeze them for later Finished Ravioli. If you do not have a pasta cutter, use a fork to press down the dough around the edges of the cut raviolis to ensure they are firmly closed and no leaks or air bubbles are visible, or else they will explode when cooked. To cook, throw them in salted boiling water and they will let you know when they are done when they float to the top (1-2 minutes). Serve the seafood version with a simple fresh red sauce and basil, or spice it up a bit and go with a base of red sauce with some added heavy cream, and a pinch of red pepper flakes to make a pink sauce for the seafood version Served Ravioli.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 243, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 244, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 245, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 246, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (45, 247, 0);
insert into necesitar(idReceta, idElectro) values (45, 6);
insert into tipoReceta(idReceta, tipo) values (45, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Chicken in Red Wine Vinegar Sauce', 15, 'Rub each piece of chicken in salt and pepper mixture.. Heat oil and melt butter in a deep-sided, 12-inch (~30 centimeter) sauté pan on medium-high heat. When the oil is hot, but not smoking, use tongs to add chicken skin side down.. Brown both sides until skin is golden brown and chicken is cooked, about 12-15 minutes. Remove chicken to a platter and cover loosely with aluminum foil to keep warm.. Pour out half of oil from pan, and use other half to brown shallots over medium-high heat. Slowly add vinegar and boil until reduced to almost a syrup. Add crème fraîche/cream and cook until blended and brown, about 5 minutes. Return chicken to pan to coat and heat.. Return chicken to platter. Add garnish if available, and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 248, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 36, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 249, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 150, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 250, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 251, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 252, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (46, 253, 0);
insert into tipoReceta(idReceta, tipo) values (46, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Smoked Salmon Quiche', 150, 'Combine all pastry ingredients in a food processor. Gather into a ball, cover with plastic wrap and chill 1 hour. Saute onion until shiny in the butter. Stir in salmon, chives, garlic, and basil. Cool.. Preheat the oven to 400F. Roll out the dough to fit a 10'' tart pan. Prick with a fork.. Arrange the salmon mixture in the pre-baked tart shell.. Whisk eggs with milk and cream, season with pepper and pour in the tart shell.. Bake about 30 minutes at 325F, until puffed and golden..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 254, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 255, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 256, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (47, 257, 0);
insert into necesitar(idReceta, idElectro) values (47, 2);
insert into tipoReceta(idReceta, tipo) values (47, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Potato and Eggplant Curry', 103, 'Heat the oven to approximately 200 °C (392 °F).. Cut the eggplant into 1 cm (⅓'') slices and place on a tray. Cover with a layer of oil and bake for 20 minutes.. Cook the sliced onions with oil until soft on medium (about 5-6 minutes).. Add the garlic, garam masala, turmeric and ground coriander and allow to release aroma for a minute or two.. Tip in the canned tomatoes and coconut milk. Add the eggplant, and chunks of potato.. Cover and simmer for ~15-20 minutes.. Boil 2 serves of rice. Remove the lid and cook for a further 5 minutes, or until reduced.. Serve with the rice.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 258, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 259, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 260, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 261, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 262, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 263, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 133, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 264, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (48, 265, 0);
insert into necesitar(idReceta, idElectro) values (48, 5);
insert into necesitar(idReceta, idElectro) values (48, 2);
insert into tipoReceta(idReceta, tipo) values (48, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Beef Goulash', 145, 'Heat up the frying pan and add some oil.. Cut the potatoes into small pieces and fry them on the frying pan over medium-heat, add some salt.. Chop the onion.. Cut the beef into small enough pieces and dust with flour.. After about 15 minutes of frying the potatoes, add the onions and beef to the pan and fry for another 10-15 minutes, or until brown.. While the beef, potatoes, and onions are frying, cut the carrot and mushrooms, and chop the parsley and cilantro.. Once the beef is brown, add water to the pan, and add the rest of the ingredients, including salt, black pepper, and herbs/spices to taste. Mix thoroughly, cover the pan with a lid and stew for about 60-80 minutes over low heat.. Remove from stove, serve hot and enjoy with some beer or cider (or your favorite beverage)..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 266, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 268, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (49, 269, 0);
insert into tipoReceta(idReceta, tipo) values (49, 'Hungarian');


insert into Receta(nombre, tiempo, proceso) values ('Carbonade Flamande', 303, 'Cut meat into big chunks. Dice onions. Sear the meat on high heat in a large stainless or cast iron pot until golden brown, using olive oil. Do not overcrowd the pot. Meanwhile, start sweating the onions in a pan, with the butter, and the smoked bacon.. Set meat aside, deglaze the pot with a bit of beer, put in the onions, bacons and the brown sugar.. Once the sugar is melted and the pot is deglazed properly, put the meat back in.. Pour the rest of the beer into the pot.. Toast the slices of gingerbread with a bit of mustard, put in the pot.. Add thyme, bay leaves, cloves, juniper berries. Add salt.. Let it simmer for 4 to 8 hours. Check on it regularly and add water if you feel like the sauce is too thick and you need to cook it longer..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 270, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 271, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 273, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 274, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 41, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 276, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (50, 267, 0);
insert into necesitar(idReceta, idElectro) values (50, 9);
insert into tipoReceta(idReceta, tipo) values (50, 'Flemish');


insert into Receta(nombre, tiempo, proceso) values ('Coriander Chicken', 95, 'Cut the boneless chicken into small bite sized pieces.. In a mixer, blend the specified ingredients.. Mix chicken with spices and yoghurt from step 2.. Marinate chicken for 30 minutes.. Heat oil in frying pan.. Melt sugar in hot oil.. Cook the marinated chicken mixture until oil separates.. Stir until the mix thickens, then serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 277, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 278, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 279, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 280, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 281, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 282, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 259, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 283, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 223, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (51, 284, 0);
insert into tipoReceta(idReceta, tipo) values (51, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Torta Frita Criolla', 130, 'Add the flour on a bowl, and the grease in ambient temperature in the middle.. Mix flour and grease with your fingertips, while slowly adding the salt water, until you end up with a dough ball.. Knead it energically, until the dough forms bubbles on its surface.. Let it rest for 1 or 2 hours, and then form little balls, the size you would do for a chocolate chip cookie, smash them to a disc shape, then poke a small hole in the middle.. Fry it on abundant grease until golden brown, remove it with a perforated spoon, then put it on a bowl with paper towels to absorb excess grease.. Add garnishes, but it is not essential, due to how rich and filling the dish is..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (52, 285, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (52, 203, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (52, 286, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (52, 287, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (52, 288, 0);
insert into tipoReceta(idReceta, tipo) values (52, 'Argentinian');


insert into Receta(nombre, tiempo, proceso) values ('Kvass', 30, 'Bring 1 L of water in a pot to a boil.. Burn black bread in a toaster or in an oven until it is thoroughly scorched to blackness on the outside.. Once the water has come to boil, remove off heat. Add burned black bread, a handful of raisins, a few slices of lemon, and coffee beans to the pot.. Leave contents of the pot to cool down to room temperature.. Filter out everything from the pot through a strainer, and pour contents into a separate, sterilized container. Add sugar and yeast into the container, and stir until sugar is dissolved. This starts the fermentation process.. Add rest of raisins, and non-citrus fruits of your choice. The fruits will positively impact flavour of the final product.. If mixture is not already in a mason jar, pour the mixture into a sterile mason jar, and seal the lid. Place the jar in a warm place (26-30°C; 79-86°F), and let it ferment for a week, or until it stops bubbling.. Remove all raisins and fruits from the jar.. Squeeze lemon juice from lemons into the mixture. You may drink the now-complete kvass right away, or refrigerate it before drinking..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 131, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 289, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 152, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 290, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 291, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (53, 292, 0);
insert into necesitar(idReceta, idElectro) values (53, 2);
insert into necesitar(idReceta, idElectro) values (53, 9);
insert into tipoReceta(idReceta, tipo) values (53, 'Slavic');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Paprikash', 10, 'Pat raw chicken thighs with paper towels for crispier skin. Season with salt and pepper.. Heat up a heavy, deep-sided pan on high heat with a little olive oil.. Add the chicken thighs skin-side down. Brown the thighs for five minutes on each side then remove each thigh and place them aside once browned.. Add chopped onions to the pan with the chicken fat and sauce until the onions are golden.. Add powdered garlic and tomato paste. Stir this another 5 minutes to create a tomato-roux.. Add Hungarian paprika and stir another minute.. Add chicken or beef broth and bring it to a medium temperature.. Reduce the heat to medium low and transfer the chicken thighs from the plate back into the pan. Be sure not to waste any chicken fat.. Cover the pan with a lid and simmer the dish for 45 to 60 minutes.. With a fork, test to see that the chicken is tender. Add salt and pepper to taste afterwards.. Plate the chicken with an optional dusting of cayenne pepper and serve it with some nice hearty bread. This dish has sour cream added to it traditionally, however if dairy is not your thing it’s delicious without it also. So for this last step you can add some sour cream to the sauce and stir it or add the sour cream at the end when you plate the chicken. Then garnish with herbs and enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 293, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 294, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 295, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 296, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (54, 20, 0);
insert into tipoReceta(idReceta, tipo) values (54, 'Hungarian');


insert into Receta(nombre, tiempo, proceso) values ('Mexican Meat Loaf', 10, 'In bowl, place all ingredients except spray and using 3/4 cup of the salsa - mix well.. Spray a loaf pan (approx. 5''x9''), and add above mix.. Bake for 50 to 60 minutes - sit 15 minutes.. Top with last 1/4 cup of salsa..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 297, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 298, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 299, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 300, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 161, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (55, 301, 0);
insert into necesitar(idReceta, idElectro) values (55, 2);
insert into tipoReceta(idReceta, tipo) values (55, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Fennel White Bean and Kale Soup', 22, 'In a large soup pot, heat olive oil over medium.. Add fennel, onion, rosemary and mix until tender.. Add garlic, red pepper flakes, cook until fragrant.. Add one handful of greens at a time, stirring until leaves wilt.. Add white beans, broth, and black pepper.. Bring to boil then bring to simmer while mashing some of the beans with a wooden spoon. Simmer until liquid has reduced and simmered.. Take off heat, stir in lemon juice and parmesan. Serve.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 302, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 303, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 304, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 305, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 306, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 307, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (56, 309, 0);
insert into tipoReceta(idReceta, tipo) values (56, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Honey Garlic Chicken with Broccoli and Brown Rice', 53, 'Cook rice in a pot. descriptions are on the bag it comes in.. While rice is cooking, cut chicken breasts into cube. Season with olive oil, black pepper, and paprika. Cut broccoli into pieces and place into steamer basket over pot 1/2 filled with water, do not start it yet.. Put chicken cubes into a hot pan and cook for ~3 minutes. After 3 minutes add honey, soy sauce, and garlic. Cook for another 5 minutes. Begin boiling broccoli water.. Add frozen peas to rice and stir, they will heat up quickly.. Add rice and peas to chicken and stir..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 119, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 310, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 113, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 94, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 311, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (57, 312, 0);
insert into tipoReceta(idReceta, tipo) values (57, 'General/International');


insert into Receta(nombre, tiempo, proceso) values ('Bolinhos de Coco', 5, 'Mix the non-optional ingredients in a medium bowl.. Scoop tablespoons of the batter into a cookie sheet or cupcake pan.. Cook for around 10 minutes or until slightly brown on top.. Top with powdered sugar if desired.. Let cool and enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (58, 313, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (58, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (58, 127, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (58, 314, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (58, 125, 0);
insert into necesitar(idReceta, idElectro) values (58, 2);
insert into tipoReceta(idReceta, tipo) values (58, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Pasta Arrabbiata', 41, 'Start heating up water for the pasta.. Heat up a few tablespoons of olive oil over low heat.. Crush several cloves of garlic into the olive oil, add the chilli flakes or chilli peppers and fry them for a short time, being careful not to burn the garlic.. Add your crushed tomatoes, together with some salt and pepper, increase the heat to medium and let simmer for 10-15 minutes or until it looks nicely thickened.. When the water starts boiling, put a handful of salt into it and then your pasta of choice. Ideally leave the pasta slightly undercooked, because it will go in the hot sauce and finish cooking there.. When the sauce is almost ready, add most of your chopped parsley and stir it around. Save some to top the dish later.. When the pasta is ready (ideally at the same time as the sauce or slightly later), strain it and add it to the sauce, which should be off the heat. If the sauce looks a bit too thick, add some of the pasta water. Mix well.. Add some of the grated cheese of your choice and stir it in.. Serve with some more grated cheese and chopped parsley on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 205, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 315, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 316, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 317, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 318, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (59, 319, 0);
insert into necesitar(idReceta, idElectro) values (59, 5);
insert into tipoReceta(idReceta, tipo) values (59, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Ragu Napoletano', 30, 'If you already have tomato sauce skip to step 5. For fresh tomatoes, wash and cut out off the green stems of the tomatoes and cut them into a few chunks and lightly salt them over a collander or strainer so they release water and break down quicker. For canned tomatoes, use your hands to crush the peeled tomatoes (do not use a food processor). In a large stock pot cook down the tomatoes for approximately 30 mins then use a food mill or strainer to remove the skins and seeds to yield tomato sauce (this can be done beforehand and frozen / canned for months) Sauce. Mix all the ingredients in the Meatballs section by hand and form equal sized meatballs. Either bake the meatballs at 400°F until brown or fry them with the the other meats in step 7. Coat the bottom of a dutch oven or large stock pot with olive oil and sear each meat one by one, removing from the pot once browned on the outside (do not cook the meat all the way through). Sweat the onion and garlic, then deglaze the pan with the red wine. Fill the pot with the seared meat, tomato sauce, add the fresh basil, then season with dried oregano, red pepper, salt, pepper, and a pinch of sugar to taste Meats. Cook on very low flame uncovered for 4-5 hours stirring making sure it does not burn. Serve over cooked dry pasta such as ziti, penne, rigatoni. Portion the sauce and meats and freeze in containers for up to 4-6 months.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 320, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 321, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 322, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 323, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 324, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 325, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 326, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 327, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 328, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 329, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 245, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 330, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (60, 102, 0);
insert into necesitar(idReceta, idElectro) values (60, 5);
insert into necesitar(idReceta, idElectro) values (60, 2);
insert into tipoReceta(idReceta, tipo) values (60, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Pasta store bought', 37, 'Fill a large pot about half or 3/4th full with water.. Salt the water profusely.. Bring water to a rolling boil.. Now add pasta.. Keep it boiling, but decrease heat as it tries to overflow.. Wait until pasta is at the preferred softness, then strain it.. Add basil leaves or other herbs and aromatics. Add room temperature butter and stir it, melting it into the pasta..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (61, 205, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (61, 331, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (61, 11, 0);
insert into necesitar(idReceta, idElectro) values (61, 5);
insert into tipoReceta(idReceta, tipo) values (61, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Banana and oatmeal cookies', 3, 'Pre-heat the oven to 180°C (350°F). Peel the bananas and squash them not too finely in a bowl.. Incorporate the oatmeal.. Incorporate cinnamon powder and/or honey (optional).. On the oven tray, place parchment paper and form discs of the mix, each around 8 cm (3 in). Cook with rotating heat for around 20 minutes, until outside becomes golden and slightly crispy.. Eat warm or cold. Can be kept a couple of days in a sealed container..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (62, 332, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (62, 333, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (62, 334, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (62, 65, 0);
insert into necesitar(idReceta, idElectro) values (62, 2);
insert into tipoReceta(idReceta, tipo) values (62, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Italian Mulled Wine', 5, 'Pour the wine into a stock pot and turn the gas on medium high. Crush all the Crushed Ingredients in a mortar and pestle. Peel and juice the orange and lemon toss the peels and juice into the wine but not the white pith). When the wine is up to a simmer, immediately bring the gas down to low and pour in all the rest of the ingredients. Cook on low for at least 15 minutes to infuse the flavors. Keep the flame on low so the wine stays warm and continues to infuse, but does not bubble  burn off the alcohol. Feel free to double the recipe or scale any of these ingredients up or down to suite your taste.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 335, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 170, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 337, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 41, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 325, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 338, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 37, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 339, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 340, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 244, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 341, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 284, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 342, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 343, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 344, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (63, 345, 0);
insert into necesitar(idReceta, idElectro) values (63, 12);
insert into tipoReceta(idReceta, tipo) values (63, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Spicy Kung Pao-Style Chicken', 10, 'Heat a medium pot over medium heat. Add oil, ginger and rice. Cook until fragrant.. Add water and bring to a boil. Reduce heat and cover until rice is tender.. Cut celery and whisk together soy sauce, sweet chili sauce, water, and chili garlic sauce.. Toast peanuts, then cook peppers and celery until fragrant.. Coat Chicken in flour mixture and cook until golden brown and cooked through.. Add veggies and sauce mixture to chicken and cook until sauce thickens slightly.. Fluff rice with fork, divide between plates and top with chicken, veggies, sauce, peanuts, and green onions..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 147, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 346, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 285, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 347, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 26, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 348, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 349, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 350, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (64, 351, 0);
insert into tipoReceta(idReceta, tipo) values (64, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Schnitzel', 27, 'Prepare 3 bowls. (One with flour, one with beaten eggs, one with bread crumbs seasoned with salt and paprika). Wash the veal and gently dry it with kitchen roll.. Put the veal on a board and beat it with a meat tenderizer (or a rolling pin) to a thickness of 0.5 cm. (Beating the veal makes it tender). Season the veal with salt and pepper on both sides, dive it through the 3 bowls. (First flour, then eggs, finally bread crumbs). Melt the butter in a deep pan. (Attention: not too hot. Butter should not turn brown). Fry the veal on each side until it is gold brown. (e.g. 3 min on each side). Serve with a piece of lemon..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 352, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 244, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 161, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (65, 11, 0);
insert into tipoReceta(idReceta, tipo) values (65, 'Austrian');


insert into Receta(nombre, tiempo, proceso) values ('Cheddar-Crusted Chicken', 10, 'Combine panko, cheese, and smoked paprika-garlic blend in a shallow dish. Preheat oven to 425F.. Pat chicken dry with paper towel. Carefully slice into the centre of each chicken breast lengthwise and parallel to the cutting board - leaving 1/2 inch intact on the other end. Open up chicken like a book, and season both sides with salt and pepper.. Coat one side of each chicken breast with mayo. Firmly press mayo-coated side into panko mixture to adhere, one at a time.. Transfer chicken to a parchment-lined baking sheet, coated-side up. Bake chicken on the middle oven rack until cooked through (18-20 mins)..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (66, 94, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (66, 98, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (66, 353, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (66, 188, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (66, 354, 0);
insert into necesitar(idReceta, idElectro) values (66, 2);
insert into tipoReceta(idReceta, tipo) values (66, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Wholemeal Pizza', 35, 'Cover a baking tray fully with a thin layer of olive oil.. Roll out the dough until it barely fits in the baking tray and place it in there.. Spread the sauce on the pizza.. Add any ingredients you want to add on top of the sauce (cheese last).. Bake the pizza for 10 minutes in the oven at 250°C.. Add any fresh ingredients now.. Cut into slices and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 355, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 356, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 179, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 357, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 358, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 359, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 360, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 361, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 362, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 363, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 365, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 366, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (67, 323, 0);
insert into necesitar(idReceta, idElectro) values (67, 2);
insert into tipoReceta(idReceta, tipo) values (67, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Merchants Buckwheat', 78, 'Chop the onion and cut the pork into small pieces.. Dust the pork with some flour.. Heat the frying pan, add a bit of oil, add the pork and onion, and fry.. Cut the carrot into small pieces and chop the parsley.. Once the pork and onion are fried, add the water, tomato paste, buckwheat, and carrots.. Add curcuma, chili powder, salt, and black pepper to taste; mix thoroughly.. Add in the garlic cloves, bay leaves, and chopped parsley.. Once the water is boiling, close the pan with a lid and stew..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 367, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 368, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 369, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 370, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (68, 267, 0);
insert into tipoReceta(idReceta, tipo) values (68, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Fish Curry', 37, 'Boil green beans for 10 minutes. Cut onions, tomato, garlic and fish. Heat oil on a wok and sauté the onion and garlic. Add beans, tomato, broth and spices and boil for 6 minutes. Add coconut milk, fish and pepper (whole) and boil for an additional 6 minutes.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 197, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 371, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 325, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 372, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 373, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 374, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 263, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (69, 375, 0);
insert into tipoReceta(idReceta, tipo) values (69, 'Thai');


insert into Receta(nombre, tiempo, proceso) values ('Sardine Cakes', 10, 'Remove sardines from tin, reserving oil, and place fish in a mixing bowl. Add remaining fish cake ingredients, along with the oil from one tin (about 2 TB) to the bowl.. Gently mix all the ingredients together with a fork. Mix until incorporated, but do not purée.. Use something to scoop the fish cake mix into small balls. Flatten into small patties 2 inches across, and about ½ thick.. Set patties on a rimmed baking sheet, large cast iron pan, or casserole dish.. Refrigerate patties for about 30 minutes.. While fish cakes chill, mix together all the ingredients for the yogurt sauce.. Move oven rack to the top 3rd of the oven. Broil for 5 minutes, flip, and broil 3-5 minutes more, until cakes are golden brown.. Drizzle some lemon juice on cakes. Serve while still hot with the yogurt sauce. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 376, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 98, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 353, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 377, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 378, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 379, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 200, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (70, 312, 0);
insert into necesitar(idReceta, idElectro) values (70, 2);
insert into necesitar(idReceta, idElectro) values (70, 1);
insert into tipoReceta(idReceta, tipo) values (70, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Ricotta', 60, 'Preparation.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (71, 380, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (71, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (71, 62, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (71, 63, 0);
insert into tipoReceta(idReceta, tipo) values (71, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Kalderetang Manok', 30, 'Sauté onions, garlic and (optional) tomato, in a pan of olive oil.. Put chicken and cook until brown, add 2 tablespoons of salt and pepper. (Note: Make sure the chicken is cook all the way through.). Add fish sauce before adding water and let the chicken boil for a few minutes and then add tomato sauce.. Add potatoes, carrots, and liver spread. Mix the liver spread and let it boil until broth thickens, let it boil until carrots and potatoes are soft. Add more salt and pepper if needed.. Add dried peas, bell pepper and grated cheese and let it cook for a minute.. Cook until cheese melts before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 134, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 381, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 49, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 17, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 382, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 383, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 384, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (72, 385, 0);
insert into tipoReceta(idReceta, tipo) values (72, 'filipino');


insert into Receta(nombre, tiempo, proceso) values ('Honey Sriracha Chicken Thighs', 64, 'Preheat oven to 350°F. Season the chicken. Rub the thighs with some olive oil and season liberally with salt and pepper.. Place the chicken thighs in a cold skillet, skin-side down. Cook for 15 minutes on medium-low heat without touching them.. Prepare Sriracha sauce by stirring honey and sriracha together in a bowl.. Flip the chicken thighs. Cook for another 10 minutes.. Place chicken thighs on baking tray (or just use skillet if using a cast-iron skillet). Drizzle the sriracha sauce on both sides of the chicken, coating it. You do not have to use all of it.. Bake chicken thighs for 15 minutes.. Test chicken for doneness. Chicken should reach internal temperature of 165°F.. If chicken is near done (or done), you can baste a second time with the remaining sauce (you can make more sauce if you need) and return to oven for 5 more minutes. Do not worry about overcooking; chicken thighs are difficult to overcook.. When chicken is done, let cool for a few minutes and garnish with sesame seeds before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 293, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 386, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 4, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 14, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (73, 85, 0);
insert into necesitar(idReceta, idElectro) values (73, 2);
insert into tipoReceta(idReceta, tipo) values (73, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Pan pizza', 30, 'Preheat oven to max temp.. Add olive oil to the bottom of an iron skillet. The whole bottom and sides should be coated.. Add some oil to hands and shape dough into a ball.. Place ball to the center of the pan and press it down gently. It will not cover the whole bottom yet.. Cover the skillet and let the dough rest for minimum 30 min.. Press the dough to cover the whole bottom of the skillet.. Add pizza sauce, cheese, and whatever you like on your pizza. Put in the middle of the oven, and cook for 15-20 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 387, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 388, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 195, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 389, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (74, 390, 0);
insert into necesitar(idReceta, idElectro) values (74, 2);
insert into tipoReceta(idReceta, tipo) values (74, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Challah Bread', 20, 'Fill a large bowl with the water, and sprinkle with the yeast.. Whisk together: honey, oil, 2 eggs, and salt. Add to bowl.. Add flour to bowl in small amounts, beating/whisking after each addition.. Once the mixtures becomes a viscous dough, begin kneading until smooth and elastic, and no longer sticky.. Cover bowl with a damp cloth and let rise for 1-2 hours, or until dough has doubled in size.. Sprinkle flour onto a chopping board, place the dough onto it and divide in half.. Knead each half, adding flour as needed to keep the dough non-sticky.. Divide each half into thirds and roll into a long snake about 4cm (1.5in) in girth.. Pinch the ends of the each three snakes together firmly and plait them together, making two items of braided dough.. Grease two baking trays or use baking paper, cover with dry cloth and let rise for one hour. Preheat oven to 190°C / Gas mark 5.. Whisk an egg and brush onto each plait, sprinkle with seeds.. Bake until bread has a hollow sound when tapped, cool on a rack for an hour before slicing..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 190, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 391, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 392, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (75, 31, 0);
insert into necesitar(idReceta, idElectro) values (75, 10);
insert into necesitar(idReceta, idElectro) values (75, 2);
insert into tipoReceta(idReceta, tipo) values (75, 'israeli');


insert into Receta(nombre, tiempo, proceso) values ('Ukrainian Borscht', 61, 'Peel, grate and/or slice all vegetables (keeping sliced potatoes in cold water to prevent browning until ready to use then drain).. Heat a large soup pot (5 1/2 Qt or larger) over medium/high heat and add 2 Tbsp olive oil.. Add grated beets and sauté 10 minutes, stirring occasionally until beets are softened.. Add 8 cups broth and 2 cups water.. Add sliced potatoes and sliced carrots then cook for 10-15 minutes or until easily pierced with a fork.. While potatoes are cooking, place a large skillet over medium/high heat and add 2 Tbsp oil.. Add chopped onion, celery and bell pepper. Saute stirring occasionally until softened and lightly golden (7-8 minutes).. Add 4 Tbsp Ketchup and stir fry for 30 seconds then transfer to the soup pot to continue cooking with the potatoes.. When potatoes and carrots reach desired softness, add optional ingredients from the list.. Simmer for an additional 2-3 minutes and add more spices to taste.. Serve with a dollop of sour cream on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 393, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 394, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 395, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 396, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 397, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 233, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 398, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 399, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 20, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (76, 103, 0);
insert into tipoReceta(idReceta, tipo) values (76, 'Ukrainian');


insert into Receta(nombre, tiempo, proceso) values ('Oaty Pancakes', 14, 'Pour milk over rolled oats. Add remaining ingredients.. Mix with fork (or in a food processor) just enough to combine ingredients.. Put spoonfuls of mixture onto preheated, greased or sprayed griddle or fry pan. Turn spoon for round pancakes.. Turn pancakes as soon as bubbles form and burst in the middle. Slide thin metal blade under pancake and flip over. Second side is cooked when centre springs back.. Put a dab of butter on cooked surface of several pancakes.. Pile up so butter is between pancakes. Pour syrup over before serving.. Serve Oaty pancakes for breakfast or brunch, with juice or coffee. Pour syrup over the pile of buttered pancakes and serve bacon or sausages alongside if you like..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 400, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (77, 11, 0);
insert into tipoReceta(idReceta, tipo) values (77, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Hakka-Style Meatballs', 10, 'Preheat oven to 450F. Add 1 1/4 cup water and 1/4 tsp salt to a medium pot. Cover and bring to a boil over a medium-high heat. Add rice and reduce heat to low. Cover and cook until rice is tender and liquid is absorbed (12-14 mins). Add peas halfway through cooking. When rice is done, remove pot from heat, and leave covered.. While rice cooks, combine beef, panko, half the ginger, a quarter of the soy sauce and a third of the Moroccan spice blend. Roll mixture into 9 equal-sized meatballs. Arrange meatballs on a parchment-lined baking sheet. Bake on the middle rack in the oven until golden-brown and cooked through (8-10 mins).. Meanwhile, core and cut the green peppers into 1/2'' pieces and roughly chop cilantro. Stir together sweet chili sauce, remaining soy sauce, 1/4 cup water and chili garlic sauce in a small bowl.. Heat a large non-stick pan over medium-high heat. Add 1 Tbsp oil, then onion and peppers. Cook, stirring occasionally, until slightly softened (2-3 mins). Add remaining ginger and remaining Moroccan spice blend. Cook, stirring constantly, until fragrant (30 sec).. Add meatballs and the stir-fry sauce to the pan with veggies. Cook, stirring gently, until sauce thickens slightly and coats meatballs (1 min). Season with salt and pepper, to taste.. Add half the cilantro to rice, then fluff with a fork. Divide rice between plates, then top with meatballs, veggies, and any sauce in the pan. Sprinkle remaining cilantro over top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 353, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 348, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 403, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 346, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 404, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 406, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 349, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (78, 351, 0);
insert into necesitar(idReceta, idElectro) values (78, 2);
insert into tipoReceta(idReceta, tipo) values (78, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Kombucha', 30380, 'Boil 1-2l of water.. Rinse all dishes with boiling water.. Steep 3-5 tbsp of tea.. Strain leaves and add sugar.. Add optional teas if desired.. Mix tea and water in jar.. Cool tea to less than 40°C.. Add scoby to jar.. First fermentation period.. Taste and start second brew.. Add optional flavors.. Second fermentation period.. Store in the fridge..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 407, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 408, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 409, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 410, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 411, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (79, 412, 0);
insert into necesitar(idReceta, idElectro) values (79, 5);
insert into necesitar(idReceta, idElectro) values (79, 1);
insert into tipoReceta(idReceta, tipo) values (79, 'origin uncertain, popular worldwide');


insert into Receta(nombre, tiempo, proceso) values ('Ham and Lentil Soup', 490, 'Combine all ingredients with 2 quarts water in the Crock Pot.. Cook on low, covered, 8 to 10 hours.. Adjust seasonings and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 413, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 360, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (80, 29, 0);
insert into tipoReceta(idReceta, tipo) values (80, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Pasta sauce', 22, 'Heat up olive oil on saucepan.. Add and roast either diced or grated onion or crushed and sliced garlic until translucent.. Add San Marzano tomatoes, include the liquids from the can if possible.. Simmer contents of the pan and crush the tomatoes on the pan with your instrument of choice.. Additionally add desired herbs..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (81, 414, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (81, 415, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (81, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (81, 416, 0);
insert into tipoReceta(idReceta, tipo) values (81, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Steak Tartare', 13, 'Dice your onions or shallots.. Finely slice your cornichons.. Rinse, drain and chop your capers.. Chop parsley. (Optional). Chop ground beef into smaller pieces.. Add the above to a mixing bowl and mix with hands.. Add ketchup, mustard, or Worcestershire sauce as needed and mix further. (Optional). Separate an egg yolk from the whites.. Loosely roll some of the mixture into a ball in your hand and place onto a plate and press softly to form a bowl shape, add egg yolk to indentation.. Serve, you may now add salt and pepper as desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 417, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 418, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 419, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 420, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 397, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (82, 52, 0);
insert into tipoReceta(idReceta, tipo) values (82, 'European');


insert into Receta(nombre, tiempo, proceso) values ('Lenten Lentil Curry', 5, 'Thoroughly rinse the lentils and drain the water.. Put the lentils in the pot, and add 1 L (0.26 gal) of water.. Bring to a boil, and gently boil for about 15-20 minutes.. Drain the water.. Add the other ingredients to the pot.. Add 1½-2 tsp of salt and a little bit of ground black pepper.. Add 0.5 L (0.13 gal) of boiling water.. Simmer for about 10 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 421, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 422, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 372, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 423, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 334, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (83, 424, 0);
insert into tipoReceta(idReceta, tipo) values (83, 'Generic/International');


insert into Receta(nombre, tiempo, proceso) values ('Russian Okroshka', 80, 'Prepare a saucepan where you will put the ingredients (5 liters) and a saucepan for boiling eggs and potatoes. Boil potatoes and eggs (hard boiled). Finely chop cucumbers, radishes, onions, dill and sausage (or meat). Peel eggs and potatoes and chop finely. Pour kefir (or kvass) and mix all the ingredients. If necessary, add boiled water or mineral water.. Let it brew for a few minutes and the dish is ready to eat..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 425, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 426, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 427, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 100, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 428, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 429, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 430, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (84, 431, 0);
insert into tipoReceta(idReceta, tipo) values (84, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Schinkenfleckerl Viennese Macn Cheese', 25, 'Start cooking noodles.. First slice, then cube ham into smaller than 1cm³ pieces.. Whip cream in a big bowl.. Add spices, eggs and sour cream to bowl and stir.. Put ham cubes in and stir.. Put noodles without water into bowl and mix.. Put the mixture into one or two baking pans (with baking paper).. Bake at ~160°C for ~2 hours.. Optionally gratin mozzarella or any other cheese on top for 5-10 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 432, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 433, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 20, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 434, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 435, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (85, 436, 0);
insert into necesitar(idReceta, idElectro) values (85, 10);
insert into necesitar(idReceta, idElectro) values (85, 2);
insert into tipoReceta(idReceta, tipo) values (85, 'Austrian');


insert into Receta(nombre, tiempo, proceso) values ('Taco Meat', 45, 'Brown beef and onion together. Drain grease.. Add the rest of the ingredients to the browned meat.. Stir well.. Heat this mixture thoroughly.. Add more tomato sauce if the mixture is dry.. Cover and simmer for 20 minutes, or less if the mixture begins to dry out..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 437, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 438, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 439, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 370, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (86, 32, 0);
insert into necesitar(idReceta, idElectro) values (86, 5);
insert into tipoReceta(idReceta, tipo) values (86, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Pickled Red Onions', 10, 'Cut onion in half and slice root to stem and place in a jar.. Mix equal parts of water and vinegar in a pot and bring to a boil. Add salt to taste.. As soon as it begins to boil, turn off and pour the mix into the jar and allow to cool.. Seal and place in fridge for a few hours until vibrant pink..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (87, 441, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (87, 442, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (87, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (87, 33, 0);
insert into necesitar(idReceta, idElectro) values (87, 5);
insert into necesitar(idReceta, idElectro) values (87, 1);
insert into tipoReceta(idReceta, tipo) values (87, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Bloody Mary Mix', 5, 'In a large pitcher, combine juice cocktail, lemon juice and brown sugar. Season with Worcestershire sauce, horseradish, hot sauce and celery salt. Cover, and refrigerate 8 to 12 hours to allow flavors to meld..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 443, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 152, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 444, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 99, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 445, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (88, 446, 0);
insert into necesitar(idReceta, idElectro) values (88, 1);
insert into tipoReceta(idReceta, tipo) values (88, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Beef Tips in Gravy on Sour Cream Mashed Potatoes', 128, 'Throw your pressure cooker with an open lid onto high heat or turn it onto saute mode if it is electric. Chop up the fat and begin to saute it in the pressure cooker. Chop up your meat and add it to the fat. Add a teaspoon or so of beef bouillon into the pressure cooker to intensify the beef flavor (optional). Add salt, pepper, and a tiny pinch of garlic powder and stir. Deglaze the cooker using hot water or red wine (optional) for more flavor.. Allow the meat to cook for around 30 minutes on low heat. Vent your pressure cooker, remove the lid. Add a small amount of hot water, then allow it to come to a boil. Mix up some flour with warm water and begin adding it into the pot until the gravy thickens. Turn off the heat and plate on top of your sour cream mashed potatoes. Peel and dice up your potatoes. Boil them on medium heat until they begin to fall apart. Pour off the water and mash up the potatoes. Add butter, shredded cheese, and stir. Add a very small amount of milk and sour cream and stir until the mash reaches your desired consistency. Plate under your beef tips in gravy.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 447, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 448, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 20, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 449, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 450, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 451, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (89, 322, 0);
insert into tipoReceta(idReceta, tipo) values (89, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Sticky Porkchops', 180, 'Fill a shallow dish with soy sauce to about half the thickness of your porkchops. The level should not be able to fully submerge them.. Mix in the honey until fully combined with the soy sauce, then mix in the garlic, ginger and chinese five spice.. Place your porkchops in the dish, then flip them.. Cover the dish with clingfilm, then chill in the fridge for 1h 30mins.. Take the dish out of the fridge, flip the porkchops, then recover the dish and chill for a further 1h 30mins.. Heat some olive oil in a pan over medium heat, then place your porkchops in the pan and cook for 10-15mins or until cooked through.. Take the porkchops out the pan, then rest for a couple of minutes before slicing and serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 452, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 77, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (90, 453, 0);
insert into necesitar(idReceta, idElectro) values (90, 1);
insert into tipoReceta(idReceta, tipo) values (90, 'Chinese');


insert into Receta(nombre, tiempo, proceso) values ('Sausage Rolls', 10, 'Place baking paper onto a tray. Whisk eggs. Lay out pastry, brush or pour egg whisk so it lightly covers the pastry. Prepare sausage meat onto pastry. Fold pastry around the meat, apply extra egg whisk to the seal where the pastry is folded together. Bake until golden brown..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (91, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (91, 454, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (91, 455, 0);
insert into necesitar(idReceta, idElectro) values (91, 10);
insert into necesitar(idReceta, idElectro) values (91, 2);
insert into tipoReceta(idReceta, tipo) values (91, 'British');


insert into Receta(nombre, tiempo, proceso) values ('Tanzanian Tea w Milk', 13, 'Bring some hot water to boil and seep the tea.. When done seeping, add in the milk (or cream).. Sweeten to taste..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (92, 456, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (92, 457, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (92, 458, 0);
insert into necesitar(idReceta, idElectro) values (92, 5);
insert into tipoReceta(idReceta, tipo) values (92, 'Tanzanian');


insert into Receta(nombre, tiempo, proceso) values ('Simple Chicken Curry', 70, 'Mince the garlic and dice the onion.. Saute onion and garlic with the butter in a pot.. Once the onion is just beginning to brown, pour in the chicken broth and tomato and raise heat to high.. Cut the chicken breasts into bite-sized cubes.. Add the chicken and the spices.. Once the pot reaches a boil, reduce heat and let simmer for 30 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 459, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 260, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 460, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 14, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 462, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 463, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 464, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (93, 465, 0);
insert into necesitar(idReceta, idElectro) values (93, 5);
insert into tipoReceta(idReceta, tipo) values (93, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Gnocchi', 95, 'Boil potatoes (with their skins) until mashable.. Slice potatoes in two and scoop them out of their skin.. Mash with a potato-masher while adding kosher salt.. Slowly begin to add flour while mashing and kneading until there are no lumps of potato and the potato/flour mixture takes on a dough-like consistency.. Begin to boil more water with lots of kosher salt added.. Flour a work surface, pinch off some of the dough and roll it on the surface into a long chubby snake.. Slice the dough snake into small pieces. Press the pieces with your finger to make an indentation.. Add the pieces to the boiling water. They will rise to the top when they are ready.. In a pan, melt butter and add sprigs of sage (oregano or thyme will work as well, albeit are less traditional). Smashed tomato juices are also a nice addition.. Add the cooked gnocchi to the pan and roast them in butter for a minute or two until slightly browned. As pan begins to dry, add some pasta water.. Serve gnocchi on a plate, grate on Parmigiano-Reggiano cheese liberally. Add garnish if desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 381, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 435, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (94, 466, 0);
insert into tipoReceta(idReceta, tipo) values (94, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Satay with Peanut Sauce', 85, 'Cut the chicken into 1/2 inch thick strips.. Mix chicken with oyster sauce, turmeric, 1 tbsp sugar and coconut milk. Allow chicken to marinade for at least an hour.. Optionally, you can skewer the meat with wooden skewers.. Grill chicken until cooked through.. Mix peanut butter, 1 tbsp sugar, and curry paste together in a small saucepan. Add enough water to thin to a thick sauce.. Cook for 1-2 min stirring frequently.. Serve chicken with peanut sauce for dipping..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 467, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 210, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 202, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 263, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 468, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 469, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (95, 470, 0);
insert into necesitar(idReceta, idElectro) values (95, 11);
insert into tipoReceta(idReceta, tipo) values (95, 'Thai');


insert into Receta(nombre, tiempo, proceso) values ('Coleslaw', 95, 'Finely shred, rinse, and drain the carrot. Finely shred the cabbage (use a food processor if possible). Whisk together the mayonnaise, buttermilk, lemon juice, cider vinegar, distilled vinegar, olive oil, and sugar. Add the salt, pepper, celery seeds, onion powder, granulated garlic, and combine well. Combine the shredded cabbage and carrot in a separate bowl. Slowly add the dressing until it lightly coats the vegetables, and toss well. Add more dressing until it tastes good. Refrigerate for at least an hour before serving.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 98, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 471, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 472, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 473, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 474, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 4, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 475, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 476, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 477, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 478, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 105, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 479, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (96, 193, 0);
insert into necesitar(idReceta, idElectro) values (96, 10);
insert into necesitar(idReceta, idElectro) values (96, 1);
insert into tipoReceta(idReceta, tipo) values (96, 'Southern');


insert into Receta(nombre, tiempo, proceso) values ('Butter Chicken Masala Curry', 30, 'Mix chicken with salt, pepper, ginger-garlic paste, chili powder, turmeric powder, and lemon juice for the chicken marinade; let marinate for an hour.. Roast the marinated chicken in an oven at medium temperature for 5 to 10 minutes. The chicken should be three-fourths done.. Heat butter in a pan. Fry the onions until it turns translucent.. Add garlic-ginger and sauté for a minute, then add garam masala. Cook for a few seconds making sure not to burn the paste.. Add tomato puree, salt, and chili powder. Let simmer for about 5 minutes, occasionally stirring until sauce thickens and becomes a deep brown-red color.. Add the marinated chicken, butter, fresh cream, the crushed fenugreek leaves, and sliced green chilies. Cook for an additional 5 to 10 min until the chicken is cooked.. Adjust salt, garnish with the coriander leaves. Serve over rice or naan..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 480, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 481, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 381, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 482, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 483, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 484, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 485, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (97, 486, 0);
insert into necesitar(idReceta, idElectro) values (97, 2);
insert into tipoReceta(idReceta, tipo) values (97, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Pozharskiye Cutlets', 115, 'Prepare 2 medium-sized and 1 extra large bowl, a few plates and a regular frying pan.. Get the chicken out of the cold and into the XL bowl. Butter, too, but onto a plate.. While they warm up, crumb up the bread. By hand. The smaller, the better.. Mince the chicken, if necessary. Mince the onions, if you desire them.. Divide butter, once softened, into medium bits.. Add eggs to the meat and put a few into a medium bowl; mix both bowls contents thoroughly.. Add the spices, salt and/or sauce of your choosing.. Add the softened-up butter to the XL bowl and mix thoroughly.. MAKE A TEST CUTLET by rolling up a small ball of the mince, then dipping it into the bread, then into the eggs, then into the bread again, compounding the breading slightly between dips.. Fry, let cool and then taste the cutlet. (Pozharskiye are very juicy, so liquid in the pan is to be expected.). If unsatisfied, add more flavoring or throw everything away. If satisfied, repeat step 9..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 487, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 488, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 489, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 490, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (98, 72, 0);
insert into tipoReceta(idReceta, tipo) values (98, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Soleier pickled eggs', 17, 'Put 750mL of water and the peels of five onions in a pot and let them cook for five minutes. Remove the peels about twenty minutes later.. Put the eggs, one teaspoon of sugar, two tablespoons of salt and all spices (but vinegar and garlic) in the pot, bring it to a boil and cook them for seven minutes.. Use a spoon to remove the eggs from the pot and crack them all around. Do not remove the eggshell!. Place the eggs and the garlic in a jar, fill it with the spiced water and add the vinegar. Add water, if needed, so that the eggs are covered.. Let them rest for at least three days and at most two weeks at room temperature or slightly below..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 491, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 492, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 493, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 70, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 494, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 495, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 496, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 497, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 37, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 442, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (99, 29, 0);
insert into tipoReceta(idReceta, tipo) values (99, 'german');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Pasta Casserole', 48, 'Preheat oven to 400F/200C.. Dice chicken and pan cook with oil until fully cooked.. [Cook the pasta](/pasta) for a few minutes less than usual (about 7-8 minutes).. Add chicken and pasta into a casserole dish. Mix together. Add diced tomato and shredded mozzarella cheese and keep mixing. Top with parmesan cheese and bread crumbs for an even coat. Add about a spoonful of butter evenly on the top.. Cook in the oven for 22-25 minutes, until the top looks golden..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 498, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 499, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 179, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 500, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 161, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 16, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (100, 501, 0);
insert into necesitar(idReceta, idElectro) values (100, 2);
insert into tipoReceta(idReceta, tipo) values (100, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Keto Coconut Bread', 10, 'Mix all dry ingredients in a big bowl.. Add the whole eggs and the coconut oil.. Mix well with a spoon until it gets thick. You can add extra coconut flour if you feel it is too liquid.. Pre-heat your oven to 350°F (175°C).. Pour the dough evenly into a Bread/Loaf form (coated with butter or parchment paper) and cook for 35 to 45 min.. After cooking, remove it from the oven and let it sits while it cools down.. Some variations can be done, like using butter instead of coconut oil or adding pumpkin pure to the mix and having a cake-like texture..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 502, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 503, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (101, 504, 0);
insert into necesitar(idReceta, idElectro) values (101, 2);
insert into tipoReceta(idReceta, tipo) values (101, 'General');


insert into Receta(nombre, tiempo, proceso) values ('Quiche Lorraine', 160, 'Spread some butter on a 26cm Ø or two smaller baking tins and cover it with flour. Sieve the flour, mingle the butter/margarine in small flakes.. Form a depression in the middle of the flour and add spoons of water.. Mix all ingredients by hand until the dough becomes a homogeneous mass.. Wrap the dough in aluminium foil and let it rest in the fridge for two hours (around -4 °C).. Preheat the oven at 200°C.. Spread the dough on a flour-covered surface. Roll it until it has a thickness of around 4mm. Form a crust on the sides.. Use a fork to prick the dough for a more thorough heat penetration.. Cut the ham in slices and distribute them evenly on the dough.. Divide the yolk from the egg white.. Whisk the yolk with cream.. Add the grinded cheese.. Whisk the egg white until it becomes foamy. Add it to the yolk-pepper-salt-cheese mixture.. Cover the ham in the baking tin with the mixture. Equalize the surface.. Bake the Quiche in the oven on the middle rail for 30 minutes.. After baking leave it to rest for a few minutes, then serve while it is still warm..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 505, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 360, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 506, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (102, 507, 0);
insert into necesitar(idReceta, idElectro) values (102, 2);
insert into necesitar(idReceta, idElectro) values (102, 1);
insert into tipoReceta(idReceta, tipo) values (102, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Stoemp', 10, 'Cut bacon into bits.. Sauté bacon until well colored.. Peel and dice into small chunks potatoes, peel and slice carrots.. Boil for 20-25 minutes potatoes and carrots in salted water.. Drain vegetables and mash with a fork, so that the texture remains slightly chunky.. Mix with bacon bits, butter, cream, nutmeg, salt, pepper..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 140, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 225, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (103, 508, 0);
insert into necesitar(idReceta, idElectro) values (103, 5);
insert into tipoReceta(idReceta, tipo) values (103, 'belgian');


insert into Receta(nombre, tiempo, proceso) values ('Baby Back Ribs', 482, 'Preheat your smoker to 180 degrees Fahrenheit using applewood.. Take the membrane off of the back of the ribs.. Cover both sides of the ribs heavily in your barbecue rub, and let sit at room temp for 30 minutes.. Place the ribs bone down (meat up) on your smoker, and let smoke at 180 degrees Fahrenheit for 3 hours.. Take the meat out and place on top of two sheets of tin foil. Then, apply a generous amount of brown sugar and honey to both sides of the ribs, followed by a small amount of the barbecue rub. If you have butter, cut it into slices and add it on the meat side.. Wrap your ribs in the tin foil and place them back on the smoker at 225 degrees Fahrenheit for 2 hours.. Take your ribs out of the foil and place them bone down (meat up) on your smoker.. Apply a generous helping of your barbecue sauce to the ribs once every 30 minutes for an hour (twice).. Take out of smoker and cover in tin foil, allow to sit for 10-30 minutes before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 509, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 510, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 511, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 512, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 513, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (104, 514, 0);
insert into tipoReceta(idReceta, tipo) values (104, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Beef Wellington', 10, 'Season the fillet with salt and black pepper.. Sear the fillet on all sides, including the ends.. Brush the fillet with yellow mustard.. Chop and puree mushrooms, then cook to release moisture.. Wrap the fillet, mushrooms, and ham, then refrigerate.. Preheat the oven to 302°F/150°C.. Roll out puff pastry and wrap the fillet mixture.. Brush pastry with egg yolks, season, and bake.. Let baked Beef Wellington rest, then slice for presentation..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 515, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 394, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 360, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 516, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 454, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (105, 127, 0);
insert into necesitar(idReceta, idElectro) values (105, 2);
insert into necesitar(idReceta, idElectro) values (105, 1);
insert into tipoReceta(idReceta, tipo) values (105, 'English');


insert into Receta(nombre, tiempo, proceso) values ('Banana Bread', 105, 'Preheat oven to 350°F (175°C). Mix the wet ingredients (eggs, bananas, butter, sugar) in one bowl.. Mix the dry ingredients (flour, baking soda/powder, spices, salt) in another bowl.. Slowly add the wet to the dry while mixing.. Mix until dry bits of flour are gone.. Pour into lightly buttered or oiled loaf pan.. Bake for around an hour (it is definitely ready when a wooden skewer or chopstick poked inside comes out clean)..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 517, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 37, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 518, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (106, 519, 0);
insert into necesitar(idReceta, idElectro) values (106, 2);
insert into tipoReceta(idReceta, tipo) values (106, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Ukrainian Vareniki', 71, 'Place potatoes into a large pot and cover with salted water; bring to a boil. Reduce heat to medium-low and simmer until tender, about 25 minutes. Drain potatoes and mash; season with salt and pepper.. Combine flour and 1 teaspoon salt in a large bowl while potatoes are cooking. Stir sour cream and baking soda together in a second bowl. Add water to flour mixture and blend in, followed by sour cream mixture. Knead into a smooth dough, cover with plastic wrap, and refrigerate for 10 to 15 minutes.. Melt butter in a skillet over medium heat and cook onions until browned, 5 to 10 minutes. Add mushrooms and cook until browned, about 5 minutes. Add to mashed potatoes.. Divide dough into 4 portions and roll each portion into a 1 1/2-inch thick rope. Cut ropes into small 1/2-inch pieces. Press each dough piece into a small flat circle and place 1 teaspoon of potato filling in the center. Fold dough over into a half-moon shape and seal edges.. Bring a large pot of salted water to a gentle boil. Add the vareniki in batches and cook until they float to the surface, about 3 minutes. Cook for 2 to 3 minutes more. Remove with a slotted spoon and place in a colander to drain..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 285, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 20, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (107, 520, 0);
insert into necesitar(idReceta, idElectro) values (107, 1);
insert into tipoReceta(idReceta, tipo) values (107, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Crab salad', 97, 'Boil rice, eggs and carrot. Chop crab meat and all other ingredients. Combine and mix all ingredients. Add mayonnaise. Chill before serving.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 521, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 133, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 522, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 24, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (108, 98, 0);
insert into necesitar(idReceta, idElectro) values (108, 1);
insert into tipoReceta(idReceta, tipo) values (108, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Potato sourdough bread', 400, 'Boil the potatoes. Peel off the skin of the potatoes (let them cool down a bit). Stir all ingredients and knead them well.. Let the dough rest for 5 hours in warm (25-30°C) conditions.. Preheat the oven to 250°C.. Bake for up to 10 minute with steam.. Release the steam and turn the heat down to 220°C.. Bake for another 35 minutes.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 523, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 524, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (109, 235, 0);
insert into necesitar(idReceta, idElectro) values (109, 2);
insert into tipoReceta(idReceta, tipo) values (109, 'Various');


insert into Receta(nombre, tiempo, proceso) values ('Teriyaki Beef Wok', 20, 'Whisk water, cornstarch, honey, ginger and soy sauce. Set aside.. Heat some sesame oil to medium heat in a wok and brown the beef.. Move the beef aside, add sesame oil and vegetables to the wok at high heat.. Mix everything in the wok and heat..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 525, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 211, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 526, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 113, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 527, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 528, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 529, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 530, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (110, 531, 0);
insert into tipoReceta(idReceta, tipo) values (110, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Apple strudel', 10, 'Peel and cut the apples in thin slices.. Roll out the puff pastry with a rolling pin.. Spread the jam over the puff pastry with a spoon.. Arrange the apple slices over the jam.. Sprinkle with cinnamon and breadcrumbs.. Cut tiny pieces of butter and arrange them over the apple slices.. Roll the puff pastry edges over, overlapping them.. Bake for around 40 minutes at 180°C (360°F).. Cover with powdered sugar..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 454, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 532, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 533, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 534, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 535, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (111, 125, 0);
insert into necesitar(idReceta, idElectro) values (111, 2);
insert into tipoReceta(idReceta, tipo) values (111, '');


insert into Receta(nombre, tiempo, proceso) values ('Tomato and Grilled Bell Pepper soup', 30, 'Halve, deseed and grill the bell peppers in an oven or on a grill. Remove skin after grilling.. Skin and quarter tomatoes.. Sauté onion and crushed garlic in a large soup pan with olive oil.. Add broth/stock, tomatoes, bell pepper, and purée with a stick blender.. Add spices, syrup, and cream..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 536, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 537, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 538, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 423, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 539, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 540, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (112, 225, 0);
insert into necesitar(idReceta, idElectro) values (112, 11);
insert into necesitar(idReceta, idElectro) values (112, 2);
insert into tipoReceta(idReceta, tipo) values (112, 'undetermined');


insert into Receta(nombre, tiempo, proceso) values ('Three Bean Salad', 80, 'Put dressing ingredients in a large salad bowl an whisk until blended.. Empty cans of beans into a colander and rinse under cold water.. Chop remaining vegetables and add to dressing.  Add beans and gently stir.. Refrigerate for at least an hour before serving, stirring occasionally..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 541, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 542, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 543, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 544, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 545, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 546, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (113, 17, 0);
insert into tipoReceta(idReceta, tipo) values (113, 'american');


insert into Receta(nombre, tiempo, proceso) values ('Spaghetti all amatriciana', 48, 'Grate the pecorino and keep it aside.. Mince the chili pepper(s) and keep it/them aside.. Cut the guanciale in thin stripes and cook them in the oil with the minced pepper(s) for about 3 minutes on medium/high heat.. Douse with the wine and turn up the heat. Cook until the alcohol has evaporated.. Start cooking the pasta.. Lower the heat to medium and add the passata, some salt and plenty of pepper. Cook for about 15 minutes.. Once finished, drain the pasta and add the sauce and the pecorino/parmesan, mix well and serve immediately. Optionally you can add some pecorino or parmesan on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 547, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 548, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 394, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 549, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 153, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 550, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 551, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (114, 552, 0);
insert into necesitar(idReceta, idElectro) values (114, 5);
insert into tipoReceta(idReceta, tipo) values (114, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Stock or Bone Broth', 80, 'Cut onions, celery and carrots into large chunks, add to a large empty pot (stock pot).. Add the chicken to the pot as well.. Add any aromatic seasonings.. Fill the pot with water up slightly past all the ingredients.. Bring contents to a boil, then reduce heat and let simmer for at least 45 minutes.. Remove the bubbles that form on the top for a clearer stock, optional.. Strain the liquid, now stock, into another container for storage or use..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (115, 553, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (115, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (115, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (115, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (115, 554, 0);
insert into necesitar(idReceta, idElectro) values (115, 5);
insert into tipoReceta(idReceta, tipo) values (115, 'General');


insert into Receta(nombre, tiempo, proceso) values ('Belgian Pear Syrup', 387, 'Wash and cut the fruit into 8 medium-sized pieces.. Place fruit in a large pan, add water.. Add the dried fruits if using.. Stew the fruit on low heat for 3 hours, stirring occasionally.. Sterilize your glass jars.. Extract the clear liquid using a sieve or cheese cloth.. Clean the pot and add the fruit liquid back.. Add sugar, cook for another 2 hours, stirring occasionally.. Check viscosity and pour the syrup into sterilized jars to seal..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (116, 555, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (116, 533, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (116, 556, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (116, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (116, 230, 0);
insert into necesitar(idReceta, idElectro) values (116, 5);
insert into tipoReceta(idReceta, tipo) values (116, 'Belgian');


insert into Receta(nombre, tiempo, proceso) values ('Pizza sauce', 10, 'Dice onion and fry in olive oil on medium heat.. Add chopped garlic and chili pepper (optional) for some minutes.. Mix in tomato puré, salt, pepper, and oregano. Cook until puré gets oily.. Add canned tomatoes, and crush with spatula.. Let it sit on low heat. The longer the better..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 557, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 558, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (117, 530, 0);
insert into necesitar(idReceta, idElectro) values (117, 5);
insert into tipoReceta(idReceta, tipo) values (117, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Pasta Navy Style', 60, 'Add olive oil to your frying pan, heat it to medium-high heat.. Chop some onions and add them to the preheated pan.. Add the ground beef to the pan, salt it and mix it a bit with the onions in the pan.. Mince the garlic and add it together with the cumin and paprika to the pan.. Cook the pasta in a pot until its done al dente while the beef is being cooked.. Grate the tomatoes over the pan, allowing the paste and juice to fall directly into the pan.. Grate the carrot and add it to the pan.. Salt some more to taste, add black pepper to taste, mix.. Cook over medium/medium-low heat until the water and juices from the tomatoes have almost completely evaporated.. Add the pasta to the pan and cook for another couple of minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 205, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (118, 124, 0);
insert into tipoReceta(idReceta, tipo) values (118, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Simple Creamy Pasta Sauce', 8, 'Add 1 teaspoon of flour into a saucepan.. Pour ~60ml(2fl oz|1/4 cup) of cream into a saucepan.. Stir and turn on maximum heat.. Keep stirring until it becomes thick.. Mix the sauce with the pasta..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (119, 559, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (119, 12, 0);
insert into tipoReceta(idReceta, tipo) values (119, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Chili Con Carne', 95, 'Brown the beef by adding it to a pot with neutral oil. Start breaking it into small pieces.. Dice onions, red peppers, and chili peppers into small pieces (dice). Sautee until translucent.. Add tomato paste to vegetables and let brown.. Add meat to the vegetables.. Add whole peeled tomatoes and some water (or stock).. Simmer for at least 45-60 minutes. Stir occasionally and add liquid if getting too dry.. Stir in kidney beans and dark chocolate.. Serve over rice and garnish with fresh cilantro..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 560, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 561, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 321, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 530, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 562, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 563, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 370, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 564, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 197, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (120, 436, 0);
insert into tipoReceta(idReceta, tipo) values (120, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Lasagna', 60, 'Prepare the bolognese or jared pasta sauce.. When the sauce is almost done cooking prepare your béchamel or ricotta filling.. If you want you can add 3-4 handfuls of grated emental cheese to the béchamel.. If necessary, boil the lasagna noodles following the descriptions on the packaging, start preheating your oven to 175°C/350°F.. Spread a thin layer of pasta sauce on the bottom of a large, deep baking tray.. Cover with lasagna sheets and spread a layer of béchamel sauce or ricotta, cover with lasagna sheets and spread a layer of pasta sauce if you want you can finely grate a little bit of parmesan on each layer of bolognese.. Rinse and repeat the previous step until the tray is nearly full or you are running low on béchamel sauce/ricotta filling, take care that the last layer should be bechamel or ricotta.. Grate some parmesan on top of your final layer and cover with Dry mozzarella cheese, wrap the top in aluminum foil.. Place the tray in the centre of your pre-heated oven and let it cook for 30-35 minutes, after that remove the foil to let the top brown.. Once it is done cooking take it out of the oven and cover again with aluminum foil, let it rest for 10 minutes before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 500, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 565, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 566, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 567, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 568, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (121, 569, 0);
insert into necesitar(idReceta, idElectro) values (121, 2);
insert into tipoReceta(idReceta, tipo) values (121, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Demi-glace', 192, 'Put the tomato paste in a large pot, then turn the heat on medium. Spread the paste around the bottom of the pot and stir until it just barely starts to brown. Deglaze with the broth. Stir in all other ingredients and boil over high heat until reduced to about 1/6th of its original volume. Freeze in ice cube trays.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (122, 570, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (122, 571, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (122, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (122, 311, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (122, 477, 0);
insert into tipoReceta(idReceta, tipo) values (122, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Shrimp and Grits', 40, 'Add bacon to hot pan. Meanwhile, in separate pot, bring chicken broth to a boil.. Add grits to chicken broth and stir. Cover and simmer per descriptions on box.. Once grits are done, add butter plus salt and pepper to taste. Stir until combined.. Add cheese. Stir until combined.. Once bacon is done, keep bacon fat in the pan. Add shrimp and fry on medium-high heat. Add Creole seasoning, lemon juice, Worcestershire Sauce, garlic and toss.. Fry until shrimp turns white on each side which is about 5-7 minutes total.. In a bowl, serve shrimp and bacon over grits. Top with parsley..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 572, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 140, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 573, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 574, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 575, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 576, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (123, 308, 0);
insert into tipoReceta(idReceta, tipo) values (123, 'American');


insert into Receta(nombre, tiempo, proceso) values ('One-Pot Chicken Tetrazzini', 20, 'Melt butter in a large saucepan over medium-high heat. Add mushrooms, red pepper, onion and garlic; cook, stirring about 5 minutes until tender.. Sprinkle with flour and stir. Gradually whisk in milk then Worcestershire, salt and pepper. Stirring occasionally, bring to a boil.. Add noodles, reduce heat to a low boil. Stirring constantly and around edges of pan, cook until pasta is tender, about 7 minutes.. Stir in chunks of Boursin, then chicken, peas, and parsley, stirring until chicken is hot and Boursin is melted. Serve sprinkled with basil and Parmesan..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 325, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 285, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 577, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 578, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 579, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 310, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 102, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 580, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (124, 435, 0);
insert into necesitar(idReceta, idElectro) values (124, 10);
insert into tipoReceta(idReceta, tipo) values (124, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Lavacake', 15, 'Cover the baking tin with some butter.. Heat the oven for 200°C.. Mix all of the ingredients.. Fill dough in the baking tins pits.. Bake for 7 min. in the oven at 200°C.. Serve hot with berries and vanilla ice-cream..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (125, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (125, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (125, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (125, 581, 0);
insert into necesitar(idReceta, idElectro) values (125, 2);
insert into tipoReceta(idReceta, tipo) values (125, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Scouse', 10, 'Finely dice the onions and garlic. Chop the carrots, potatoes, parsnips and/or swede into a uniform size.. Fry the diced onion with a bit of oil until brown, in a deep pot. Then quickly fry the garlic (until you can smell it).. Add the mince whole and sear (flipping to sear the other side before breaking up).. Once the mince is properly browned, Pour in the beef stock.. Add your root vegetables now, along with your bayleaf, salt and lots of pepper.. Leave to boil for about a half hour then remove the bayleaf. Adding the cabbage half way through.. Stir in the gravy granules until you get the thickness you want and Serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 582, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 136, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 223, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 564, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 583, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 584, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 585, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (126, 185, 0);
insert into necesitar(idReceta, idElectro) values (126, 5);
insert into tipoReceta(idReceta, tipo) values (126, 'English');


insert into Receta(nombre, tiempo, proceso) values ('Zurich-Style Meat Saute', 15, 'Fry the meat in butter at high heat until it starts losing liquid.. Take the meat out of the pan and set aside.. Saute the onions.. Add the mushrooms, saute, then add a tbsp of flour and mix well. The flour will make the sauce thicker, so use carefully.. Add the white wine and let it boil for a few minutes.. Add cream, boil until the sauce is very creamy.. Add the meat, boil until the meat is warm.. Add parsley, and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 266, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 153, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (127, 121, 0);
insert into tipoReceta(idReceta, tipo) values (127, 'Swiss');


insert into Receta(nombre, tiempo, proceso) values ('Lenten Chili', 10, 'Chop the large onion and mince the garlic cloves.. On medium-low heat in a large tall pot add 2-3 tbsp olive oil.. Add the chopped onions into the pot with oil and constantly stir for 5-10 minutes until they begin to brown.. Just before onions are done add the minced garlic to the pot and let cook for 1-2 minutes.. Add the tomato sauce, diced tomatoes, sweet corn, beans, and rice.. Turn up the heat to medium. Add each of the spices, taste the chili, and adjust flavoring accordingly.. Let cook for 20-30 minutes, stirring occasionally..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 586, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 587, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 562, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 49, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 16, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 588, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 589, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 144, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 477, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 370, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 590, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (128, 31, 0);
insert into necesitar(idReceta, idElectro) values (128, 5);
insert into tipoReceta(idReceta, tipo) values (128, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Red Sauce', 268, 'Mince the garlic, peel the carrot, peel and cut the onion in half.. Pour the oil in a large pot at medium low heat.. Chop the salt pork and chuck roast, simmer in oil with garlic.. Simmer until the meat has browned.. Add the tomato, full carrot, and onion.. Add bay leaf and red pepper then give it a good stir.. Lower heat let simmer for a few hours.. Occasionally stir, and add water if sauce gets too thick.. Add salt and pepper to taste..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 591, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 592, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 593, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 594, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 595, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 16, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (129, 596, 0);
insert into necesitar(idReceta, idElectro) values (129, 5);
insert into tipoReceta(idReceta, tipo) values (129, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Broiled Trevally', 67, 'Dice carrots, eggplant, squash, tomatoes and onions. Place these on a pan.. Put basil, thyme, bay leaf, salt, and pepper on each of the fishs side. Place the fish above the veggies.. Crush garlic and ginger (with mortar and pestle, of course) and place this in and around the fish. . Give it all a good splash of olive oil.. Cover the pan and set to medium-low fire, until everything looks cooked.. Flip the fish on the other side, just to make sure that it is properly cooked.. Check the doneness of the squash: if it is cooked, everything is.. Let everything set for 5 mins. before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 597, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 598, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 599, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 41, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 331, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (130, 11, 0);
insert into necesitar(idReceta, idElectro) values (130, 12);
insert into tipoReceta(idReceta, tipo) values (130, 'unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Fajita Seasoning', 5, 'Mix seasonings in a bowl. Adjust amounts depending on how much is needed..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 477, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 144, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 600, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 261, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (131, 370, 0);
insert into tipoReceta(idReceta, tipo) values (131, 'mexican');


insert into Receta(nombre, tiempo, proceso) values ('Tofu Stir Fry', 2926, '(Optional) Deep freeze tofu at least 24 hours prior and then thaw.. Chop tofu into cubes or slabs per preference and carefully drain water.. Allow tofu to soak in sauce for a few minutes.. Pour cooking oil into a copper wok evenly to coat around the basin.. Heat oil at medium and place tofu, sauce, and minced garlic into pan.. Shift and flip the tofu around, gradually turning up the heat as you go, until surface starts to turn brown.. Add in hard vegetables. If using cabbage, save that for last. Cook until veggies soften.. If non-vegan, scramble fry eggs in separate smaller pan until no longer runny, then add to stir fry.. Once eggs are firm/brown to liking, add cabbage. Cabbage softens fast, so saving it for last lets it retain some crunch.. Once cabbage softens, remove wok from heat. Serve on a plate with favorite sides..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 601, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 602, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 603, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 604, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 113, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 605, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 606, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 312, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (132, 502, 0);
insert into tipoReceta(idReceta, tipo) values (132, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Stir Fried Chicken with an Orange Sauce', 50, 'Chop your onion and red bell peppers into small bits and throw them in a large frying pan to cook with a pat of butter, stirring occasionally.. Chop your chicken into small bite sized pieces, add them to your pan once your onions begin to become translucent. Stir occasionally.. Add orange zest to the ingredients in your pan.. Squeeze the juice out of your oranges into a bowl and add it to your pan with soy sauce and honey. Use about a 3:1 ratio of orange juice to soy sauce.. Let the mixture sit for a few minutes to let the flavors blend, then stir in flour to thicken the sauce.. Once the sauce has reached your preferred level of thickness, take it off the heat. Serve over rice..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 134, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 607, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 536, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (133, 12, 0);
insert into tipoReceta(idReceta, tipo) values (133, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Cheesy Potato Bake', 75, 'Preparation. Sauce. Assembly.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 188, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (134, 140, 0);
insert into necesitar(idReceta, idElectro) values (134, 2);
insert into tipoReceta(idReceta, tipo) values (134, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Garam Masala', 1510, 'Star anise and Mace are normally not added to Garam masala. They are added specially if someone is making Biriyani.. Cloves will make the masala really hot. So make sure to add only as much as you want to eat.. Too much Mace makes the masala quite bitter. So make sure you do not add more than what has been recommended. The amount of other spices can be changed according to taste.. Wash all the dry spices really well.. Sun dry your washed spices for about 1 day or dry roast them until aromatic.. Cool the dry spices and put them into a mixer. Mix thoroughly.. Sieve the powder and add the larger pieces into the mixer once again and mix it again until everything turns into a fine powder. This step might need to be repeated a few times.. The resulting mixture is garam masala. Store it in airtight glass jars.. You can store this mixture for about 2/3 months in a cool dry place..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 608, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 609, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 459, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 338, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 223, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 610, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 335, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (135, 611, 0);
insert into necesitar(idReceta, idElectro) values (135, 2);
insert into necesitar(idReceta, idElectro) values (135, 6);
insert into tipoReceta(idReceta, tipo) values (135, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Korv Stroganoff', 5, 'Cut the sausage into sticks and dice the onion.. Fry the sausage and onion in oil for about ten minutes. Add the tomato purée and cook for another minute.. Stir in cream, milk, soy sauce and Dijon mustard. Let it simmer for at least five minutes.. Season to taste with plenty of pepper, and possibly salt.. Serve with boiled rice. Optionally top with freshly ground pepper and/or garnish with chopped parsley..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 612, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 613, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 614, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (136, 200, 0);
insert into necesitar(idReceta, idElectro) values (136, 5);
insert into tipoReceta(idReceta, tipo) values (136, 'Swedish');


insert into Receta(nombre, tiempo, proceso) values ('Diannes Southwestern Cornbread Salad', 30, 'Prepare cornbread according to package directions, cool, and crumble. Then set aside.. Prepare salad dressing according to package directions.. Layer a large bowl with half each of cornbread, lettuce, and the next 6 ingredients: spoon half of dressing evenly over top. Repeat layers with remaining ingredients and dressing. Cover and chill at least 2 hours..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 615, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 616, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 617, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 618, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 619, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 620, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (137, 26, 0);
insert into necesitar(idReceta, idElectro) values (137, 2);
insert into tipoReceta(idReceta, tipo) values (137, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Kettle Corn', 2, 'Add oil into your saucepan and 3 popcorn kernels.. Cover with lid and set stove to medium-high heat.. Once all 3 kernels pop, add in the rest of your kernels and shake to coat in oil. Pour sugar directly onto the kernels.. Shake the pot for 3 seconds, rest for 3 seconds, and repeat till the kernels start to pop steadily. Depending on your stove, you may need to lift the pot to shake.. Once kernels start popping, shake pot every 1-2 seconds.. Once you no longer hear pops for about 3 seconds, immediately transfer into a bowl to avoid burning..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (138, 621, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (138, 622, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (138, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (138, 33, 0);
insert into necesitar(idReceta, idElectro) values (138, 5);
insert into tipoReceta(idReceta, tipo) values (138, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Panang-Style Beef Curry', 10, 'Start rice. While water comes to a boil, core and cut pepper into 1/2 inch pieces. Roughly chop cilantro. Finely chop the chili pepper - remove seeds for less heat.. Add rice to boiling water. Reduce heat to low, cover and cook until rice is tender and absorbed, about 12-14 minutes. Remove from heat and keep covered.. While rice cooks, heat a large non-stick pan over medium-high heat. Once hot, add a tablespoon of oil, then the beef and garlic puree. Cook, breaking up beef into smaller pieces, until no pink remains (4-5 mins).. Add peppers and onions to the pan with beef. Cook, stirring occasionally until softened (2-3 mins). Add mild curry paste, red curry base, soy sauce, peanut butter, and the minced chili pepper. Cook, stirring often, until fragrant (1 min).. Add coconut milk to the pan. Cook, stirring often, until curry thickens slightly (2-3 mins).. Fluff rice with a fork. Add half the cilantro and season, then stir to combine. Divide rice between plates and top with beef curry. Sprinkle peanuts and remaining cilantro over top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 263, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 623, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 624, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 625, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 626, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 627, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 628, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 350, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (139, 629, 0);
insert into tipoReceta(idReceta, tipo) values (139, 'Thai');


insert into Receta(nombre, tiempo, proceso) values ('Spiced Apple Pancakes', 35, 'In a medium bowl, combine flour, sugar, cinnamon, baking powder, and 1 pinch of salt.. Separate the egg yolk and egg white. Add the egg yolk to the dry ingredients.. Whisk the egg white until foamy.. Slice the peeled apple into thin strips. Alternatively, grate the apple.. Combine dry ingredients, apple, vanilla extract, egg white, and milk into a homogenous batter.. To a large pan, add 1 tbsp butter. Add the batter (about 3 tbsp per pancake) and cook for 2 min per side on medium-high heat..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 630, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 631, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (140, 11, 0);
insert into necesitar(idReceta, idElectro) values (140, 10);
insert into tipoReceta(idReceta, tipo) values (140, 'German');


insert into Receta(nombre, tiempo, proceso) values ('Cheesy Meatballs with Tomato Sauce', 65, 'Beat the egg(s) in a large bowl.. Add in the ground beef, and the bread crumbs and mix.. Chop the onion into small pieces and add it to the bowl. Mince the garlic cloves and add to the bowl. Dice the parsley leaves and add to the bowl.. Salt the beef mix and mix it thoroughly.. Cut the cheese into cubes.... Take a cheese cube and wrap with enough ground meat to completely cover it. Repeat this process until you have run out of the ground beef mix.. Heat the frying pan, add some olive oil, and add the meatballs.. Pour the water and tomato paste; add the dried oregano and basil, and ground black pepper; and salt to taste.. Cook over medium-low heat for about ten minutes rolling the meatballs....');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 71, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 632, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 161, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 331, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (141, 14, 0);
insert into tipoReceta(idReceta, tipo) values (141, 'none specified');


insert into Receta(nombre, tiempo, proceso) values ('Lamb Biriyani', 133, 'Wash the rice till the water turns clear and let the rice soak for at least 30 mins.. Chop tomatoes and onions. Grind ginger and garlic into a paste.. For the green chilli, slice it midway.. In a big pot, toast the spices with oil on medium heat.. Add onions and saute.. Add tomatoes, ginger and garlic paste and saute.. Add meat and water. Add the required spices.. Add water and rice into the pot.. Once 80% of the water has evaporated, reduce to low heat and simmer..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 633, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 634, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 346, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 635, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 25, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 636, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 259, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 637, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 638, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (142, 639, 0);
insert into necesitar(idReceta, idElectro) values (142, 5);
insert into tipoReceta(idReceta, tipo) values (142, 'Indian (Tamil)');


insert into Receta(nombre, tiempo, proceso) values ('Okonomiyaki', 10, 'Chop cabbage into thin strips.. Whisk water and egg together in a bowl and then whisk in flour, salt, and seasonings.. Fold cabbage into batter with as few folds as possible to completely work the cabbage in.. Fry meat in a pre-heated cast-iron pan or griddle on medium-high heat until brown on one side, flip, and immediately pour batter on top after flipping.. Allow to cook for 2-3 minutes and either flip the pancake, or move under a broiler to cook the top for another 2-3 minutes.. Move pancake to a serving plate meat side up and squirt tonkatsu sauce, mayonnaise, and sriracha over the top in a zig-zag pattern. Sprinkle katsuobushi and nori on top of the sauces and the okonomiyaki is ready to serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 640, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 641, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 185, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 642, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 98, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 643, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 644, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (143, 645, 0);
insert into tipoReceta(idReceta, tipo) values (143, 'Japanese');


insert into Receta(nombre, tiempo, proceso) values ('Red Bean Buns ', 178, 'The easiest way to make red bean paste is to boil the beans until they are eaily mashable. If you squeeze a bean between your fingers it should turn into a smooth paste. Red beans do not soften properly when cooked in sugar, so make sure the beans are completely cooked before adding any sweeteners. To help the beans cook faster and to a smoother consistency soak your red beans in cold water overnight before boiling them. This will soften them up and afterwards should only take about 30 minutes to boil. Otherwise, boil the beans for up to 90 minutes, or until soft. Make sure you top up the water as they boil. They should always be submerged by water to cook up to an even consistency. Once softened drain the beans and place them in a small saucepan with the brown sugar. Cook on medium high, stirring constatnly until the sugar has dissolved and the paste has thickened. You should be able to draw a line across the bottom of the pot.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 646, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 647, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 648, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (144, 649, 0);
insert into tipoReceta(idReceta, tipo) values (144, 'Chinese');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Biscuit Potpie Recipe', 35, 'Preheat oven to 400°F (200°C). In a large bowl, combine the vegetables, chicken, soup and thyme. Pour into an ungreased deep-dish 9-in. pie plate. Combine the biscuit mix, milk and egg; spoon over chicken mixture.. Bake until topping is golden brown and toothpick inserted in the center comes out clean, 25-30 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 650, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 651, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 652, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 653, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 654, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 6, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (145, 655, 0);
insert into necesitar(idReceta, idElectro) values (145, 2);
insert into tipoReceta(idReceta, tipo) values (145, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Full English Breakfast', 95, 'Preheat your oven to 250°c or 480°F.. Prepare you mushrooms by cutting off the ends of the woody stems, and washing them in a colander.. Prepare your tomato by cutting off the stem, and slicing it in half.. Crack your eggs into a bowl and whisk them until homogeneous.. Place your sausages onto a oven tray, and begin cooking them for 15 minutes.. Place your bacon into a cold pan and begin to cook on high.. Once the bacon is crispy on one side, flip and begin browning on the other.. When cooked, place the bacon onto a plate with paper towels to drain.. If fifteen minutes have passed at this point, take the sausages out of the oven and flip them to get colour on the other side,. Set your pan to medium, and scramble the whisked eggs in the same pan,. Once the eggs curd has set somewhat, push the eggs to the side of the pan and place your tomato into it (cut side down); building colour,. Add your mushrooms to the same pan.. Add your baked beans to a pot set to medium. Once they are simmering, they are done.. Toast your bread as preferred.. If half an hour has passed at this point, take your sausages out of the oven.. Plate up by taking each ingredient and giving it its own portion on the plate..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 656, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 657, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 658, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 659, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 660, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (146, 520, 0);
insert into necesitar(idReceta, idElectro) values (146, 2);
insert into tipoReceta(idReceta, tipo) values (146, 'British');


insert into Receta(nombre, tiempo, proceso) values ('Hangover Eggs', 33, 'Bring a cast iron pan to medium-high heat and add a second or two of olive oil when things start to warm up.. While the pan heats up, use your hands and tear off pieces of bread that are roughly the size of your hand.. Make sure you have one piece of bread per egg you want to make.. Once the olive oil starts smelling a bit (or smoke comes off of it), crack in however many eggs you care to eat. Turn down the heat to medium.. Act fast! As the eggs start cooking, prepare a plate with two handfuls of chopped green onion and Tabasco.. After about four minutes (or when the tops of the eggs start to set), take out eggs and place on top of bed of onions and Tabasco.. Turn heat back to medium-high and add a touch more olive oil. Place pieces of bread in pan.. Every so often, move the pieces of bread around to soak up the oil.. When the bread is about to turn a good shade of golden-brown, add a generous sprinkle of Tony Chacheres to the plated eggs (on top of them).. Turn off the heat and move the pan off the burner. Take out bread pieces and place on the same plate as the eggs.. Serve with glass of ice-cold beer..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 661, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 26, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 662, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 663, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (147, 664, 0);
insert into tipoReceta(idReceta, tipo) values (147, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Sauerkraut', 20225, 'Prepare and clean as many glass jars as you think you will need.. Chop or shred cabbage and rinse under cold water. Sprinkle with salt.. Knead the cabbage with clean hands for about 10 minutes until there is enough liquid to cover it.. Stuff the cabbage into a glass jar, pressing the cabbage underneath the liquid. If necessary, add a bit of water to completely cover the cabbage.. Cover the jar with a tight lid, airlock lid, or coffee filter secured with a rubber band.. Culture at room temperature (60-70°F/15-20°C is preferred) for at least 2 weeks, until desired flavor and texture is achieved. If using a tight lid, burp it daily to release excess pressure.. Once the sauerkraut is finished, put a tight lid on the jar and move to cold storage. The sauerkrauts flavor will continue to develop as it ages..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (148, 185, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (148, 237, 0);
insert into tipoReceta(idReceta, tipo) values (148, 'German');


insert into Receta(nombre, tiempo, proceso) values ('Chocolate Chip Cookies', 60, 'Preheat oven to 375°F. Mix the flour, baking soda, and salt in a bowl. Using a mixer or whisk, beat the butter, sugar, eggs, vanilla, and milk in a separate bowl for a few mins. Combine and stir in the dry ingredients, then the chocolate chips. Use an ice cream scooper or spoon to make uniform balls of cookie dough to the size you like and evenly space them out on a parchment paper-lined baking sheet. Bake in the oven one baking sheet at a time for around 8-10 minutes, taking them out when they start to brown. Cool for a few minutes then put them on a cooling rack.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 665, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 666, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 2, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 341, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (149, 667, 0);
insert into necesitar(idReceta, idElectro) values (149, 10);
insert into necesitar(idReceta, idElectro) values (149, 2);
insert into necesitar(idReceta, idElectro) values (149, 6);
insert into tipoReceta(idReceta, tipo) values (149, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Shrimp and Sausage Gumbo', 223, 'Prep the vegetables. Get the roux started. Ensure to stir frequently while adding the following ingredients.. Add onion.. Add celery and peppers.. Add garlic.. Add beer.. Add broth.. Add seasonings and Worcestershire Sauce.. Add sausage and bring to a boil.. Lower heat, cover, simmer for 90 minutes.. Increase heat to medium. Add shrimp and cook for 5-7 minutes.. Turn off the heat and serve over white rice.. (Optional) For leftovers, boil gumbo with dry white rice and turn it into a jambalaya..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 668, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 669, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 517, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 613, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 670, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 312, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 671, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 664, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 653, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 672, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 673, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 26, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 674, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (150, 675, 0);
insert into necesitar(idReceta, idElectro) values (150, 5);
insert into tipoReceta(idReceta, tipo) values (150, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Bread', 295, 'Proof the yeast with warm water and sugar.. Combine water, yeast mixture, sweetener, salt, and flour. Knead in the bowl.. Let the dough rise for 2 hours.. Knead dough on a floured surface and let it rest for 45-60 minutes.. Preheat the oven to 425 degrees F (218 C) and prepare for baking.. Bake the bread for 26 to 35 minutes until golden brown.. Let the bread cool on a rack before slicing..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 190, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 290, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 676, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (151, 677, 0);
insert into necesitar(idReceta, idElectro) values (151, 2);
insert into tipoReceta(idReceta, tipo) values (151, 'International');


insert into Receta(nombre, tiempo, proceso) values ('Tzatziki', 6, 'Finely grate the cucumber and chop the dill. Strain the cucumber thoroughly with a clean kitchen towel. Mash the garlic and the olive oil in a mortar and pestle. Add all three to the Greek yogurt. Squeeze in some lemon/lime or vinegar. Add a generous pinch of salt and small pinch of pepper. Optionally add some extra olive oil. Stir and enjoy with your favorite snack.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 678, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 24, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 428, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 679, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (152, 75, 0);
insert into necesitar(idReceta, idElectro) values (152, 12);
insert into tipoReceta(idReceta, tipo) values (152, 'Greek');


insert into Receta(nombre, tiempo, proceso) values ('Spatchcock Chicken', 85, 'Preheat oven to 450 degrees F (230 degrees C). Line a large rimmed baking sheet with foil.. Place chicken, breast side down, on a work surface. Starting at the tail end, cut along both sides of backbone with kitchen shears. Remove backbone. Grabbing hold of both sides of the chicken, open it like a book. Turn breast side up. Push down on each side of breast with your hands until you hear it crack. Flatten chicken and transfer to one short end of the prepared baking sheet. Repeat with the second chicken.. Combine salt, tarragon, paprika, and pepper in a small bowl. Stir in oil. Run your fingers under chicken skin and rub tarragon paste under skin. Slide lemon slices under skin, in a single layer.. Roast until skin is crisp and an instant-read thermometer inserted into the thickest part of breast reads 165 degrees F, about 35 minutes. Let stand 5 minutes before cutting each chicken into 8 pieces..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 680, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 681, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 14, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (153, 682, 0);
insert into necesitar(idReceta, idElectro) values (153, 2);
insert into tipoReceta(idReceta, tipo) values (153, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Croque-monsieur bites', 44, 'Prepare the béchamel: melt the butter in a heavy-bottomed saucepan.. As soon as it foams, sprinkle it with flour, salt, pepper, add a pinch of nutmeg, mix. Then pour in the milk, little by little (especially not all at once), stirring with a whisk each time, until the sauce thickens.. Turn on the oven on th. 6/180°, take the baking sheet out of the oven and line it with aluminum foil.. Spread 6 slices of bread in front of you, spread them with a little mustard, add a layer of béchamel, 1 slice of ham folded in 4, grated cheese, a layer of béchamel, put the other 6 slices of bread on the on top, add a thin layer of béchamel and distribute the rest of the grated cheese.. Arrange the croque-monsieur on the baking sheet and put them in the oven for about 10 minutes.. You can place them under the broiler for 3-4 minutes at the end..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 683, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 37, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 684, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 685, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (154, 686, 0);
insert into necesitar(idReceta, idElectro) values (154, 10);
insert into necesitar(idReceta, idElectro) values (154, 2);
insert into tipoReceta(idReceta, tipo) values (154, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Grilled Mackerel with Miso Soup and Squash', 87, 'Place the mackerel fillets in a small container at room temperature. Pour sake on both sides of the fillets and let rest in the container, covered, for 30 min.. Cut onion into large slices.. To a saucepan, add two cups of water, sliced onions, and miso paste. Whisk the solution until the miso paste is fully dissolved.. Bring to a boil. Let the miso soup boil for about 10-15 min, then bring to a simmer.. While the miso boils, peel the summer squash. Cut squash into 1/4 in half moons.. In a large pan, melt 1 tbsp butter at medium-high heat.. Grill squash in the pan for 5-10 min, until both sides of the squash are golden brown. Add salt and pepper to taste.. Push squash one side of the pan.. Season each fillet with about 1 tsp of salt.. Place the fillets in the pan with the squash. Grill each side of the mackerel for about 4 min.. Serve with rice and soy sauce..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 687, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 688, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 689, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 690, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 626, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (155, 64, 0);
insert into necesitar(idReceta, idElectro) values (155, 10);
insert into tipoReceta(idReceta, tipo) values (155, 'Japanese');


insert into Receta(nombre, tiempo, proceso) values ('Ragu', 101, 'Sauté sausage crumbles in a large pan or dutch oven over medium-low heat. Add enough olive oil to gently fry the crumbles. Cook about five minutes until opaque, not browned.. Add minced onion, carrot, and celery, and parsley to the pan. Stir often and add more olive oil if pan is dry. Cook 30 minutes on very low heat until vegetables are caramelized and sausage is browned.. Add canned tomatoes and their juice. Break up tomatoes in the pan.. Bring to a simmer then add thyme and rosemary. Continue simmer uncovered for 20 minutes, until thickened.. Mix tomato paste with 1 cup of hot water. Reduce heat to very low and add mix to the pan.. Cook about 10 minutes until the sauce is dark red and glistens with oil.. Remove herb sprigs and add pepper to taste.. Meanwhile, boil large pot of salted water then cook and drain the pasta.. Serve ragù over plate of pasta and top with grated parmesan cheese;.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 691, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 692, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 693, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 694, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 102, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 695, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 696, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 697, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (156, 248, 0);
insert into tipoReceta(idReceta, tipo) values (156, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Fried Anglerfish fillet', 45, 'Preparing the fish. Cooking.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (157, 698, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (157, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (157, 699, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (157, 700, 0);
insert into tipoReceta(idReceta, tipo) values (157, 'not specified');


insert into Receta(nombre, tiempo, proceso) values ('Glühwein - mulled wine', 17, 'Cut the orange in nice looking pieces (since they are mainly decoration).. Throw everything in a pot.. Warm up (do not boil).. Enjoy..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 701, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 322, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 131, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 340, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 702, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 703, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 275, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 335, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (158, 704, 0);
insert into necesitar(idReceta, idElectro) values (158, 5);
insert into tipoReceta(idReceta, tipo) values (158, 'European');


insert into Receta(nombre, tiempo, proceso) values ('Curry Sauce', 20, 'Melt the butter in a large saucepan over medium heat.. Add in the sliced onion, sliced garlic, and ginger.. Fry for 15 min, until the onion is soft.. Add the curry powder, turmeric, vinegar, and star anise.. Fry for 1 minute.. Pour in the stock.. Simmer for 30 minutes while stirring.. Remove the star anise.. Add the cornflour and water.. Simmer for 5 minutes while stirring.. Blend the sauce. Add in some lemon juice if you want..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 372, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 260, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 705, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 335, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 51, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 706, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (159, 308, 0);
insert into necesitar(idReceta, idElectro) values (159, 3);
insert into tipoReceta(idReceta, tipo) values (159, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Almeirim Stone Soup', 195, 'In a saucepan, boil the kidney beans with the pigs ear, sausages, pork belly, onions, garlic and bay leaf in some water and add a well-washed stone. Season with the olive oil and salt and pepper to taste.. If necessary, add more water while it’s boiling.. Once the meat is cooked, take it out and reserve, then add the diced potatoes and cilantro to the pot.. Let the potatoes cook on medium to high heat for about 30-35 minutes.. Once the potatoes are well cooked, you can remove the pot from the heat, add the previously chopped meat back in and stir it well.. Pour into bowls and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 707, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 562, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 708, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 709, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 710, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 711, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (160, 712, 0);
insert into tipoReceta(idReceta, tipo) values (160, 'Portuguese');


insert into Receta(nombre, tiempo, proceso) values ('Chicharrones', 91, 'Cut pork butt to around bite sized pieces with fat attached for frying and flavor.. Add Adobo Goya and spread evenly throughout the pork.. Add Black pepper.. Add Cumin.. Add Salt.. Add Goya Naranja.. Rub all of it to spread the spices along the meat.. Have a colander to put the Chicharonnes in after having fried it and have another pot on the bottom that has some paper inside for oil.. Put it in deep dish skillet around Medium (3-4) heat cover with lid for around 30-35 mins till you see it is cooked, turning to make sure everything is cooking evenly.. After it dries up at around 30-35 mins put the temperature to High (6-7) without the lid.. Put some oil to make sure it does not stick too much.. Use spoon to spin/stir and fry until a golden brown.. Take out the Chicharonnes and put into the colander. You may keep some of the fried bits that come off to eat as well..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (161, 713, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (161, 714, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (161, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (161, 715, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (161, 716, 0);
insert into tipoReceta(idReceta, tipo) values (161, 'mexican');


insert into Receta(nombre, tiempo, proceso) values ('Easy Chicken and Rice Casserole', 5, 'In large fry pan, cook onion and celery in butter until soft.. Stir in remaining ingredients.. Bake in covered 8 cup baking dish in preheated (350F) oven for about 30 minutes or until rice is cooked..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 505, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 134, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 717, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 718, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 719, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 720, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (162, 721, 0);
insert into necesitar(idReceta, idElectro) values (162, 2);
insert into tipoReceta(idReceta, tipo) values (162, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Pan-seared Chicken Fillet', 48, 'Rinse the chicken fillets.. Remove excess moisture from the fillets by patting them with a paper towel.. If the fillets are too thick, cut them in half.. In a small container, pour enough flour and mix in paprika, garlic powder, Provence herbs, salt, and black pepper to your liking.. Add a little cooking oil to the pan and heat it up to medium-high heat.. Coat the fillets by rolling them in the wheat mix.. Once the pan is hot, put the fillets on the pan and sear each side for about 5 minutes over medium-high heat.. As a final tip, if your fillet is too thick after all, you can just lower the heat at the end and cook it for about 2-3 more minutes.. And that is it. Winner winner chicken dinner!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (163, 722, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (163, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (163, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (163, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (163, 723, 0);
insert into tipoReceta(idReceta, tipo) values (163, 'Non-specific');


insert into Receta(nombre, tiempo, proceso) values ('Spaghetti alla puttanesca', 18, 'Wash capers from salt, then cut them. Pit and crush Gaeta olives. Wash and chop the bunch of parsley. Start cooking the pasta until al dente.. Pour the oil, the peeled garlic cloves and the chopped dry chilli peppers into a large pan. Add the anchovy fillets and capers. Brown over medium heat for 5 minutes, stirring often, so the anchovies will melt. Now add peeled tomatoes sugo; mix it with a spoon and cook for another 10 minutes over medium heat. When the sauce is ready, remove the garlic cloves. Add crushed olives and chopped parsley. Drain spaghetti directly in the pan and sauté it for half a minute. The dish is ready.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 724, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 725, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 726, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 727, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 728, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 729, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (164, 33, 0);
insert into tipoReceta(idReceta, tipo) values (164, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Mushroom risotto', 5, 'Finely mince the shallot and garlic, and slice the mushrooms into large pieces.. Heat a pan with some olive oil on medium-high heat.. Saute the vegetables until fragrant, then add the mushrooms and cook until browned.. Add the rice and toast for about a minute.. Deglaze with white wine and add stock bit by bit, stirring constantly until rice is cooked.. Turn off the heat and add butter and grated cheese, stir well..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 218, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 730, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 731, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 153, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 732, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (165, 733, 0);
insert into necesitar(idReceta, idElectro) values (165, 5);
insert into tipoReceta(idReceta, tipo) values (165, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Quesadilla', 8, 'Heat a pan to medium with an (optional) thin coating of oil.. Lay a single tortilla down on the pan and arrange cheese on the edges.. Add the ingredients onto one half of the tortilla if using 1, or the entire surface if using 2.. Fold empty half of the tortilla in the pan onto itself if you are only using one tortilla.. Periodically flip the tortilla until both sides are golden brown..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (166, 734, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (166, 735, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (166, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (166, 736, 0);
insert into tipoReceta(idReceta, tipo) values (166, 'mexican');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Tomato and Spinach Curry', 60, 'Dice your onions, begin to fry in the pot at a medium-low temperature.. Dice the chicken into medium sized pieces and fry along with the onions. Flip regularly to prevent burning or overcooking.. Add your desired amount of curry powder to the frying chicken. Be cautious with the amount.. Process tomatoes and extra ingredients into a thin tomato paste and add to the curry.. Add all wanted spinach, it will shrink in the curry.. Ensure the chicken is cooked thoroughly and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 737, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 108, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 738, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 739, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 372, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 740, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (167, 741, 0);
insert into tipoReceta(idReceta, tipo) values (167, 'unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Hearty Breakfast Oatmeal', 15, 'Chop or mash nuts and fruit.. Combine nuts, fruit, and other dry ingredients in a saucepan. Add milk and cook mixture over medium heat until oats are desired tenderness (5-10 mins). Add egg and protein powder and cook for a few more minutes. Enjoy.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 742, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 743, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 130, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 744, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 745, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 746, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 747, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (168, 748, 0);
insert into necesitar(idReceta, idElectro) values (168, 5);
insert into tipoReceta(idReceta, tipo) values (168, 'n/a');


insert into Receta(nombre, tiempo, proceso) values ('Asian Style Chicken with Sticky Sauce', 69, 'Prepare the sauce by mixing the ingredients together in a bowl.. Cut the chicken into bite sized pieces.. Place all-purpose flour in a shallow bowl. Mix in garlic powder as well as salt and pepper, 1/2 tsp each.. Place lightly beaten egg in another shallow bowl.. Coat the chicken in corn flour, dip it in egg and finally coat with seasoned all-purpose flour.. Heat a good amount of oil on a pan to fry the chicken in. The oil should be hot enough so that the chicken sizzles when placed in the pan. You may want to do this in a couple of batches depending on the size of your pan.. Fry until chicken is cooked and has a nice golden-brownish coating.. Pour out excess oil, put the sauce in and mix to coat the chicken. Or place the chicken in a bowl with kitchen towels and do another batch.. Let the sauce bubble for one or two minutes and you are done.. Serve with boiled rice..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 737, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 706, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 285, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 423, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 211, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 749, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 397, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (169, 64, 0);
insert into tipoReceta(idReceta, tipo) values (169, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Basic Meatballs', 62, 'Preheat oven to 200°C/400F. In a bowl, combine all ingredients. Hand form into balls by packing with your hands and then rolling. Set aside on a baking sheet, preferably one with a cooling rack. Either halfway through the packing process or after forming all meatballs, heat a large skillet to medium-high heat. Add 1-2 tbsp of oil to the skillet (enough to evenly coat the skillet), and bring to heat. Fill the skillet with meatballs, start by browning one face, flip once at after 2-3 minutes, and then remove to the baking sheet after another 2-3 minute. Continue in batches until all meatballs have been browned. Transfer to the oven, and cook until the inside registers 60°C/140F on an instant read thermometer. This should be about 20 minutes for large meatballs (16 per batch), maybe 10 for small (48 per batch).');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 750, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 751, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 613, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 752, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 318, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 753, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 754, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 170, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 331, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (170, 75, 0);
insert into necesitar(idReceta, idElectro) values (170, 2);
insert into tipoReceta(idReceta, tipo) values (170, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Soup', 30, 'Cook chicken breasts, shred, and set aside in a bowl.. Cut up carrots and celery, place in pot and saute.. Add in chicken and stock or broth and mix together well. Season with salt, pepper, hot sauce, whatever you desire. Allow it to simmer on low heat for 2 hours mixing every so often.. If adding noodles, add in pasta and allow pasta to cook until al dente..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 94, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 755, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 756, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (171, 205, 0);
insert into necesitar(idReceta, idElectro) values (171, 5);
insert into tipoReceta(idReceta, tipo) values (171, 'varied');


insert into Receta(nombre, tiempo, proceso) values ('Salsa Verde', 23, 'Place tomatillos, garlic, and chilies in a medium saucepan and cover with water. Simmer until tomatillos turn pale green, about 10 minutes.. Transfer tomatillos, garlic, and chilies into a blender or food processor. Add the onion and cilantro. Puree until smooth, then salt to taste, usually a teaspoon will suffice.. Heat oil in a medium saucepan until hot but not smoking. Pour puree into the pan and cook, stirring occasionally, until thickened somewhat, about 6-8 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 757, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 758, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (172, 405, 0);
insert into necesitar(idReceta, idElectro) values (172, 3);
insert into tipoReceta(idReceta, tipo) values (172, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Cheese', 120, '.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 62, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 759, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 760, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (173, 442, 0);
insert into tipoReceta(idReceta, tipo) values (173, 'varied');


insert into Receta(nombre, tiempo, proceso) values ('Tahini short bread', 90, 'Thoroughly mix the egg, sugar and Tahini. Warm the butter so it is pommade. Have a good mixing of the butter and the preparation so it gets a bit airy.. Add the flour slowly so the preparation stays homogenous.. Add the baking powder. Let the dough sit and then cook it as described in butter-based biscuits recipe. Enjoy with tea.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 761, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 762, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (174, 763, 0);
insert into necesitar(idReceta, idElectro) values (174, 4);
insert into necesitar(idReceta, idElectro) values (174, 5);
insert into necesitar(idReceta, idElectro) values (174, 2);
insert into tipoReceta(idReceta, tipo) values (174, 'various');


insert into Receta(nombre, tiempo, proceso) values ('Sopa de Lentejas', 5, 'Heat olive oil in a large pot over medium heat.. Add the onion, carrot, and bell pepper; cook and stir until vegetables begin to soften, about 5 minutes.. Stir in the garlic, tomatoes, chorizo and bay leaf; cook about 4 minutes.. Add lentils and water (water should be about an inch deeper than the level of the lentils).. Bring to a boil over high heat. Reduce heat to low; simmer, uncovered, until lentils are just cooked, 15 to 20 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 232, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 764, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 765, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 766, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 248, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (175, 767, 0);
insert into tipoReceta(idReceta, tipo) values (175, 'Spanish');


insert into Receta(nombre, tiempo, proceso) values ('Simple sauce', 0, 'Mix one part tomato sauce with two parts mayonnaise. What part means is up to you, because that will determine how much sauce you will have. You can also adjust this to your liking. More tomato sauce, more acidity. More mayonnaise, more sweetness.. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (176, 49, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (176, 98, 0);
insert into tipoReceta(idReceta, tipo) values (176, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Ricotta lasagna filling', 10, 'Mix the ricotta cheese together with a handful of finely grated parmesan.. Add the oregano and the egg and mix.. Add salt and pepper to taste..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (177, 768, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (177, 655, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (177, 500, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (177, 169, 0);
insert into tipoReceta(idReceta, tipo) values (177, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Tajine Maadnous', 95, 'Mix the spices together and set aside.. Saute the onions in olive oil until tender.. Toss chicken with half of the spice mix and brown.. Add the potatoes and water to the pan. Bring to a simmer, then cook until potatoes are tender and most liquid has evaporated.. Stir chopped parsley into the cooked mixture and set aside to cool.. Preheat oven to 350°F (180°C), and grease a baking pan with olive oil.. Whisk eggs, mix in cheese, chicken, potato, parsley mixture, and remaining spice. Pour into baking dish.. Bake for 30-35 minutes, or until set in the center..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 94, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 769, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 195, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (178, 770, 0);
insert into necesitar(idReceta, idElectro) values (178, 10);
insert into necesitar(idReceta, idElectro) values (178, 2);
insert into tipoReceta(idReceta, tipo) values (178, 'Tunisian');


insert into Receta(nombre, tiempo, proceso) values ('Pizza Dough', 50, 'Combine all the ingredients in a bowl and knead into a dough.. Let it rest for about 30 minutes somewhere lukewarm. Add some flour to a table and roll the dough out there..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 771, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 772, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (179, 191, 0);
insert into tipoReceta(idReceta, tipo) values (179, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Apple Chicken', 107, 'Heat the oven to 200C and prepare an oven tray.. Mix the chicken with nuez moscada, salt and pepper.. Remove the center of the apples, fill with nuez moscada and butter.. Put the chicken in the oven tray.. Put the chicken, onions and apple in the oven tray.. Add salt and pepper.. Cook in the oven for 40 min.. While the chicken is the oven prepare mushed potatoes. First you boil them until they are soft (keep the skin on). Once they are soft, peel them. Then mush them with a fork and add milk or creme fraiche.. Add the wine or the cognac. Cook until the chicken is well cooked..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 737, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 773, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 533, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 774, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (180, 775, 0);
insert into necesitar(idReceta, idElectro) values (180, 2);
insert into tipoReceta(idReceta, tipo) values (180, 'Spanish');


insert into Receta(nombre, tiempo, proceso) values ('Wholemeal Wheat Flour Pizza Dough', 0, 'Combine all the ingredients in a bowl and knead into a dough.. Let it rest for ~60 minutes somewhere lukewarm..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (181, 776, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (181, 771, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (181, 772, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (181, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (181, 33, 0);
insert into tipoReceta(idReceta, tipo) values (181, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Chicken Tikka Masala', 25, 'In a 5-qt. slow cooker, combine the first 13 ingredients. Add chicken, jalapeno and bay leaf.. Remove jalapeno and bay leaf. In a small bowl, mix cornstarch and cream until smooth; gradually stir into sauce.. Cook, covered, on high 15-20 minutes or until sauce is thickened. Serve with rice. If desired, sprinkle with cilantro..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 596, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 97, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 777, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 259, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 600, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 228, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 534, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 465, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 778, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 336, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 525, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 779, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 780, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (182, 781, 0);
insert into tipoReceta(idReceta, tipo) values (182, 'Indian');


insert into Receta(nombre, tiempo, proceso) values ('Tuscan Style Pork Roast', 178, 'Preheat oven to 275°F (135°C). Butterfly the roast. Cover with plastic wrap and beat with meat mallet. Mince garlic and rosemary. Place into cold pan with olive oil and zest of lemon.. Bring to slow simmer, strain herbs. Add pancetta to food processor, process with garlic/rosemary until paste forms. Salt and pepper both sides, spread paste, and roll tightly.. Bake at 275°F (135°C) for 2 hours. Brown all sides in cast iron skillet and lemon. Juice the lemon into remaining oil, whisk with fork.. Slice roast and top with lemon herb vinaigrette..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 782, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 696, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 244, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 783, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (183, 102, 0);
insert into necesitar(idReceta, idElectro) values (183, 5);
insert into necesitar(idReceta, idElectro) values (183, 2);
insert into tipoReceta(idReceta, tipo) values (183, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Swedish Pancakes', 10, 'At medium/low heat begin melting the butter, and continue with beating eggs in large bowl, add salt, sugar, milk, flour and mix.. Add melted butter while stirring batter.. Use about 1/2 cup batter on griddle and tilt until spread evenly over griddle surface.. When edges of pancake start to firm-up use spatula and free up the outside inch or two to achieve a clean removal for flipping later.. First side will take about a minute or more the second side will take half that time. Pick up at middle of pancake with spatula then place on plate and fold over. The pancake will then be four layers thick 10 x 2 inches long. Serve with syrup on top or anything you choose, my wife likes peanut butter and I prefer to spread a little butter on it before adding syrup. Maybe you prefer adding fruits of your choice..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (184, 11, 0);
insert into tipoReceta(idReceta, tipo) values (184, 'swedish');


insert into Receta(nombre, tiempo, proceso) values ('Pilaf', 258, 'Put the cooking oil in a cauldron and heat it until the oil is boiling, add a head of onion until it is black, then throw it out.. Throw coarsely chopped meat into the cauldron and let it boil until it is golden brown, then add a pinch of salt.. Add the chopped onions, then wait 2 minutes and add the sliced carrots, boil for another 2 minutes.. Add 500 ml of water diluted with tomato paste, boil for 5 minutes.. Rinse the rice and put it into the cauldron but do not mix.. Add another 500 ml of water diluted with tomato paste and wait until it is boiling.. Reduce the heat to minimum, then add two table spoons of salt.. Close the cauldron and leave it on low heat for 1.5-2 hours.. 1 hour before it is ready(or when you can not see water above the rice), add the garlic.. You can now turn over the rice if it is undercooked and add some raisins.. Keep boiling until all water is evaporated..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 280, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 784, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 785, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 131, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (185, 786, 0);
insert into tipoReceta(idReceta, tipo) values (185, 'Central Asian/Middle Eastern');


insert into Receta(nombre, tiempo, proceso) values ('Stoofvlees', 30, 'Peel the onions and cut them into medium-sized pieces.. Place a large saucepan or dutch oven on low heat and melt butter. Cook onions until translucent.. Melt another spoon of butter in a large frying pan and sear beef.. Sear beef in separate batches to prevent overcrowding, season with salt and pepper.. Add seared beef to the pot with onions.. Use beer to deglaze the frying pan and add to the pot.. Add bayleaf, thyme, clove, and optionally syrup to the pot.. Spread mustard on both sides of a slice of bread and place it in the sauce.. Let it simmer on low heat, stirring every 10-15 minutes until desired thickness.. Cook until meat is tender and easily cut with a fork.. Finish the sauce by stirring in vinegar and serve..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 592, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 273, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 41, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 787, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 788, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 442, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 684, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (186, 184, 0);
insert into tipoReceta(idReceta, tipo) values (186, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Chilli con Carne', 5, 'As pan heats: Slice chilies and chorizo as desired. Olive oil in pan, heat on high. Pork mince in.. Butter add. Bacon add. Add 3/4 of tomato sauce. Add chilies and chorizo. Add spices and beans. Then wait until audible spitting of sauce has lasted for around 40 min. Add remainder of sauce. Add wine. Lower flame, cover pan, then maintain a gentle simmer for 20-40 min.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 789, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 790, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 791, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 49, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 792, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 562, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 793, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (187, 794, 0);
insert into tipoReceta(idReceta, tipo) values (187, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Fresh Guacamole', 27, 'Cut the avocados in half, open them and place the pulp in a bowl.. Mash the avocados, add lime juice, mix and mash some more.. Mince the cilantro, tomato and onion and add them to the avocado mix.. Add salt and black pepper to taste and mix thoroughly.. Enjoy fresh with some totopos!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 795, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 796, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 797, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 66, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (188, 798, 0);
insert into tipoReceta(idReceta, tipo) values (188, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Beef Jerky', 1950, 'Mince or press garlic.. Mix all ingredients except beef to make brine.. Slice beef into ¼'' (½ cm) thick strips. Small chunks, about ¾'' (2 cm), of stewing beef may also be used. If possible, cut along the grain of the meat rather than across it.. Marinate meat in overnight, or at least for an hour or two.. Place meat on racks and dry in a food dehydrator at 145 °F (63 °C) for 6-8 hours. May be dried in a 150 °F (65 °C) oven with foil-covered racks. In oven, turn meat over 3-4 hours into drying time and reduce temperature to 130 °F (55 °C).. Meat should bend but not break when properly dried..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 799, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 227, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 266, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (189, 800, 0);
insert into tipoReceta(idReceta, tipo) values (189, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Eggs', 0, '.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (190, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (190, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (190, 195, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (190, 34, 0);
insert into tipoReceta(idReceta, tipo) values (190, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Risengrod', 5, 'Bring water and rice to a boil in a deep pot. Boil the rice at steady heat and with active stirring for approximately 2 minutes.. Add milk and bring the concoction to a boil. Boil the pot at low heat, still with active stirring for approximately 10 minutes.. Put on lid and boil for approximately 30 minutes. Stir the pot often. If the porridge seems too thin, boil it for another 5-10 minutes.. Add salt.. Mix sugar and cinnamon to form cinnamon sugar in a bowl or container.. Serve warm with cinnamon sugar on top and a bit of butter in the middle.. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 801, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 6, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (191, 11, 0);
insert into tipoReceta(idReceta, tipo) values (191, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('French Onion Soup', 30, 'Sweat the onions in a covered Dutch oven over med-low heat, salt them, with 1 whole stick of butter and some olive oil for about 2 hours stirring occasionally but increasing in frequency as the heat gets raised over time.. When the onions are soft and mostly shrunken down, and mostly covered by the butter, oil, and onion juice, strain and collect the juice in a bowl. Brush the onion juice over each side of slices of baguette bread.. Return the strained onions to med-high heat, uncovered, stirring and deglazing with chicken broth frequently but not so frequent that they turn to mush. When the entire can of chicken broth has been added for deglazing, add 3 finely chopped garlic cloves, 1/4 cup brown sugar, balsamic vinegar, Worcestershire sauce, soy sauce. Wait until the pot dries and a fond is formed in between adding each liquid ingredient slowly. Keep slowly deglazing with the wooden spoon and caramelizing those onions.. After onions are thoroughly caramelized and there are no more liquid ingredients to add, pour in 64oz beef broth and 2-3 Bay leaves. Cover on medium heat until it simmers. It is now ready to serve!. Put sliced (and onion-juice brushed) bread in 400F oven until toasted, then under the broiler covered in cheese until melted. Soup can be served poured over the bread slices or the bread floating on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 802, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 803, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 804, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (192, 805, 0);
insert into necesitar(idReceta, idElectro) values (192, 2);
insert into tipoReceta(idReceta, tipo) values (192, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Savory Squash', 70, 'Peel Butternut squash and discard both ends.... Place face down on greased baking sheet.... Cut up into 2 inch chunks and toss into stand mixer.... Pour into casserole dish.... Garnish with chopped chives on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (193, 806, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (193, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (193, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (193, 807, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (193, 808, 0);
insert into necesitar(idReceta, idElectro) values (193, 2);
insert into necesitar(idReceta, idElectro) values (193, 6);
insert into tipoReceta(idReceta, tipo) values (193, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Tunisian Couscous', 201, 'Add ½ cup (120ml) of oil into a large pan. Fry the onion over medium heat for 2 minutes.. Add the garlic, tomato paste and harissa and continue frying for 2 minutes.. Add the caraway, coriander, and chili powder. Mix and continue cooking for another 2 minutes.. Add the lamb meat and mix well so that the pieces are covered with the sauce. Cook for 5 minutes stirring regularly.. Cover with water. Add the turnips and carrots, and cook on low/medium heat for 45 minutes.. Meanwhile, prepare the couscous semolina as indicated on the package, with boiling water, salt, and oil.. After 45 minutes, add the zucchini, potatoes and chickpeas.. Cook for at least another 30 to 40 minutes over low to medium heat. Monitor the cooking of the vegetables. If some vegetables are cooked before the meat, remove them from the pan and place them on a serving platter. Proceed in the same way with all the vegetables to prevent them from cooking too much.. 10 minutes before the end of cooking, get a few ladles of broth (one at a time) and wet the couscous semolina. Mix the semolina well after each ladle until it gets moistened enough.. Arrange the semolina in a tajine pot. Decorate the dish with the vegetables and the meat all around. Garnish with fried green hot peppers (optional)..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 809, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 810, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 811, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 812, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 261, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 370, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 813, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 363, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 814, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 815, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 621, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (194, 32, 0);
insert into tipoReceta(idReceta, tipo) values (194, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Cannellini Bean Salad', 5, 'Sauté garlic and onions in olive oil until onions are translucent.. Add diced tomatoes, seasonings, and salt and pepper to taste. Simmer for 3 minutes.. Add the beans, season to taste, mix until combined, and simmer for an additional 2 minutes.. Serve over arugula and top with bits of prosciutto..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 307, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 312, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 144, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 600, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 16, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 816, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 817, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (195, 818, 0);
insert into necesitar(idReceta, idElectro) values (195, 5);
insert into tipoReceta(idReceta, tipo) values (195, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Pepper Sauce', 22, 'Ground the peppers and put them on the pan and roast them for about one minute while moving the peppers with your spatula.. Mix in the mustard and bouillon and bring to a boil.. Add in the cream and let the sauce thicken on medium heat for about 10-20 minutes.. Taste the sauce and add salt if needed..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (196, 819, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (196, 200, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (196, 13, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (196, 206, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (196, 33, 0);
insert into tipoReceta(idReceta, tipo) values (196, '');


insert into Receta(nombre, tiempo, proceso) values ('Egg Roll in a Bowl', 25, 'Grate or mince ginger finely. Process with the garlic cloves by grinding with salt under the edge of a knife. Finely mince the onion. **Optional** Marinade the ground turkey in 2 Tbsp of soy sauce and 1 tsp baking soda for 15 minutes to improve browning.. In a hot wok or skillet add a few tablespoons of cooking oil, preferably peanut, and a tsp of sesame oil. Add the ground turkey and cook until no longer raw seasoning with soy sauce.. Add the onion and cook until translucent and the meat is nicely browned. Add in the garlic and ginger mixture and cook for approximately 1 minute or until fragrant ensuring not to burn the garlic.. Add in the coleslaw mix and season with more soy sauce. Cook until the cabbage is just softened. Add 1/4 cup of hoisin sauce and stir to combine. Check seasoning and add salt to taste. Serve in a bowl with sweet chili sauce and green onions..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 820, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 821, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 822, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 823, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 824, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (197, 211, 0);
insert into tipoReceta(idReceta, tipo) values (197, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Aussie Snags', 47, 'Chop up the onions into rings. Bring the sausages to the grill, turning once every 5 mins. Add oil of your choice to the hotplate then add the onions. Use your tongs to toss the onions until they are golden brown. When the onions are golden brown turn off the hotplate. When the sausages are cooked, butter the bread, then the onions, and add a sausage (optionally split). Finally tomato sauce on top.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 825, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 49, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 826, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (198, 827, 0);
insert into necesitar(idReceta, idElectro) values (198, 11);
insert into tipoReceta(idReceta, tipo) values (198, 'Australian');


insert into Receta(nombre, tiempo, proceso) values ('Hamburger Patties', 30, 'Combine all ingredients except fat: mix well; shape into 6 patties.. Heat fat in skillet.. Brown patties on all sides; lower heat; cook to desired degree of doneness..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 828, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 39, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 52, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (199, 829, 0);
insert into tipoReceta(idReceta, tipo) values (199, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Collard Greens with Smoked Duck and Parsnips', 0, 'In a large dutch oven (or a big pot with a lid) on low heat, add the chopped duck breast and olive oil and/or butter to the pot for a couple of minutes. Then add the spices, and cook for a minute or two before adding the sliced onion. Let cook for 5 minutes and then add the parsnip and sweat.. Add the ribboned cabbage and collard greens, a few twists of freshly ground pepper, and two tablespoons of water to the pot and cover. Cook until the greens are wilted and tender to the bite..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 830, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 764, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 831, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 832, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 479, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 833, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 261, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (200, 259, 0);
insert into tipoReceta(idReceta, tipo) values (200, 'Ethiopian inspired');


insert into Receta(nombre, tiempo, proceso) values ('Turkish Red Lentil Soup', 10, 'Reserve half the paprika and red pepper flakes, set aside.. Pick through lentils for any foreign debris, rinse two or three times, drain and set aside.. In a large pot over medium-high heat, saute 2 Tbsp of the olive oil and onion with a pinch of salt for 3 minutes. Add the carrots and saute for another 3 minutes.. Add the tomato paste and stir it around for 1 minute. Add cumin, mint, thyme, and the paprika/pepper flakes not reserved - and saute for 10 seconds to bloom the spices. Immediately add the lentils, water, broth, and salt. Bring the soup to a boil.. Once boiling, reduce heat to a medium, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are fully softened.. Meanwhile, heat the remaining olive oil in a small sauce pan over medium heat, and swirl in the reserved paprika and red pepper flakes. The moment you see the paprika start to bubble, remove the pan from the heat.. Blend the soup to reach the desired consistency. Taste for seasoning.. Divide soup into bowls and drizzle the paprika oil on top of each serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 834, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 753, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 835, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 836, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 837, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (201, 230, 0);
insert into necesitar(idReceta, idElectro) values (201, 5);
insert into necesitar(idReceta, idElectro) values (201, 3);
insert into tipoReceta(idReceta, tipo) values (201, 'Turkish');


insert into Receta(nombre, tiempo, proceso) values ('Pancake', 35, 'Mix all ingredients in a bowl.. Let the dough rest for ~15 mins.. Heat a pan with a bit butter or oil.. For each pancake spread a ladle of dough in the pan and bake them at lower medium temperature until they are brown on both sides..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 201, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (202, 33, 0);
insert into tipoReceta(idReceta, tipo) values (202, 'varied');


insert into Receta(nombre, tiempo, proceso) values ('Erwtensoep', 15, 'In a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil.. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top.. Remove the pork chop, debone, and thinly slice the meat. Set aside.. Add the celery, carrots, potato, onion, leek, and celeriac to the soup.. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes. Add the smoked sausage for the last 15 minutes of cooking time.. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly, and set aside.. If you prefer a smooth consistency, purée the soup with a stick blender.. Season to taste with salt and pepper.. Add the meat back to the soup, setting some slices of sausage aside.. Serve in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 838, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 711, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 839, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 840, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 841, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 769, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 168, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 842, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 843, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (203, 75, 0);
insert into tipoReceta(idReceta, tipo) values (203, 'Dutch');


insert into Receta(nombre, tiempo, proceso) values ('Coconut Oil Coffee', 5, 'Blend coffee, coconut oil, and butter together in a blender until oil and butter are melted and coffee is frothy..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (204, 844, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (204, 502, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (204, 36, 0);
insert into necesitar(idReceta, idElectro) values (204, 3);
insert into tipoReceta(idReceta, tipo) values (204, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Garlic Toast', 5, 'Preheat oven to 180°C (350°F).. Place sliced bread on a baking tray lined with aluminium foil.. Generously coat bread slices with garlic-infused olive oil.. Season with garlic salt, to taste.. Bake for 10-15 minutes or until crunchy throughout.. Serve with cheese, charcuterie, pickles, dips, or to accommodate a soup..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (205, 845, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (205, 846, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (205, 847, 0);
insert into necesitar(idReceta, idElectro) values (205, 2);
insert into tipoReceta(idReceta, tipo) values (205, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Autumn Soup', 80, 'Peel and chop squash, potatoes, carrots, and onion, add to oven-safe pot.. Add bullion and enough water to avoid burning (1 cup), place pot in oven (350F) to bake until veggies are soft.. If there is too much stock, do not be scared to pour some down the drain.. Puree (I use electric beaters) while adding the milk.. Add the salt and pepper, as desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 848, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 822, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 849, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (206, 32, 0);
insert into necesitar(idReceta, idElectro) values (206, 2);
insert into tipoReceta(idReceta, tipo) values (206, 'non-specific');


insert into Receta(nombre, tiempo, proceso) values ('Parmesan potatoes', 34, 'Cut the potatoes into small cubes.. Add some butter to a frying pan and heat up.. Add potatoes to frying pan, salt them and fry over medium heat for about 20 minutes moving the potatoes from time to time.. About 3-5 minutes before removing the potatoes from the heat, add some rosemary leaves a stir the potatoes.. Remove potatoes from pan, serve and add shredded Parmesan and some freshly ground pepper on top.. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (207, 850, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (207, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (207, 500, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (207, 170, 0);
insert into tipoReceta(idReceta, tipo) values (207, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Turkish-Style Spiced Chicken', 10, 'Cut sweet potatoes into 1/2 inch pieces. Combine and toss sweet potatoes, half the onions, half the garlic salt, and a tablespoon of oil. Lay to a baking sheet and roast on the middle rack of the oven, stirring halfway through until golden brown (12-22 mins).. While sweet potatoes roast, heat a medium pot over medium-high heat. When hot, add a tablespoon of oil and remaining onions. Cook, stirring often until fragrant (1 min). Add chicken broth and rice, cover, and bring to a boil over high heat. Once boiling, reduce heat to low and leave covered until rice is tender and liquid is absorbed (12-14 mins). Remove pot from heat, still covered.. While rice cooks, heat a large non-stick pan over medium heat. When hot, add almonds to the dry pan. Toast, stirring occasionally until golden brown (2-3 mins). When almonds are done, transfer to a plate and set aside.. While almonds toast, pat chicken dry with paper towel. Sprinkle with Turkish Spice blend and the remaining garlic salt. Season with pepper. With the pan used in the last step, increase heat to medium-high. Add a tablespoon of oil and the chicken. Pan-fry until golden brown (1-2 min per side). Transfer chicken to another baking sheet. Roast on the top rack of the oven until chicken is cooked through (10-12 mins).. While chicken roasts, zest and juice half the lemon. Cut remaining lemon into wedges. Roughly chop parsley. Add yogurt, half the parsley, sugar, lemon zest and juice to a small bowl. Season with salt and pepper, and whisk to combine.. Fluff rice with a fork, then stir in almonds and remaining parsley. Slice chicken. Divide rice between plates, then top with sweet potatoes and chicken. Spoon yogurt sauce over top. Squeeze over a lemon wedge, as desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 94, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 851, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 852, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 346, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 853, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 586, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 678, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 244, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 847, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 91, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (208, 191, 0);
insert into necesitar(idReceta, idElectro) values (208, 2);
insert into tipoReceta(idReceta, tipo) values (208, 'Turkish');


insert into Receta(nombre, tiempo, proceso) values ('Paneer Tikka Masala', 122, 'Take a glass container, and mix the cubed paneers with half a tea spoon of red chilli powder, turmeric powder, coriander powder, garam masala powder, fenugreek powder, and 50g yogurt.. Let the mix marinade for at least an hour. paneer tikka masala. Preheat the oven to 200°C (392°F), and place the marinated paneer cubes, with onion, capsicum, and tomato on the skewers. Let them grill in the oven using skewer support, by continuously flipping them every 5 minutes until the outer crust looks crispy enough.. Start heating some oil in a pan to add some cardamom and cumin seeds. Let it heat until the flavour is transfused for about a minute or two.. Now add chopped onions and tomatoes to the sautee. Add some shaved ginger and garlic paste and let it sauté until some raw flavour disappears.. Add the tomato purée, dry fenugreek leaves, and let it cook for about 15 minutes.. As the spice and tomato purée looks cooked, add some water to the mixture and let it cook more. paneer tikka masala. Now add the grilled paneer, some chopped vegetables of choice, corn and stir the mixture well.. One the added water seems to be evaporated, and the mixture looks a little thicker, turn off the heat and garnish with lemon juice, fresh coriander. (It can be served with bread of any preference.).');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 265, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 854, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 596, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 855, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 484, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 856, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 857, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 858, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 859, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 860, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 633, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 861, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 862, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 863, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (209, 522, 0);
insert into necesitar(idReceta, idElectro) values (209, 2);
insert into tipoReceta(idReceta, tipo) values (209, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Mapo Tofu', 39, 'Marinade the pork in shaoxing cooking wine, a splash of cooking oil, the soy sauce. Add cooking oil to a wok and sear the ground pork until browned, chopping it up as it cooks. Add the doubanjiang and let it simmer for about a minute. Add the minced aromatics (ginger, garlic) scallion whites, and dou-chi and cook until fragrant. Add the stock and a splash of soy sauce, turn up the gas and bring to a boil. Add the tofu, lower the gas, and braise for around 15 mins. you will know it is done when the tofu shows their trademark pockmarks and the seasoning sticks to them. Mix in the crushed Sichuan peppercorns and green parts of the scallions right before serving. Serve over steamed rice.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 750, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 64, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 864, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 525, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 865, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 866, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 867, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 868, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 78, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 215, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 869, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 870, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (210, 871, 0);
insert into tipoReceta(idReceta, tipo) values (210, 'Chinese');


insert into Receta(nombre, tiempo, proceso) values ('Matcha Cookies', 84, 'Melt butter in a bath or microwave.. Add white sugar, brown sugar and salt and mix with a whisk. Add egg and vanilla extract and mix with a whisk until well mixed.. Add flour, matcha powder and baking soda and mix with a whisk until you can hardly see the powder.. Add white coverture chocolate and macadamia and mix evenly with spatula.. Allow 30 minutes to 1 hour in the refrigerator until the dough hardens.. Pan with a 5cm diameter cookie and bake at 170°C (338°F) for 9 minutes. (Unox convection oven).');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 36, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 872, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 272, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 873, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 874, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 631, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 875, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (211, 876, 0);
insert into necesitar(idReceta, idElectro) values (211, 4);
insert into necesitar(idReceta, idElectro) values (211, 2);
insert into necesitar(idReceta, idElectro) values (211, 1);
insert into tipoReceta(idReceta, tipo) values (211, 'Japanese');


insert into Receta(nombre, tiempo, proceso) values ('Frijol con puerco', 10, 'In a large pot, put the black beans and 6 liters of water.. Bring to a boil over medium heat and cook, with the lid half-open, for 45 minutes.. Add the pork, onion, epazote or cilantro, and salt. Stir well. Cook for another hour and a half, with the pot partially covered, until the pork is cooked and tender.. Make sure the broth does not dry out. You can add about 4 extra cups of boiling water after adding the pork.. Put out the fire. Make sure the seasoning is OK.. Serve the beans with pork with the radishes, cilantro, avocado, lemons, chiltomate sauce, and habaneros.. Enjoy with some authentic Mexican tortillas..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 618, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 877, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 136, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 878, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 879, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 100, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 880, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 152, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 881, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (212, 882, 0);
insert into necesitar(idReceta, idElectro) values (212, 5);
insert into tipoReceta(idReceta, tipo) values (212, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Tortellini', 28, 'Buy tortellini (prefer meat or spinach).. Bring water to a boil.. Add salt to water only after boiling.. Add tortellini in.. Cook for 3 minutes.. Drain water from the pot while keeping tortellini in.. Add cooking cream and mix at medium heat until reduced a bit so it is more creamy.. Turn off the heat and add 1 or 2 eggs.. Mix in and let eggs cook using heat from the pot and tortellini.. Serve on a plate. Add pepper, more salt if needed, and optionally, shredded cheese on top for extra creaminess..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (213, 883, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (213, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (213, 884, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (213, 195, 0);
insert into necesitar(idReceta, idElectro) values (213, 5);
insert into tipoReceta(idReceta, tipo) values (213, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Tiroler Grostl', 15, 'Clean potatoes and boil with skin.. Chop onion, squeeze and mince the garlic.. Dice pork and bacon.. Slice cooked potatoes in thick wedges.. Fry potato wedges in butter, add more butter while stirring.. Add pork and bacon and bake until crispy.. Add and stir the rest of the ingredients, except eggs.. Fry the eggs separately and serve on top..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 441, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 452, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 885, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 121, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 700, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (214, 440, 0);
insert into tipoReceta(idReceta, tipo) values (214, 'Austrian');


insert into Receta(nombre, tiempo, proceso) values ('Bitoque - Portuguese Steak with Beer Sauce', 50, 'Season the steaks with sliced garlic and salt.. Fry the steaks in olive oil, season with salt, and set aside.. Add butter or margarine to the sauce, then milk, and let it simmer.. Add beer, mustard, and flour dissolved in water or milk. Stir until thick.. Return the steaks to the skillet for a few minutes.. Fry the eggs, season, and set aside.. Serve the steaks with sauce and egg, alongside French fries, white rice, and salad..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 886, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 887, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 664, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (215, 38, 0);
insert into tipoReceta(idReceta, tipo) values (215, 'Portuguese');


insert into Receta(nombre, tiempo, proceso) values ('Rosti', 76, 'Shred raw or cooked (but cool) potatoes with a grater.. Dice the first onion and mix together with potatoes.. Heat up some butter in a large pan. Add your mix to the pan on high heat.. Reduce heat to medium-high. Form the Rösti into a round cack.. Add some more butter flakes around the inside of the pan.. Check after roughly 5-10 minutes for browning.. Dice the other onion and the carrots. Steam everything in a pan.. Alternatively you can use fresh or creamed spinach.. Flip the Rösti and set the heat to medium-low.. Remove from pan and fry two eggs.. Top Rösti with eggs and serve with the peas or spinach..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 888, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (216, 11, 0);
insert into tipoReceta(idReceta, tipo) values (216, 'Swiss');


insert into Receta(nombre, tiempo, proceso) values ('Lebanese Lentil Soup', 51, 'In a large pot, add lentils and water and place on medium heat to boil.. In a pan, sauté onions until pink, about 5 minutes. Add chopped Swiss chard and sauté together until chard is wilted, 2-3 minutes.. After lentils have cooked about 8 minutes, add onion chard mixture, along with diced potatoes and zucchini to the boiling water.. Add salt and pepper to taste.. Reduce heat to medium-low, cover the pot, and cook until the potatoes and lentils are completely cooked, about 12 minutes.. Add the chopped cilantro. Stir and cook for about 5 minutes.. Add lemon juice and cumin before serving..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 834, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 889, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 890, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 891, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 892, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 893, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (217, 440, 0);
insert into tipoReceta(idReceta, tipo) values (217, 'lebanese');


insert into Receta(nombre, tiempo, proceso) values ('Broccoli with Ginger and Garlic Sauce', 5, 'Cut broccoli into little florettes.. Fill your pan or wok with water and bring to a rapid boil.. Steam broccoli with lid on for approx. 3 minutes.. Drain broccoli and wipe pan dry.. Saute garlic and ginger with one teaspoon of oil.. Deglaze with sherry, add water or chicken stock. Reduce on medium-high heat.. Stir in soy sauce, brown sugar, and lemon juice to taste.. Thicken sauce with corn starch.. Saute broccoli shortly..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (218, 113, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (218, 312, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (218, 894, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (218, 895, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (218, 64, 0);
insert into tipoReceta(idReceta, tipo) values (218, 'Asian');


insert into Receta(nombre, tiempo, proceso) values ('Garlic Butter Seafood Pasta', 37, 'Prepare your pasta, al dente recommended.. Defrost/Deshell your seafood of choice.. Chop a half tablespoon of garlic into small pieces.. Saute your chopped garlic in salt and butter.. Add and saute the seafood. Season with oregano, red pepper flakes, and salt.. Add heavy cream and white wine to the pan. Cook until desired consistency.. Drain your pasta and combine with sauce..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 896, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 225, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 169, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 153, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 897, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 753, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (219, 898, 0);
insert into tipoReceta(idReceta, tipo) values (219, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Tuhu', 100, 'Add oil/fat to a large pot and set over high heat. Sear lamb until lightly browned.. Add onions and cook for 5 minutes. Add beetroots and let cook for 5 minutes.. Add salt, water, beer, arugula, cilantro, shallot, and cumin. Bring to a boil.. Mix garlic with leek and Egyptian leek, and add the mixture to the pot.. Lower heat to medium and let simmer for 60 minutes, or until the beetroot and meat are cooked to your liking.. Once the tuhu has finished cooking, serve in a bowl. Sprinkle with coriander seeds. Garnish with chopped cilantro and chopped Egyptian leek..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 899, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 900, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 901, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 902, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 764, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 818, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 405, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 861, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 903, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 168, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 904, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 905, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (220, 906, 0);
insert into tipoReceta(idReceta, tipo) values (220, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Quarkballchen Fried curd balls', 42, 'Mix ingredients (quark, eggs, sugar, flour, baking powder) in one bowl.. Pour the sunflower oil into a cooking pot and heat up the hotplate. Form balls from the dough and put them into the cooking pot. Once they are brown-ish, put them onto a plate. (Optional) add icing sugar. Enjoy!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 907, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 908, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 647, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 909, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (221, 910, 0);
insert into tipoReceta(idReceta, tipo) values (221, 'German');


insert into Receta(nombre, tiempo, proceso) values ('Puff Pastry', 90, 'Place the butter between two pieces of plastic wrap, pound into a flat disc, refrigerate until firm.. Mix the flour and salt, gradually stir in water, let the dough sit.. Roll out the dough, place the butter in center, fold and roll. Refrigerate.. Repeat rolling and folding two more times, then refrigerate again until firm.. Repeat rolling and folding, refrigerate, then roll out thin and bake..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (222, 666, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (222, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (222, 230, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (222, 36, 0);
insert into necesitar(idReceta, idElectro) values (222, 2);
insert into necesitar(idReceta, idElectro) values (222, 1);
insert into tipoReceta(idReceta, tipo) values (222, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Based Cooking', 25, 'Step 1 description. Step 2 description.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (223, 911, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (223, 912, 0);
insert into necesitar(idReceta, idElectro) values (223, 2);
insert into tipoReceta(idReceta, tipo) values (223, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Country Breakfast Skillet', 71, 'Cut the bacon into pieces and fry it on a pan.. Cut the potatoes into small cubes.. Use the bacon grease to fry the potatoes over medium/medium-low heat for about 20 minutes.. Add some salt and paprika to the potatoes, mix well and cook for another ten minutes.. Cut the onions and add them to the frying pan. Cook for about five minutes.. If you decide to add some vegetables, like mushrooms or peppers, add them now.. Now, there are two ways you can cook the eggs.. Cut the cheese into small slices and add it.. Cook for a couple of minutes more, until eggs are cooked enough.. For the final touch, chop the parsley (or whatever other spices/herbs you decided to use) and add it on top.. Serve hot and add some freshly ground pepper..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 14, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 791, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 913, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 914, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (224, 17, 0);
insert into tipoReceta(idReceta, tipo) values (224, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Beef Stroganoff', 64, 'Dice an onion.. Cut beef into bite-size strips. Ground beef can also be used (although not traditional), if beef is compacted into strips of similar size.. Season the beef with kosher salt, freshly-ground pepper, or any other desired seasoning.. Heat a skillet on high with butter or olive oil. Cook the onions until about translucent.. Begin adding the beef strips and let them cook, stirring to prevent sticking or unequal cooking.. Meanwhile, heat up a pot of highly salted water until it boils. Then add the egg noodles. Do not cook for too long as egg noodles might begin disintegrating when overcooked.. Once beef is cooked, pour off the liquid produced from the meat.. Add the chicken stock to the pan and continue cooking.. Make roux (by mixing a small amount of flour with either water or melted butter). Mix this into the beef and stock as it cooks to thicken it to the desired consistency.. Add Worchestershire sauce and the dijon mustard to taste.. Serve on a plate with a scoop of egg noodles covered with the beef sauce..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 266, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 51, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 915, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 200, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (225, 916, 0);
insert into tipoReceta(idReceta, tipo) values (225, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Fried Potatoes', 33, 'Peel and cut the potatoes to desired size.. Cut the onions.. Put a bit of Oil or Crème Fraîche in your pan.. Put both the potatoes and the onions into the pan.. Cook them until they are golden-brown.. Enjoy.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (226, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (226, 351, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (226, 251, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (226, 72, 0);
insert into tipoReceta(idReceta, tipo) values (226, '');


insert into Receta(nombre, tiempo, proceso) values ('Hummus', 63, 'Drain and rinse the garbanzo beans.. Place garbanzo beans in a small saucepan or pot, add 1 teaspoon baking soda, and cover with a few inches of water. Bring to a boil and cook for 20 minutes.. Combine the garlic and lemon juice with 1/4 teaspoon salt in the workbowl of your food processor. Pulse until a fine, uniform consistency is achieved.. Drain the garbanzo beans and their skins in a mesh strainer, then rinse with cold water.. Add the tahini to the food processor. Blend until creamy.. While the food processor is running on ''high,'' slowly drizzle in two tablespoons of ice-cold water until the mixture thickens.. Add the garbanzo beans, cumin, and optionally zaatar. Process on high, drizzle in olive oil.. Process the hummus on high for at least one minute longer, up to three minutes longer if it has not become smooth enough yet.. Transfer the hummus into a serving bowl, and optionally top with additional olive oil and finely chopped parsley.. Serve immediately or store in the refrigerator for up to one week..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 917, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 401, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 761, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 308, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 918, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (227, 121, 0);
insert into necesitar(idReceta, idElectro) values (227, 1);
insert into tipoReceta(idReceta, tipo) values (227, 'Middle Eastern');


insert into Receta(nombre, tiempo, proceso) values ('Hamburger dressing', 1, 'Mix ingredients in a bowl.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (228, 919, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (228, 397, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (228, 379, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (228, 29, 0);
insert into tipoReceta(idReceta, tipo) values (228, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Newfoundland Cod Chowder', 45, 'In a large, heavy saucepan, cook bacon over medium-high heat for about 10 minutes or until crisp. Chop coarsely and set aside.. Drain off all but 1 tbsp. fat from saucepan. Add onions and savoury. Cook, stirring occasionally for 5 minutes or until softened.. Add potatoes, carrots, water and salt. Bring to boil, cover, reduce heat and simmer for about 20 minutes or until tender. Cut cod into 1-inch chunks. Add to vegetables and simmer for about 5 minutes or until fish flakes easily. Add milk and white pepper, heat through. Garnish with bacon and parsley..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 140, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 72, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 920, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 96, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 167, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 921, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 922, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (229, 923, 0);
insert into tipoReceta(idReceta, tipo) values (229, 'Canadian');


insert into Receta(nombre, tiempo, proceso) values ('Spaghetti aglio e olio', 25, 'Heat a large skillet on medium-high heat, start cooking the pasta.. Finely slice or mince the garlic and finely chop the parsley.. Add the oil and garlic to the skillet and gently cook it until it is lightly golden brown.. Add the red pepper flakes to the skillet and turn down the heat to let its flavor infuse the oil.. When the pasta has finished cooking, drain it, and reserve at least around a cup of the cooking water.. Now add the drained pasta with some of the cooking water to the skillet and toss vigorously.. At the very last second add the parsley, to preserve its freshness. Adjust the seasoning to taste if necessary..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (230, 68, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (230, 394, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (230, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (230, 753, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (230, 102, 0);
insert into tipoReceta(idReceta, tipo) values (230, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Breton Crepes', 77, 'Mix flour, salt, egg and water. (In this order to avoid dry flour). Let it rest one hour at room temperature.. Cook the galette on a crepe-maker or a big flat pan.. When garnishing, heat the galette again with a bit of salted butter..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (231, 924, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (231, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (231, 230, 0);
insert into tipoReceta(idReceta, tipo) values (231, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Omelet', 10, 'Add tapioca, salt and pepper to milk; cook in double boiler 15 minutes or until tapioca is clear and mixture thickened, stirring frequently.. Add butter.. Allow it to cool; combine with egg yolks, stirring occasionally.. Fold in egg whites.. Set oven for moderate 350°F.. Pour egg mixture into hot buttered frying pan.. Cook over low heat 3 minutes.. Transfer to oven; bake 15 minutes.. Omelet is done when an inserted knife comes out clean.. Cut across at right angles to handle of pan, being careful not to cut all the way through.. Fold carefully from handle to opposite side and serve on hot platter..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 925, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 32, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 926, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 927, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 127, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 928, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (232, 188, 0);
insert into necesitar(idReceta, idElectro) values (232, 2);
insert into tipoReceta(idReceta, tipo) values (232, 'various');


insert into Receta(nombre, tiempo, proceso) values ('Baked pasta with broccoli', 70, 'Boil water and add salt, put pasta inside.. Boil broccoli and eggs for 10 minutes.. Dice scamorza cheese, prepare a pan.. Put a layer of béchamel.. Put a layer of pasta.. Put a layer of broccoli, diced scamorza cheese, pepper, salt.. Go to step 4 and repeat until ingredients end.. Add sage leafs on top (optional).. Put the pan inside the (preheated) oven at 180°C for 15~20 minutes.. End with 5~10 minutes of cooking with the grill function..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 205, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 113, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 929, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 930, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 931, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (233, 500, 0);
insert into necesitar(idReceta, idElectro) values (233, 11);
insert into necesitar(idReceta, idElectro) values (233, 2);
insert into tipoReceta(idReceta, tipo) values (233, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Cooked Chickpeas', 1, 'Heat oil in pan. Add chickpeas and seasonings.. Cook over medium-high heat for 10-15 minutes. Salt and pepper to taste..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 932, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 92, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (234, 228, 0);
insert into tipoReceta(idReceta, tipo) values (234, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Tuna Sub', 10, 'Lightly toast one side of the bun. Add cheese to bottom of bun. Spread a layer of tuna salad. Place several spinach leaves on top bun. Add sliced tomatoes. Add pickle slices. Season with salt and pepper to taste. Combine halves and enjoy..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 933, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 934, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 935, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 936, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 937, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 938, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 939, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (235, 940, 0);
insert into necesitar(idReceta, idElectro) values (235, 2);
insert into tipoReceta(idReceta, tipo) values (235, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Basic Sweet Potato Fries Recipe', 0, 'Set oven heat to 425°F (220°C).. Grab a pan and put a layer of parchment paper (or aluminum foil) on it.. Chop the potato(es) on your cutting board with a sharp knife throwing them onto the pan.. Drizzle the fries with olive oil. Toss the fries with clean hands to coat the fries in olive oil. Now wash your hands with soap to remove excess olive oil.. Top generously with cinnamon and salt. Pepper and/or rosemary may be added for additional flavor if desired.. Put in preheated oven. Setting timer for 20 minutes.. At 20 minutes, flip the fries. Rubber tongs make it easy to grab and turn a lot.. Return to oven setting timer for another 10-20 minutes depending on the quality of the oven and desired crispiness.. Enjoy. Maybe put them in a glass bowl..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (236, 941, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (236, 31, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (236, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (236, 170, 0);
insert into necesitar(idReceta, idElectro) values (236, 2);
insert into tipoReceta(idReceta, tipo) values (236, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Peanut Butter', 22, 'Spread peanuts on a large baking sheet and roast in the oven at 350°F (175°C) for ten to twelve minutes. While the peanuts are still hot remove any skins from them. This is best done by wrapping a few handfuls at a time in a dish towel and rolling them against each other for several seconds.. Put all your roasted and skinned peanuts in a food processor, add salt if desired, and chop until you have reached your desired thickness of peanut butter. (This may take a few minutes).');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (237, 942, 0);
insert into necesitar(idReceta, idElectro) values (237, 2);
insert into tipoReceta(idReceta, tipo) values (237, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Slow-cooked Pork Carnitas', 15, 'Season pork with kosher salt and pepper.. In a medium sauté pan on medium-high heat, brown pork on all sides.. Remove from heat and allow to cool, about 10 minutes.. Using a sharp knife, insert blade into pork, cutting small holes and insert garlic slivers as far in as you can.. Pour chicken broth in slow cooker.. Add pork and season with cumin, adobo, sazon, and oregano.. Add bay leaves and chipotle peppers.. Cover and cook low for 8 hours.. After 8 hours, shred pork using 2 forks and combine with juices.. Let cook for another 15-30 mins..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 943, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 440, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 944, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 324, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 945, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 946, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (238, 947, 0);
insert into necesitar(idReceta, idElectro) values (238, 5);
insert into tipoReceta(idReceta, tipo) values (238, 'Mexican');


insert into Receta(nombre, tiempo, proceso) values ('Oatmeal Pancakes', 10, 'Mix eggs, sugar, honey and milk.. In another bowl mix oat flour and baking powder.. Combine two mixtures and let the batter rest for about 15 minutes.. Preheat the pan for 5 minutes over low (~33%) heat, cook for about 1 - 1.5 minutes then flip when you see bubbles come out and cook for another 45s - 1 minute.. Eat them with raspberry (or any other) jam..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 65, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 948, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 3, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (239, 949, 0);
insert into tipoReceta(idReceta, tipo) values (239, 'Unspecified');


insert into Receta(nombre, tiempo, proceso) values ('Breakfast Wrap', 5, 'Begin by cutting the sausages in half and frying them ensuring that they are cooked the whole way through.. Next, fry the bacon.. Next, possibly while the bacon is frying, crack an egg into a bowl, add a dash of milk and whisk it. Then, put the egg mixture into the microwave for a minute, take it out and whisk it again, do this twice again or until the scrambled egg is ready.. Add the sausage, bacon and scrambled egg to a wrap (I recommend two sausage halves, a bacon rasher and half the bowl of scrambled egg per wrap). Add ketchup if desired..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 825, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 950, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 138, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 951, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (240, 397, 0);
insert into necesitar(idReceta, idElectro) values (240, 4);
insert into necesitar(idReceta, idElectro) values (240, 10);
insert into tipoReceta(idReceta, tipo) values (240, 'English');


insert into Receta(nombre, tiempo, proceso) values ('Baked Mostaccioli', 15, 'Bring a pot to a boil and cook pasta for 6 minutes (very al dente).. Put pasta and sauce in baking dish(es) and mix well.. Cover pasta and sauce generously with grated cheese until you can not see the pasta.. Bake at 350°F / 175°C for 20 minutes or 375°F / 190°C for 15 minutes on convection bake..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (241, 952, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (241, 953, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (241, 954, 0);
insert into necesitar(idReceta, idElectro) values (241, 2);
insert into tipoReceta(idReceta, tipo) values (241, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Scandinavian Coffee Cake', 40, 'Scald milk.. Add shortening, sugar, and salt.. Bake 25 to 30 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 955, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 290, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 190, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 956, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 957, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 958, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 959, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 461, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (242, 960, 0);
insert into necesitar(idReceta, idElectro) values (242, 2);
insert into tipoReceta(idReceta, tipo) values (242, 'Scandinavian');


insert into Receta(nombre, tiempo, proceso) values ('Yogurt', 757, 'Bring the milk to 45°C (113°F).. Pour the yogurt into the milk and whisk well.. Bring the milk to 45°C (113°F) again.. Boil some water and use it to wash the thermos from inside.. Pour the milk into the thermos.. Leave the thermos in the oven (or any other place without airflow) for 12 hours.. Store in the fridge..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (243, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (243, 35, 0);
insert into necesitar(idReceta, idElectro) values (243, 1);
insert into necesitar(idReceta, idElectro) values (243, 2);
insert into tipoReceta(idReceta, tipo) values (243, 'Universal');


insert into Receta(nombre, tiempo, proceso) values ('Frittata', 45, 'Dice peppers and onions and saute in an oven safe pan at medium heat.. Add in meat to the pan and set oven to low broil.. Beat eggs, cream, salt, and pepper together in a bowl.. Add in egg mixture to the pan and mix together until even.. Cook egg and vegetable mixture in pan until eggs begin to firm up and edges begin to pull away. Place into oven. Keep in Oven until completely firm. At this point you can add shredded cheese on top and put back into the oven until melted (about 2 more minutes). Flip out of pan and cool to room temperature to ensure settling..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 17, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 225, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 640, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (244, 961, 0);
insert into necesitar(idReceta, idElectro) values (244, 2);
insert into tipoReceta(idReceta, tipo) values (244, 'Italian');


insert into Receta(nombre, tiempo, proceso) values ('Pastítsio', 0, 'Preheat oven to 190°C. In a large pot of salted water, cook the pasta per package directions. Drain and set aside.. Cook onion in a bit of oil until soft. Add meat and cook until browned, breaking meat into small pieces.. Drain any excess grease and add spices. Stir together and cook ~30 seconds.. Mix tomato paste with enough water to create a viscous tomato sauce. Add sauce to meat and simmer 2-3 minutes before setting aside.. In a saucepan melt the butter and add the flour. Cook 2-3 mins until no longer starchy, whisking frequently. Add milk gradually and whisk continuously. Add stock and cook until sauce is thickened. Add nutmeg and season to taste.. Add thin béchamel layer to bottom of casserole dish and assemble as follows: half pasta, all the meat sauce, 2nd half of pasta, rest of béchamel and cheese.. Bake covered for 45 minutes, removing lid last 5-10 minutes to brown top. Let cool 15 minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 962, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 963, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 964, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 297, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 965, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 534, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 966, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 207, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 12, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 967, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 51, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 968, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (245, 385, 0);
insert into necesitar(idReceta, idElectro) values (245, 2);
insert into tipoReceta(idReceta, tipo) values (245, 'greek');


insert into Receta(nombre, tiempo, proceso) values ('Mushroom Stroganov', 10, 'Bring a large pot of salted water to a boil and cook pasta al dente. Combine flour, mustard, smoked paprika, salt and pepper. Add broth and whisk until no lumps remain.. Melt butter in a skillet over medium heat.. Add onions and cook until softened.. Add mushrooms and cook until water evaporates and mushrooms are slightly browned.. Add garlic and cook for another 30 seconds.. Pour the flour and broth mixture into the mushrooms and cook until thickens.. Stir in Creme Fraiche.. Add the strained pasta to the mushroom sauce and stir to coat the pasta completely.. Serve immediately..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 969, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 364, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 970, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 11, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 971, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 837, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 200, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 144, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 972, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (246, 973, 0);
insert into necesitar(idReceta, idElectro) values (246, 10);
insert into tipoReceta(idReceta, tipo) values (246, 'Russian');


insert into Receta(nombre, tiempo, proceso) values ('Croutons', 36, 'Preheat oven to 350°F (roughly 180°C). Gently cut slices of white bread into squares with a chefs knife.. In a large bowl combine olive oil, spices, and bread squares and gently mix to thoroughly season bread.. Spread seasoned bread squares large face down onto a baking sheet evenly and put in oven for 6-8 minutes. Once the bread has crisped flip each square and put back in oven for another 6-8 minutes or until crispy throughout.. Once fully baked, let rest until cool..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (247, 974, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (247, 394, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (247, 794, 0);
insert into necesitar(idReceta, idElectro) values (247, 2);
insert into tipoReceta(idReceta, tipo) values (247, 'French');


insert into Receta(nombre, tiempo, proceso) values ('Meatloaf', 161, 'Once thawed, put all of your beef into a bowl. The next 4 steps will all go into this same bowl.. Dice the onion and bread slices into small pieces. Add them.. Crack and put in all of your eggs.. Pour in your milk, and a moderate amount of mustard and ketchup.. Add garlic salt and onion powder.. Now you must use your (sanitized) hands and mix everything in the big bowl well. Make sure you get the bottom.. Evenly distribute your mixed meat into 2 or 3 oven safe greased up dishes. Try to flatten the surface as much as you can.. In each dish, create a small channel in the middle of each meatloaf. This is to maintain the shape as it is cooking.. Put all of your meatloaf filled dishes into the oven on 180 Celsius for 1 hour.. Once you have about 15 minutes left on your timer, get started on your sauce.. Toss your 3 sugar cubes into a bowl with a little bit of hot water to melt them.. Add your tomato soup, 1/4 Cup of ketchup and mustard (each).. Stir sauce until it is a thick, light red color.. Once 1 hour is up, take out all of your meatloaf. Make sure to cut open the thickest meatloaf and confirm the beef is cooked.. Coat the top of each of your meatloaves with the sauce, evenly.. Once coated, put back into the oven for 10 minutes.. Take out all of your meatloaf. Once cool, slice it up and serve!.');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 402, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 975, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 38, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 34, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 847, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 477, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 184, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 976, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 977, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 978, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (248, 979, 0);
insert into necesitar(idReceta, idElectro) values (248, 4);
insert into necesitar(idReceta, idElectro) values (248, 5);
insert into necesitar(idReceta, idElectro) values (248, 2);
insert into tipoReceta(idReceta, tipo) values (248, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Ketchup', 130, 'Simmer together tomatoes and onion for 20 to 30 minutes; press through a sieve.. Put the cinnamon, cloves, and garlic loosely in a clean, thin, white cloth; tie top tightly; add to vinegar and simmer 30 minutes.. Remove spice bag.. Boil tomato mixture rapidly until you have but one-half the original amount.. Stir frequently to prevent sticking.. Add spiced vinegar, sugar, salt, paprika, and cayenne pepper to tomato mixture.. Boil rapidly, stirring constantly, about 10 minutes or until slightly thickened.. Pour into hot, sterile jars, fill jars to top, and seal..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 936, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 980, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 442, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 981, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 191, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 982, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 33, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 124, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 983, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (249, 228, 0);
insert into necesitar(idReceta, idElectro) values (249, 2);
insert into tipoReceta(idReceta, tipo) values (249, 'American');


insert into Receta(nombre, tiempo, proceso) values ('Traditional beef or lamb stew', 220, 'Cut up the onion, carrot, and celery into bite-sized chunks. The garlic can go in whole.. Brown the meat on all sides in a large pot with some oil.. Remove the meat and add in the vegetables, adding some salt to help deglaze the pot.. (Optional) Deglaze with a third of a can of stout or porter after adding the meat back in.. Add back in the meat and add in the stock and herbs. Simmer for about 2 - 2.5 hours.. If watery, add cut up potatoes or a flour mixture to thicken the stew..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 984, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 9, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 101, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 193, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 29, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 41, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 170, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 267, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 985, 0);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (250, 986, 0);
insert into tipoReceta(idReceta, tipo) values (250, 'Irish');


insert into Receta(nombre, tiempo, proceso) values ('Galinha Caipira', 30, 'Cut the chicken into pieces. Remove offal or small bones, if you want. Salt and pepper to taste now.. In a pan (best if cast iron), add the lard and heat it up very well.. Add the chicken and lower the heat.. After the meat sears, add the diced onions.. When the onions brown, cover the pot with boiling water, and let it simmer for two hours. If it dries, add more water.. After those two hours, add the diced chives and simmer it for more thirty minutes..');
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (251, 249, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (251, 45, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (251, 7, 40);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (251, 8, 10);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (251, 9, 90);
insert into tipoReceta(idReceta, tipo) values (251, 'Brazilian');

