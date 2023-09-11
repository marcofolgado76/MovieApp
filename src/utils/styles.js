import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Page view styles
  container: {
    flex: 1,
    padding: '3%', // Use percentages for consistent padding on different screen sizes
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background color
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999, // To ensure the indicator is above other components
  },
  // Page view styles end

  // Movie card styles
  movieCard: {
    borderWidth: 0,
    borderRadius: 5,
    padding: 0,
    marginBottom: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '40%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardInfo: {
    width: '60%',
    padding: '3%', // Use percentages for consistent padding
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1%',
  },
  bold: {
    fontWeight: 'bold',
  },
  infoText: {
    marginLeft: 0,
    fontSize: 11,
    flexWrap: 'wrap',
  },
  // Movie card styles end

  // Bottom navigation styles
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3498db',
    height: 90,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: '5%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '3%',
  },
  tabItemFocused: {
    backgroundColor: '#288fd4',
    paddingHorizontal: '2%',
    borderRadius: 3,
  },
  tabLabel: {
    fontSize: 12,
    color: '#fff', // Change the label color for inactive tabs
    marginTop: '2%',
  },
  tabLabelFocused: {
    color: '#fff', // Change the label color for the focused tab
    fontWeight: 'bold',
  },
  // Bottom navigation styles end

  // Header navigation styles
  headerContainer: {
    flexDirection: 'row', // Arrange title and icons horizontally
    justifyContent: 'space-between', // Separate title and icons
    paddingHorizontal: 16, // Add padding for icons
    alignItems: 'center', // Align items vertically
    height: 120, // Set header height
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row', // Arrange icons horizontally
    alignItems: 'center', // Align items vertically
  },
  headerIcon: {
    marginLeft: 16, // Adjust margin to space out the icons
  },
  // Header navigation styles end

  // Search component styles
  searchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    marginBottom: '2%',
    borderRadius: 8, // Add border radius
    borderWidth: 2, // Add border width
    borderColor: '#3498db', // Add border color
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: '2%',
  },
  searchButton: {
    backgroundColor: '#3498db',
    borderRadius: 4,
    padding: 8,
  },
  searchIcon: {
    color: 'white',
  },
  // Search component styles end

  // Sort component styles
  sortContainer: {
    backgroundColor: 'white',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3498db',
  },
  sortText: {
    fontSize: 16,
    marginRight: '2%',
  },
  sortButtonGroupContainer: {
    marginLeft: '0%',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3498db',
    width: '65%',
  },
  selectedButtonStyle: {
    backgroundColor: '#288fd4',
  },
  sortInnerBorderStyle: {
    color: '#3498db',
  },
  sortButtonText: {
    color: '#3498db',
  },
  sortIconContainer: {
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  sortIcon: {
    fontSize: 20,
    color: '#3498db',
  },
  confirmButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 50,
  },
  confirmIcon: {
    fontSize: 20,
    color: 'white',
  },
  confirmationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '0%',
  },
  // Sort component styles end

  // Movie details page styles
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    margin: 16,
    elevation: 4,
    padding: 16,
  },
  detailsPoster: {
    width: '100%',
    height: 380,
    resizeMode: 'contain',
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '3%',
    marginTop: '3%',
  },
  detailsOverview: {
    fontSize: 16,
    marginBottom: '5%',
  },
  detailsText: {
    fontSize: 16,
  },
  backButton: {
    marginTop: 16,
    backgroundColor: '#3498db',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },
  icon: {
    marginRight: '3%',
  },
  loadMoreButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 16,
  },
  loadMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Movie details page styles end

  // Offline screen styles
  offlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offlineIcon: {
    marginBottom: 16,
  },
  offlineText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Offline screen styles end
});
