import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{
				name: "José Uriel",
				twitter: "@JUrielsz"
			},{
				name: "Jonh Nosh",
				twitter: "@Jonhnosh"
			},{
				name: "Albert Einsten",
				twitter: "@alberteisnten"
			}
		];
	}
});
