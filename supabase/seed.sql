SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."countries" ("id", "name", "created_at") VALUES
	(1, 'Armenia', '2024-01-15 13:48:48.905151+00'),
	(2, 'India', '2024-01-15 13:51:52.654668+00');


--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."actors" ("id", "first_name", "last_name", "created_at", "country_id", "image") VALUES
	(13, 'Paul', 'Rudd', '2024-01-23 19:05:13.393637+00', 2, 'members/square_thumb@3x.jpg'),
	(12, 'Palak', 'Tiwari', '2024-01-23 17:18:10.892736+00', 2, 'members/4e0201d9ad75b9b22e6efc211113e2c31681527758570209_original.jpg'),
	(11, 'Pooja', 'Hegde', '2024-01-23 17:13:32.567586+00', 2, 'members/pooja-hegde-latest-photoshootthumb.jpg'),
	(3, 'Rockmond', 'Dunbar', '2024-01-18 13:44:21.295548+00', 2, 'members/f73465e5ca52d96642cbeac05e5df187.png'),
	(4, 'Anand', 'Kumar', '2024-01-18 14:27:03.415366+00', 2, 'members/9ef687c5174fcc7fcc12ed88c6770fed.png'),
	(10, 'Shah Rukh', 'Khan', '2024-01-19 09:58:11.182427+00', 2, 'members/9e15e2a90ca68ee4a7e9ddde63002bc1.jpg'),
	(14, 'Evangeline', 'Lilly', '2024-01-23 19:09:06.766299+00', 2, 'members/evangeline-lilly-gty-jpo-180802_hpMain_1x1_992.jpg'),
	(9, 'Mohanlal', 'Aarattu', '2024-01-19 09:50:02.215924+00', 2, 'members/5671cf97fe7a36dec00097e7ae1eed68.png'),
	(8, 'Dilipkumar', 'Kanagaraj', '2024-01-19 09:43:41.223798+00', 2, 'members/43b2efe0f0d00d99edf8d6e316eb37cb.png'),
	(7, 'Gundappa', 'Viswanath', '2024-01-18 14:49:27.544512+00', 2, 'members/c7586a0ecc4c18ff6cadcbb39b3fbc01.png'),
	(6, 'Manasi', 'Sudhir', '2024-01-18 14:39:33.959386+00', 2, 'members/621816b23db78e5720f0c9f2d87deeea.png'),
	(5, 'Deepika', 'Padukone', '2024-01-18 14:33:35.723418+00', 2, 'members/1e91ae371b055ac0a98354ca6ef4c5a1.png');


--
-- Data for Name: directors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."directors" ("id", "first_name", "last_name", "created_at", "country_id", "image") VALUES
	(1, 'Rishab', 'Shetty', '2024-01-23 17:55:23.332555+00', 2, 'members/Image%20(2).png'),
	(2, 'Kabir', 'Khan', '2024-01-23 18:22:51.022278+00', 2, 'members/MV5BYjQ3ZDI5OTEtNTdlYi00ZGE4LWI4OTYtMmZkMjBiMzM3YzMwXkEyXkFqcGdeQXVyMTMxMTIwMTE0._V1_.jpg');


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media" ("id", "created_at", "image", "title", "description", "duration", "trending", "views", "must_watch", "top", "votes", "banner", "media_type", "season") VALUES
	(7, '2024-01-03 11:41:36.380903+00', 'movies/84d6fc8ad8c73c9de46858af5c5ffc78.png', 'ANT-MAN', 'Iure delectus lacus ipsam inventore! Pellentesque per nemo dolorum provident. Iusto, amet arcu natoque, ipsum.', '1h 42min', true, 5000, true, NULL, 1200, 'movies/ant-man-and-the-wasp-movie-poster.jpg', 'Movie', NULL),
	(4, '2024-01-03 11:24:33.863164+00', 'movies/3474c3c97f3e4f39bd24899b93d094e9.png', 'Bhai Jaan', 'Irure similique aliquip repellat natus fames numquam sunt voluptate impedit, diam tristique. Perspiciatis nonummy, amet cursus! Hac? Autem sunt nonummy.', '1h 57min', true, 5000, true, NULL, 5000, 'movies/wallpapersden.com_bajrangi-bhaijaan-movie-hd-wallpapers_1920x1080.jpg', 'Movie', NULL),
	(5, '2024-01-03 11:33:59.310297+00', 'movies/b0f8ac60eb40f26c3259afe3881d383a.png', 'Suraj Pe Mangal Bhari', 'Montes gravida sunt malesuada placeat occaecati, quod dictum? Aperiam expedita natus quis! Excepturi consectetur, occaecat. Hendrerit nunc, commodi, aspernatur phasellus eveniet? Lectus quidem hic provident curabitur? Rhoncus perferendis. Magnam sed a iaculis.', '2h 10min', true, 1400, NULL, NULL, 7000, 'movies/suraj_pe_mangal_bhari_1603259445429.jpg', 'Movie', NULL),
	(12, '2024-01-19 11:54:03.872053+00', 'shows/bd7f16f1234a24bb5b2de55b93b2a2a4.png', 'High town', 'Culpa minima sagittis cupiditate? Ex labore congue pede. Netus, numquam tincidunt temporibus cupidatat similique iaculis, rutrum hac error rerum rutrum non consequatur tortor vestibulum, a mattis pharetra fermentum qui volutpat ratione.', '12h 23m', false, NULL, true, NULL, 2000, 'shows/bd7f16f1234a24bb5b2de55b93b2a2a4.png', 'Show', 5),
	(3, '2024-01-03 11:14:02.527129+00', 'movies/62626f7626109e010344d0b285b32e4d.png', 'Morbius', 'Molestias alias excepteur id iure felis mauris occaecat, id perferendis sapiente lacus molestias ea? Euismod quo sem est pariatur culpa.', '1h 30min', true, 3000, NULL, NULL, 9000, 'movies/LAND_16_9.jpeg', 'Movie', NULL),
	(6, '2024-01-03 11:37:30.960692+00', 'movies/2d973dcd5e8a3a9a2f2de80e25993fba.png', 'Pathan', 'Itaque earum mauris vulputate diamlorem, penatibus! Eleifend error neque? Nec curae sequi.', '2h 20min', true, 3000, true, NULL, 20000, 'movies/63133_ujhv.jpg', 'Movie', NULL),
	(8, '2024-01-03 11:45:19.400341+00', 'movies/7f2c5ae328ae342aa889e89359b89bd8.png', 'Adipurush', 'Wisi a magnam quibusdam eros voluptatibus phasellus corrupti, nulla optio, consectetuer iusto arcu! Totam quam illo, non hendrerit porta nesciunt in primis! Perferendis, anim, ut iure maxime ullamcorper exercitationem venenatis?', '1h 30min', true, 1200, true, NULL, 2000, 'movies/adipurush-box-office-day-4-advance-booking-better-than-pathaan-001.jpg', 'Movie', NULL),
	(1, '2023-12-24 17:33:27.881587+00', 'movies/avengers-endgame-cast-characters-uhdpaper.com-8K-62.jpg', 'Avengers : Endgame', 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos''s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.', '1h 23min', NULL, 1200, NULL, true, 6000, 'movies/avengers-endgame-cast-characters-uhdpaper.com-8K-62.jpg', 'Movie', NULL),
	(11, '2024-01-19 11:51:04.615234+00', 'shows/ab17c64ec912c10ec4f62e2d0962f63b.png', 'Mirzapur', 'Habitasse dis rutrum, odio, fugit interdum? Quibusdam mollit dictum ultricies, aptent mus, incidunt. Dis. Fames!', '7h 40m', false, NULL, true, NULL, 6000, 'shows/ab17c64ec912c10ec4f62e2d0962f63b.png', 'Show', 3),
	(10, '2024-01-19 11:46:36.055693+00', 'shows/efc55d309139bc53b8a764e78f0f6160.png', 'Money heist', 'Urna magnis rutrum? Accusantium nostrum curabitur distinctio duis, convallis, faucibus, ultrices urna laudantium blanditiis, feugiat maecenas esse rutrum maecenas officia quaerat.', '12h 23m', true, NULL, NULL, NULL, 20000, 'shows/efc55d309139bc53b8a764e78f0f6160.png', 'Show', 4),
	(2, '2023-12-25 15:53:14.74059+00', 'movies/wallpapersden.com_allu-arjun-pushpa-movie_2048x1152.jpg', 'Kantara', 'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.', '1h 57min', false, 2000, true, true, 8500, 'movies/wallpapersden.com_allu-arjun-pushpa-movie_2048x1152.jpg', 'Movie', NULL),
	(9, '2024-01-19 11:40:54.551834+00', 'shows/24a82e464724028f1585ab6a7a44f0a6.png', 'Stranger things', 'Saepe mauris, asperiores? Hic aliquid hendrerit, rerum corrupti hac tenetur. Do euismod ab felis saepe! ', '8h 20m', true, NULL, true, NULL, 5000, 'shows/24a82e464724028f1585ab6a7a44f0a6.png', 'Show', 5),
	(13, '2024-01-19 11:56:27.474255+00', 'shows/303a401faeee7195b4b23d5722c376b6.png', 'The gray man', 'Magna quia. Quisque, feugiat tortor ullamcorper blandit magnis? Sollicitudin vel taciti fugit odit condimentum quod laboris. Mus pretium repellat corporis, ex, litora fugiat dolores.', '7h 40m', true, NULL, true, NULL, 7500, 'shows/303a401faeee7195b4b23d5722c376b6.png', 'Show', 2),
	(14, '2024-01-19 11:59:46.387129+00', 'shows/39d657ad04964ba435a0ce2c540a6f52.png', 'Lucifer', 'Porro semper potenti augue dignissimos, esse. Praesentium aptent provident molestie fusce enim posuere eleifend, voluptate similique per. A, arcu quod enim totam ab magnam lectus animi esse, molestiae soluta.', '14h 30m', true, NULL, true, NULL, 4000, 'shows/39d657ad04964ba435a0ce2c540a6f52.png', 'Show', 3);


--
-- Data for Name: seasons; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."seasons" ("id", "number", "created_at", "media_id") VALUES
	(1, 1, '2024-01-27 15:35:18.003522+00', 9),
	(2, 2, '2024-01-27 17:00:51.115842+00', 9),
	(3, 3, '2024-01-27 17:01:24.632034+00', 9);


--
-- Data for Name: episodes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."episodes" ("id", "number", "image", "video_url", "title", "description", "season_id", "created_at", "duration") VALUES
	(1, 1, 'episodes/digital_camera_photo-1080x675.jpg', 'https://www.youtube.com/watch?v=C0DPdy98e4c', 'Chapter One : The Vanishing of Will Byers', 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.', 1, '2024-01-27 16:12:19.327783+00', '49 min'),
	(2, 2, 'episodes/tree-736885_1280.jpg', 'https://www.youtube.com/watch?v=vxkbf5QMA2g', 'Chapter Two: The Weirdo on Maple Street', 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.', 1, '2024-01-27 17:16:18.377125+00', '20 min'),
	(3, 3, 'episodes/free-nature-images.jpg', 'https://www.youtube.com/watch?v=vxkbf5QMA2g', 'Chapter Three: Holly, Jolly', 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan''s been up to. Joyce is convinced Will is trying to talk to her.', 1, '2024-01-27 17:37:41.955144+00', '30 min'),
	(5, 1, 'episodes/nando-jpeg-quality-006-too-much.jpg', 'https://www.youtube.com/watch?v=2aeMRB8LL4o&t=19438s', 'Chapter One : The Vanishing of Will Byers', 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', 3, '2024-01-27 18:26:38.070635+00', '50 min'),
	(4, 1, 'episodes/images.jpeg', 'https://www.youtube.com/watch?v=2aeMRB8LL4o&t=19438s', 'Chapter One: The Body', 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover..', 2, '2024-01-27 18:22:44.205681+00', '30 min');


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."genres" ("id", "created_at", "title", "image", "top") VALUES
	(2, '2023-12-02 10:36:56.792006+00', 'adventure', 'genres/adventure_movies_36-62739666c7993__700.jpg', true),
	(5, '2023-12-02 10:37:49.565299+00', 'horror', 'genres/screen-shot-2023-10-02-at-10-25-28-am-651ad53fec0a7.png', true),
	(3, '2023-12-02 10:37:07.760509+00', 'comedy', 'genres/829d1ff2e8a7b524f2df866969e9a93d.jpg', true),
	(6, '2023-12-09 13:35:21.771735+00', 'thriller', 'genres/MV5BMmZlOGZkMjMtZDc4Ny00ZTQ1LWFmYTQtOThlY2JjYjg1NGQyXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_-607x900.jpg', true),
	(4, '2023-12-02 10:37:36.350482+00', 'drama', 'genres/images-w1400.jpg', true),
	(1, '2023-12-02 10:36:39.697269+00', 'action', 'genres/45cf53372ec7d06e4e2671c64ad4b14c.png', false);


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."languages" ("id", "title", "created_at") VALUES
	(1, 'english', '2024-01-13 17:56:43.638447+00'),
	(2, 'hindi', '2024-01-13 18:40:41.913667+00'),
	(3, 'tamil', '2024-01-13 18:42:34.904643+00'),
	(5, 'kannada', '2024-01-13 18:42:57.979323+00'),
	(4, 'telegu', '2024-01-13 18:42:50.43236+00');


--
-- Data for Name: media_actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media_actors" ("movie_id", "member_id") VALUES
	(5, 3),
	(5, 4),
	(5, 5),
	(5, 6),
	(5, 7),
	(5, 8),
	(5, 9),
	(5, 10),
	(4, 10),
	(4, 11),
	(4, 12),
	(4, 8),
	(4, 9),
	(4, 6),
	(4, 4),
	(4, 3),
	(7, 13),
	(7, 14),
	(7, 6),
	(7, 11),
	(7, 5),
	(7, 12),
	(7, 10),
	(7, 9),
	(3, 3),
	(3, 9),
	(3, 5),
	(3, 14),
	(3, 8),
	(6, 3),
	(6, 7),
	(6, 13),
	(6, 10),
	(6, 6),
	(6, 4),
	(8, 5),
	(8, 11),
	(8, 13),
	(2, 13),
	(2, 9),
	(2, 7),
	(2, 4),
	(1, 10),
	(1, 11),
	(1, 3),
	(1, 4),
	(9, 6),
	(9, 13),
	(9, 8),
	(9, 11);


--
-- Data for Name: media_directors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media_directors" ("media_id", "director_id") VALUES
	(5, 1),
	(4, 2),
	(7, 2),
	(3, 1),
	(6, 1),
	(8, 2),
	(2, 1),
	(1, 2),
	(9, 1);


--
-- Data for Name: media_genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media_genres" ("movie_id", "genre_id") VALUES
	(5, 1),
	(1, 1),
	(1, 2),
	(2, 1),
	(3, 1),
	(4, 1),
	(6, 6),
	(7, 3),
	(8, 6),
	(9, 2);


--
-- Data for Name: media_languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media_languages" ("movie_id", "language_id") VALUES
	(5, 1),
	(5, 2),
	(5, 3),
	(5, 4),
	(5, 5),
	(1, 1),
	(1, 3),
	(2, 4),
	(4, 5),
	(3, 3),
	(6, 1),
	(7, 1),
	(8, 1),
	(9, 1),
	(9, 2);


--
-- Data for Name: musicians; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."musicians" ("id", "first_name", "last_name", "created_at", "country_id", "image") VALUES
	(1, 'B. Ajaneesh', 'Loknath', '2024-01-23 17:57:06.147589+00', 2, 'members/b32f9d3438b75363d577feac161900e1.png');


--
-- Data for Name: media_musicians; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."media_musicians" ("media_id", "musician_id") VALUES
	(4, 1),
	(5, 1),
	(7, 1),
	(3, 1),
	(6, 1),
	(8, 1),
	(2, 1),
	(1, 1),
	(9, 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "first_name", "last_name", "created_at", "country_id") VALUES
	(1, 'Aniket', 'Roy', '2024-01-19 14:32:29.832682+00', 2),
	(2, 'Swaraj', '', '2024-01-19 14:32:57.621127+00', 2);


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."reviews" ("id", "description", "rating", "created_at", "media_id", "user_id") VALUES
	(20, 'Dis tempore id ducimus facilisi! Varius. Culpa, risus tempore pellentesque corrupti potenti arcu exercitationem tellus aspernatur laudantium eos! Minim sunt ullamco tincidunt molestias totam phasellus blanditiis veniam dolore dolor animi occaecat justo.', 5, '2024-01-24 13:36:48.557388+00', 1, 2),
	(21, 'Mi curabitur odio eos, occaecat odio nobis pulvinar occaecat? Quasi. Augue, velit, netus irure ultrices! Porro. Curabitur commodo lacus ligula?', 4, '2024-01-27 18:36:32.040753+00', 9, 2),
	(1, 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.', 4, '2024-01-19 14:03:46.150611+00', 5, 1),
	(2, 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.', 5, '2024-01-19 14:04:41.551597+00', 5, 2),
	(3, 'Reiciendis auctor iusto nulla placeat animi, totam error, voluptatum ducimus mollit ultricies aute porta ut beatae officia donec metus mauris aspernatur distinctio, elementum ipsum, voluptatum facilisi repellendus ac, laboris ultricies!', 3, '2024-01-23 18:27:09.203508+00', 4, 2),
	(4, 'Nisl cum quia hic ducimus! Nibh tristique nostrud rutrum reprehenderit. Eleifend venenatis urna magni aute! Augue curae iure ultricies? Nullam, velit! Venenatis? Provident elit.', 5, '2024-01-23 18:29:45.104169+00', 4, 2),
	(5, 'Id tempore impedit, aenean lobortis magna nullam alias penatibus dolorem laboriosam dictumst! Mattis cupidatat vero fringilla lacinia ridiculus hac! Sapiente! Quia iaculis, deleniti mollit, dapibus dolore dolor voluptatum dicta facere? Natus eleifend mus praesentium? Sequi a.', 4, '2024-01-23 18:31:53.699982+00', 4, 1),
	(6, 'Lectus eu volutpat perspiciatis, facilis, venenatis dignissimos ducimus integer fringilla accusamus etiam, inceptos odit, litora. Torquent, necessitatibus urna nam itaque cum, mollitia recusandae cumque culpa at, porta voluptatem laboriosam eget, platea rerum? Quisque animi id fermentum!', 5, '2024-01-23 19:20:35.481547+00', 7, 1),
	(7, 'Culpa anim orci non diamlorem ipsa per luctus sapiente totam laoreet? Enim dictumst.', 4, '2024-01-23 19:23:19.947445+00', 7, 1),
	(8, 'Ligula culpa ex tempore diamlorem orci eligendi pharetra ullamco quibusdam ipsum tempus erat, vivamus excepteur? Earum sagittis lectus accusamus eveniet, felis, ante senectus torquent commodi.', 3, '2024-01-23 19:25:43.623444+00', 7, 2),
	(9, 'Quasi praesentium pretium, minima porttitor tenetur beatae sapiente rerum euismod corporis occaecati, duis molestiae phasellus quisque.', 5, '2024-01-23 19:26:15.38159+00', 7, 2),
	(10, 'Ratione tortor dolore quasi explicabo vero scelerisque irure elit a aspernatur veniam. Assumenda mi! Nisl suspendisse proident lacinia, libero montes class officiis.', 5, '2024-01-23 19:40:02.023135+00', 3, 1),
	(11, 'Reprehenderit venenatis aperiam feugiat quis sapien eros deserunt, eius eum rhoncus quos! Conubia adipiscing minima doloribus vivamus nonummy convallis dicta dis! Dictumst nisl minima. Pede laboriosam fermentum facilisis a harum lacinia dolorum congue dolorum. Anim! Explicabo! Aptent taciti eaque corrupti. Autem imperdiet odio hac irure facere natus voluptatem?', 5, '2024-01-23 19:40:35.160783+00', 3, 2),
	(12, 'Viverra dis exercitationem, rhoncus nemo? Mollit orci quas consequat? Repellendus, modi explicabo accusantium, sapiente repellat diam adipiscing proident ligula.', 4, '2024-01-23 19:41:25.547741+00', 3, 2),
	(13, 'Pretium adipiscing duis. Provident voluptatibus hic inceptos quo, orci? Felis exercitation fugit, congue interdum perspiciatis architecto facere dapibus bibendum dui dignissim impedit suscipit accumsan, in maiores vulputate illo quo dolore, tempor rem, inventore aspernatur vulputate aenean, repellendus habitasse aptent hymenaeos, ultricies nunc ad aliquet ullamco egestas repellendus dui! Taciti fuga fermentum voluptatem, feugiat! Magnis explicabo excepteur mollitia?', 5, '2024-01-24 12:54:14.12901+00', 6, 2),
	(14, 'Dolore expedita tincidunt deserunt vehicula adipiscing inventore eget, numquam! Primis atque leo, libero diam? Error.', 4, '2024-01-24 12:55:14.680031+00', 6, 2),
	(15, 'Potenti tenetur. Eget diam tempore egestas volutpat posuere in phasellus nec, tortor aliquet porta! Euismod nisl proin! Metus, aperiam iusto enim rhoncus aliqua molestiae, pretium fugit adipiscing, excepteur ab, corporis.', 4, '2024-01-24 12:56:58.051141+00', 6, 1),
	(16, 'Excepturi posuere, condimentum placerat eos habitant blanditiis repudiandae dolor conubia ab animi sem ullam ea dictumst habitasse debitis, accusantium reprehenderit nulla wisi autem tristique, luctus morbi? Imperdiet eu morbi mi, nam fames.', 5, '2024-01-24 13:11:33.665332+00', 8, 1),
	(17, 'Tristique nostra habitasse iste? Mollis, viverra eum platea dignissim, quia lacus occaecat. Ratione nec? ', 4, '2024-01-24 13:28:17.473476+00', 2, 1),
	(18, 'Perferendis dolorem cras turpis illo maecenas! Hendrerit feugiat accumsan metus. Massa adipisci, maxime euismod ipsa repudiandae ullam delectus. Voluptatum eget! Montes nostra! Dictum architecto litora magni porro laudantium laudantium nunc, nibh dolore nulla velit.', 5, '2024-01-24 13:28:51.906551+00', 2, 1),
	(19, 'Ultrices dolorum saepe, laoreet, sagittis ratione reiciendis quos, integer doloremque fusce eos, quisque doloribus odit, facilisi excepteur, viverra? Soluta? Harum? Provident iure urna justo modi ipsum quasi perferendis eu dicta, eius rerum pharetra, minima, repellendus numquam erat omnis pariatur repudiandae facilis eum odit esse mi? Accusamus? Malesuada pellentesque odit iste, nascetur malesuada neque nisi facere dolores nam?', 4, '2024-01-24 13:35:51.263113+00', 1, 2);


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."roles" ("id", "name", "created_at") VALUES
	(1, 'director', '2024-01-15 13:45:43.884057+00'),
	(2, 'actor', '2024-01-15 13:46:06.312916+00'),
	(3, 'musician', '2024-01-15 13:46:35.540431+00');


--
-- Data for Name: shows; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."shows" ("id", "created_at", "image", "title", "description", "duration", "trending", "must_watch", "season", "votes") VALUES
	(1, '2024-01-03 15:48:23.719028+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/24a82e464724028f1585ab6a7a44f0a6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy8yNGE4MmU0NjQ3MjQwMjhmMTU4NWFiNmE3YTQ0ZjBhNi5wbmciLCJpYXQiOjE3MDQyOTY4MDksImV4cCI6MTczNTgzMjgwOX0.mwe9s3GzANRZRmuISFMC-d5ASxpXzOaQ1iyjNxLWz7Y&t=2024-01-03T15%3A46%3A49.520Z', 'Stranger things', 'Saepe mauris, asperiores? Hic aliquid hendrerit, rerum corrupti hac tenetur. Do euismod ab felis saepe! ', '8h 20m', true, true, 4, 9000),
	(2, '2024-01-03 15:51:31.768734+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/efc55d309139bc53b8a764e78f0f6160.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy9lZmM1NWQzMDkxMzliYzUzYjhhNzY0ZTc4ZjBmNjE2MC5wbmciLCJpYXQiOjE3MDQyOTcwNDcsImV4cCI6MTczNTgzMzA0N30.7rt9LQAsHanKT7RRaPupUwytIoigRMHTVcZR9Z-1zGo&t=2024-01-03T15%3A50%3A47.922Z', 'Money heist', 'Urna magnis rutrum? Accusantium nostrum curabitur distinctio duis, convallis, faucibus, ultrices urna laudantium blanditiis, feugiat maecenas esse rutrum maecenas officia quaerat.', '12h 23m', true, NULL, 5, 30000),
	(6, '2024-01-03 16:04:36.662696+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/ab17c64ec912c10ec4f62e2d0962f63b.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy9hYjE3YzY0ZWM5MTJjMTBlYzRmNjJlMmQwOTYyZjYzYi5wbmciLCJpYXQiOjE3MDQyOTc4NjUsImV4cCI6MTczNTgzMzg2NX0.lU39KI9yoJy9dij-xtEvbu3n4UqF1av2s4AEGmaTI0k&t=2024-01-03T16%3A04%3A25.643Z', 'Mirzapur', 'Habitasse dis rutrum, odio, fugit interdum? Quibusdam mollit dictum ultricies, aptent mus, incidunt. Dis. Fames!', '7h 40m', false, true, 2, 2000),
	(5, '2024-01-03 16:02:35.362131+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/bd7f16f1234a24bb5b2de55b93b2a2a4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy9iZDdmMTZmMTIzNGEyNGJiNWIyZGU1NWI5M2IyYTJhNC5wbmciLCJpYXQiOjE3MDQyOTc3MDYsImV4cCI6MTczNTgzMzcwNn0.wHKQxXVQlMmNsFf2B2rc1GcOH5yY9cFK-D_rX2Unuk8&t=2024-01-03T16%3A01%3A47.142Z', 'High town', 'Culpa minima sagittis cupiditate? Ex labore congue pede. Netus, numquam tincidunt temporibus cupidatat similique iaculis, rutrum hac error rerum rutrum non consequatur tortor vestibulum, a mattis pharetra fermentum qui volutpat ratione.', '12h 23m', false, true, 5, 6000),
	(4, '2024-01-03 16:00:35.299614+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/303a401faeee7195b4b23d5722c376b6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy8zMDNhNDAxZmFlZWU3MTk1YjRiMjNkNTcyMmMzNzZiNi5wbmciLCJpYXQiOjE3MDQyOTc1NjUsImV4cCI6MTczNTgzMzU2NX0.4Pwx4ZI1Zn_SlJYYr-1EiR9JXYoHQ_yiUJ_NKtIbX18&t=2024-01-03T15%3A59%3A25.867Z', 'The gray man', 'Magna quia. Quisque, feugiat tortor ullamcorper blandit magnis? Sollicitudin vel taciti fugit odit condimentum quod laboris. Mus pretium repellat corporis, ex, litora fugiat dolores.', '7h 40m', true, true, 2, 7500),
	(3, '2024-01-03 15:54:31.363752+00', 'https://ejompcachdnibrtnrnts.supabase.co/storage/v1/object/sign/show-images/39d657ad04964ba435a0ce2c540a6f52.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG93LWltYWdlcy8zOWQ2NTdhZDA0OTY0YmE0MzVhMGNlMmM1NDBhNmY1Mi5wbmciLCJpYXQiOjE3MDQyOTcyNTUsImV4cCI6MTczNTgzMzI1NX0.8bFjjE4uRUXrqL1-erl3YrhV3n5sOKlETgdAn5_TK4o&t=2024-01-03T15%3A54%3A15.240Z', 'Lucifer', 'Porro semper potenti augue dignissimos, esse. Praesentium aptent provident molestie fusce enim posuere eleifend, voluptate similique per. A, arcu quod enim totam ab magnam lectus animi esse, molestiae soluta.', '14h 30m', true, true, 3, 4000);



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."countries_id_seq"', 2, true);


--
-- Name: directors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."directors_id_seq"', 2, true);


--
-- Name: episodes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."episodes_id_seq"', 5, true);


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."genres_id_seq"', 6, true);


--
-- Name: languages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."languages_id_seq"', 5, true);


--
-- Name: members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."members_id_seq"', 14, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."movies_id_seq"', 14, true);


--
-- Name: musicians_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."musicians_id_seq"', 1, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."reviews_id_seq"', 21, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."roles_id_seq"', 3, true);


--
-- Name: seasons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."seasons_id_seq"', 3, true);


--
-- Name: shows_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."shows_id_seq"', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 2, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
