if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "C:/1himan/My Projects/Gym_Management_App/GymManagementApp/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/n481k6d1/obj/arm64-v8a/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/1himan/My Projects/Gym_Management_App/GymManagementApp/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET react-native-reanimated::worklets)
add_library(react-native-reanimated::worklets SHARED IMPORTED)
set_target_properties(react-native-reanimated::worklets PROPERTIES
    IMPORTED_LOCATION "C:/1himan/My Projects/Gym_Management_App/GymManagementApp/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/n481k6d1/obj/arm64-v8a/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/1himan/My Projects/Gym_Management_App/GymManagementApp/node_modules/react-native-reanimated/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()
