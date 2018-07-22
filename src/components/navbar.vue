 <template>
   <body>
  <v-toolbar fixed color="white">
     <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
 <v-toolbar-title>
   <v-layout>
     <v-flex pa-2 mt-2>
<img height="80%" mt-2 class="logo" src="@/assets/logoapp-01.png" alt="logo">
     </v-flex>
      <v-flex style="display: flex; align-items: center; colo: #414042;" ml-3 class="title"><span>Safe N Smart</span></v-flex>
   </v-layout>
 </v-toolbar-title>
    <v-spacer></v-spacer>
<!--     <router-link to="/"> -->
<!--     <v-toolbar-title ma-0 pa-0> <a href="home"><img class="logo" src="@/assets/logoapp-01.png" alt="logo"></a><h5>Safe N Smart</h5>
    </v-toolbar-title> -->
<!--     </router-link> -->
  </v-toolbar>
  <div>
<v-layout
    wrap
    style="height: 0px;"
  >
    <v-navigation-drawer
      class="white"
      v-model="drawer"
      temporary
      height="3000px"
      fixed
      clipped

    >
<router-link class="textlinks" style="text-decoration: none; color: #919191;" v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-tile  value="true" @click="$vuetify.goTo(0)">
            <v-list-tile-action>
              <v-icon  style="text-decoration: none; color: #58595b;" v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="text-decoration: none; color: #919191;" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
    </v-navigation-drawer>
  </v-layout>
  </div>
  </body>
</template> 

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', 
            icon: 'home',
            link: '/'
          },
          { title: 'Categories', 
            icon: 'dialpad',
            link: 'categoriespage'
           },
          { title: 'Mental Health', 
            icon: 'info',
            link: 'mentalHealth'
          },
          { title: 'Cool Info',
            icon: 'info',
            link: 'coolInfo'
            },
          /* { title: 'KP Map', icon: 'question_answer' }, */
          { title: 'Ask a Question',
            icon: 'chat',
            link: '/askUsaQuestionPage'
            },
                { title: 'MSM friendly services',
           icon: 'map',
           link: '/kpmap'
            },
            { title: 'Helpline',
           icon: 'phone',
           link: '/Helpline'
            },
          { title: 'Contact Us',
           icon: 'email',
           link: '/contactUs'
            },
        ]
      }
    }
  }
</script>

<style>
 a {
    text-decoration: none;
  }
</style>

<style scoped>

.nav {
  background-color: white;
  color: black;
  list-style-position: inside;
  text-align: center;
  padding: 10px;
  margin: 0px 0px 10px 0px;
 
}

.logo {
  flex: none;
}

.nav > .link {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  display: inline-block;
  padding-left: 0px;
  margin: 0px 20px 0px 50px;
}

.nav > .link > a {
  text-decoration: none;
  color: black;
}

.nav > .link > a:hover {
  color: grey;
}
.container {
  display: inline;
}

.nav ul {
    list-style-type: none;
    height: auto;
    width: 100px;
    padding: 100%;
}

.textlinks {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
}

</style>

