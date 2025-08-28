import React from 'react'
import Footer from '../layouts/Footer'

const Philosophy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-amber-50">
      <div className="max-w-7xl mt-18 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Swadeshi Philosophy
          </h1>
          <div className="w-60 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A holistic approach to life that balances individual, community, and national interests
          </p>
        </div>

        {/* Tagore Quote */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center">
          <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
            "Where the mind is without fear<br />
            & the head is held high<br />
            Where knowledge is free.....<br />
            Into that heaven of freedom, my father<br />
            Let my country awake"
          </blockquote>
          <p className="text-amber-600 font-medium mt-4">- Rabindranath Tagore</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Swadeshi Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While capitalism solely rests on Market and State as the twin socio-economic delivery systems, 
              and socialism primarily rests on the State as the delivery system, the Swadeshi thought relies 
              on the social institutional order, besides Market and State, as the socio-economic delivery system. 
              This makes the Market and the State share the public space with family, community and society.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Family */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Family</h3>
              <p className="text-gray-700">
                The lowest socio-cultural economic unit of society in the Swadeshi view is not the individual 
                but the family. This single institution relieves the modern State of extraordinary welfare 
                commitments like old age benefits and unemployment doles.
              </p>
            </div>

            {/* Community */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community & Society</h3>
              <p className="text-gray-700">
                Swadeshi believes in the legitimacy of different social units. It believes that the unbridled 
                and unbalanced individualism of the West is destructive of community living.
              </p>
            </div>

            {/* Dharma */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dharma</h3>
              <p className="text-gray-700">
                The Western notion of individual freedom is not acceptable to the Swadeshi approach. 
                Individual freedom is tempered by integration into family and community. 'Dharma' sustains 
                the whole framework.
              </p>
            </div>

            {/* Market */}
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Market</h3>
              <p className="text-gray-700">
                The market has to be an instrument and not the master of the people. The Swadeshi approach 
                is to limit the size of the market and not to eliminate the market as communism does.
              </p>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Essential Principles of Swadeshi</h2>
            <div className="grid gap-4">
              {[
                "That which is natural and native to a country and society, but allows scope for assimilation of wholesome and beneficial elements from the outside",
                "The principle of preferring the neighborhood to the remote",
                "Need-based life that rules out unlimited consumption as an end",
                "Renewal and reliance on family, community and society as socio-economic delivery systems",
                "Not autarky; but a global alternative that accepts only need-based trans nationalism",
                "Restoration of economics to its original meaning of practical human needs, frugality, and savings"
              ].map((principle, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 flex-1">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals & Objectives */}
          <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Goals & Objectives</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Primary Goals:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Creation of a just world order based on integral and holistic life vision</li>
              <li>Ensuring national security, unity and integrity</li>
              <li>Building a self-reliant nation</li>
              <li>Nourishment of Bharatiya cultural values</li>
              <li>Preservation of natural wealth</li>
              <li>Balanced development of all regions and the society as a whole</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Objectives:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ensuring satisfaction of basic needs of all people within 10 years</li>
              <li>Ensuring proper employment to all eligible hands</li>
              <li>Building Bharat as a world power in the next 25 years</li>
              <li>Keeping income inequalities within reasonable limits (10:1 ratio)</li>
              <li>Promoting national self-confidence and pride through education and media</li>
            </ul>
          </div>

          {/* Wealth Creation */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Swadeshi & Wealth Creation</h2>
            <p className="text-gray-700 leading-relaxed">
              It is a mistaken notion that the need-based approach of the Swadeshi philosophy is against 
              creation of wealth. The Swadeshi thought is merely an injunction against unlimited consumption; 
              it is a mandate for conservation and preservation of national assets and resources; it is an 
              emphasis on personal and family savings, it is an injunction against wasteful and needless 
              expenditure. The tradition of Swadeshi alone made India one of the richest and prosperous 
              nations in the world.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Swadeshi is not anti-wealth. It is all for augmenting wealth and power, but considers 
              prosperity as a social and national asset - not merely a personal asset. Wealth was not 
              the sole or even the most important index of social respect in the Swadeshi tradition.
            </p>
          </div>
        </div>

        {/* Final Quote */}
        <div className="text-center mt-12">
          <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
            "Swadeshi is a multidimensional thought, embracing civilisational, political and economic 
            aspects of human life and presenting an integrated vision of life in harmony with nature."
          </blockquote>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Philosophy