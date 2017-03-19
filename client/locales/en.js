export default {
    cities: {
      title: "In <b>citylines.co</b> we want to build the transport systems of the World's cities",
      search: 'Enter a city or a country',
      city_item: '%(lines)s lines | %(contributors)s contributors',
      contact: 'Contact',
      contact_link: 'Enter to the <a className="c-link" target="_blank" href="https://groups.google.com/forum/#!forum/citylinesco">Google Group</a>, contact us at <a className="c-link c-link--secondary" href="https://twitter.com/citylines_co" target="_blank">@citylines_co</a>, or visit the <a className="c-link c-link--secondary" href="https://github.com/BrunoSalerno/citylines" target="_blank">Github repository</a>.'
    },
    main: {
      log_in: 'Log in'
    },
    auth: {
      log_in: 'Log in',
      log_in_with_google: 'Log in with Google',
      disclaimer: 'By signing in you are agreeing to the',
      disclaimer_link: 'contributor terms'
    },
    cookie_notice: {
      notice: 'This website uses cookies. If you continue to use this website you accept our cookies policy.',
      accept: 'Accept',
      info: 'Information about our cookies policy',
      text: {
        title: 'Our cookies policy',
        p1: 'Cookies are small pieces of information that are stored in your web browser and that can be accessed by one or several websites.',
        p2: 'Citylines.co uses own and third-party cookies with the purpose of improving the user experience. We use own cookies to remember which user has logged in and to know whether the user has pressed or not the Accept button in the cookies banner. Regarding the third-party cookies, Google uses cookies in this website to store information related to the Google Login and to Google Analytics. All these cookies are persistent and are used only with the described scope.',
        p3: 'You can disable the cookies in this website, but this could affect certain features of Citilines.co.',
        p4: 'You can find more information about cookies at <a target="_blank" className="c-link" href="http://www.aboutcookies.org">aboutcookies.org</a>, including guides on how to see which cookies are installed in your browser, or how to uninstall them.'
    }
  },
  city: {
    edit: 'Edit',
    stop_editing: 'Stop editing',
    lines: 'Lines',
    km_operative: 'Operative: %(km)s km',
    km_under_construction: 'Under construction: %(km)s km',
    popup: {
      station: 'Station %(name)s',
      track: 'Track of line',
      buildstart: 'Beginning of construction: %(year)s',
      opening: 'Opening: %(year)s',
      closure: 'Closure: %(year)s',
      length: 'Approximate length: %(km)s km'
    }
  },
  editor: {
    edit_features: 'Edit features',
    edit_lines: 'Edit lines',
    feature_viewer: {
      selected_feature: 'Selected feature',
      no_feature_selected: 'No feature selected',
      fields: {
        klasses_id: {
          section: 'Track Id:%(id)s',
          station: 'Station Id:%(id)s'
        },
        line: 'Line',
        name: 'Name',
        opening: 'Opening',
        buildstart: 'Beginning of construction',
        closure: 'Closure'
      }
    },
    modified_features: {
      title: 'Modified features',
      no_features_modified: 'No features modified',
      types: {
        geo: '(Geo)',
        props: '(Props)',
        created: '(New)',
        removed: '(Removed)'
      },
      klasses: {
        section: 'Track',
        station: 'Station'
      },
      save: 'Save',
      discard: 'Discard'
    },
    lines_editor: {
      create: 'Create',
      new_line_placeholder: 'New line',
      save: 'Save',
      delete: 'Delete',
      are_you_sure: 'Are you sure?',
      yes: 'Yes',
      no: 'No'
    }
  },
  terms: {
    title: 'Terms of use',
    license: {
      title: 'License',
      p1: "Citylines.co is <i>open data</i> licensed under the <a className='c-link' href='http://opendatacommons.org/licenses/odbl/1.0/' target='_blank'> Open Database License</a> (ODbL). Any rights in individual contents of the database are licensed under the <a href='http://opendatacommons.org/licenses/dbcl/1.0/' target='_blank' className='c-link'>Database Contents License</a> (DbCL).",
      p2: "You can find a summary of the ODbL license <a href='https://opendatacommons.org/licenses/odbl/summary/' target='_blank' className='c-link'>here</a>."
    },
    contributor: {
      title: 'Contributor terms',
      p1: 'Your contribution should not infringe the intellectual property rights of anyone else. When you contribute any content you are authorizing Citylines.co to use and distribute it under our current license terms.',
      p2: 'You hereby grant to Citylines.co a worldwide, royalty-free, non-exclusive, perpetual, irrevocable licence to do any act that is restricted by copyright, database right or any related right over anything within the contents you contributed.',
      p3: 'Citylines.co agrees that it may only use or sub-license the content you contributed as part of a database and only under the terms of the ODbL 1.0 license for the database and DbCL 1.0 license for the individual contents of the database.'
    }
  }
}
